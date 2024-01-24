<template>
  <div class="list-page list-page-files" >
    <div class="header">
      <div class="search">
        <n-input-group>
          <n-input placeholder="文件名、hash" v-model:value="query">
            <template #prefix>
              <search></search>
            </template>
          </n-input>
          <n-button type="primary" ghost @click="searchFiles">
            搜索
          </n-button>
        </n-input-group>
      </div>
      <div class="action">
        <n-space>
          <n-button type="default" v-if="moveFiles?.length">
            粘贴已剪切{{moveFiles.length}}项资源
          </n-button>
          <n-button  @click="scanUndownloaded">
            检查未下载文件
          </n-button>
          <n-button  @click="scanRedundancy">
            检查重复文件
          </n-button>
          <n-button  @click="scanDeleted">
            检查已删除文件
          </n-button>
          <n-button  @click="scanLarge">
            检查大文件
          </n-button>
          <n-popconfirm @positive-click="scanAllFiles" >
            <template #trigger>
              <n-button>重新扫描</n-button>
            </template>
          </n-popconfirm>
        </n-space>
      </div>
    </div>
    <n-scrollbar style="max-height: calc(100vh - 190px);" @scroll="scrollHandle">
      <n-data-table v-model:checked-row-keys="checkedRowKeys"  :row-key="row => row.id" :data="filesList" size="small" :columns="columns" :bordered="false"></n-data-table>
      <div class="loading" v-if="loading">
        <n-spin size="small" />加载中
      </div>
    </n-scrollbar>
    <div class="outer-wrapper static show" v-if="checkedRowKeys.length">
      <div class="toolbar-wrapper">
        <div class="toolbar-item" @click="batchMoveAll">
          <n-tooltip>
            <template #trigger>
              <n-icon>
                <switch-horizontal></switch-horizontal>
              </n-icon>
            </template>
            剪切所选
          </n-tooltip>
        </div>
        <div class="toolbar-item" @click="downloadAll">
          <n-tooltip>
            <template #trigger>
              <n-icon>
                <icon-download></icon-download>
              </n-icon>
            </template>
            批量下载
          </n-tooltip>
        </div>
        
        <div class="toolbar-item" @click="deleteFile(checkedRowKeys)">
          <n-tooltip>
            <template #trigger>
              <n-icon>
                <circle-x></circle-x>
              </n-icon>
            </template>
            删除所选
          </n-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {withModifiers} from 'vue';
import { ref } from '@vue/reactivity';
import { h, computed, onMounted, watch, nextTick } from '@vue/runtime-core'
import http, { notionHttp } from '../utils/axios'
import { useRoute, useRouter } from 'vue-router'
import { NPopconfirm, DataTableColumns, NDataTable, NTime, NEllipsis, NModal, NCard, NInput, NBreadcrumb, NBreadcrumbItem, NIcon, NButton, NTooltip, NSpace, NScrollbar, NSpin, NDropdown, useDialog, NAlert, useNotification, NotificationReactive, NSelect, NForm, NFormItem, NTag, NText, NInputGroup } from 'naive-ui'
import { Search, CirclePlus, CircleX, Dots, Share, Copy as IconCopy, SwitchHorizontal, LetterA, ZoomQuestion, Download as IconDownload} from '@vicons/tabler'
import { byteConvert } from '../utils'
import ClipboardJS from 'clipboard'
import streamSaver from 'streamsaver'
import { DropdownMixedOption } from 'naive-ui/lib/dropdown/src/interface'
import axios from 'axios';

interface FileInfo {
  kind: string,
  mine_type: string,
  id: string,
  thumbnail_link: string,
  icon_link: string,
  name: string,
  size: number,
  hash: string
}

const filesList = ref()
const route = useRoute()
const router = useRouter()
const checkedRowKeys = ref<string[]>([])
const dialog = useDialog()
const loading = ref(false)
const moveFiles = ref()
const notification = useNotification()
const notificationRef = ref<NotificationReactive>()
const query = ref<string>('')

let lastAction: any = null

const columns = ref<DataTableColumns>([
  {
    type: 'selection'
  },
  {
    title: '名称',
    key: 'name',
    sorter: 'default',
    render: (row: any) => {
      return h('div', {
        class: 'file-info'
      }, [
        h('img', {
          src: row.thumbnail_link || row.icon_link
        }),
        h(NEllipsis, {
          class: 'title',
        },
          [
            h('span', {}, String(row.name)),
            !row.exist ? h('span') : h('a', {
              style: 'color: #306eff; text-decoration: underline; float: right;',
              target: '_blank',
              href: row.exist.url,
              onClick: withModifiers(() => { }, ['stop'])
            }, [row.exist.filename])
          ]
          // {
          //   default: () => String(row.name)
          // }
        ),
        h('span', {
          class: 'action'
        }, '1')
      ])
    }
  },
  {
    title: '大小',
    key: 'size',
    sorter: (rowA: any, rowB: any) => {
      return rowA.size - rowB.size
    },
    align: 'right',
    render: (row) => Number(row.size) > 0 ? byteConvert(Number(row.size)) : '',
    className: 'size',
    width: 100
  },
  {
    title: '路径',
    key: 'path',
    sorter: 'default',
    render: (row: any) => {
      return h('div', { class: 'file-info' }, 
      [
        h('img', { src: row.icon_link }),
        h(NEllipsis, { class: 'title' }, { default: () => String(row.path) })
      ])
    }
  }
])
 
const initPage = () => {
  moveFiles.value = JSON.parse(window.localStorage.getItem('pikpakMoveFiles') || '[]')
  filesList.value = []
  checkedRowKeys.value = []
}

watch(route, () => {
  initPage()
})

onMounted(() => {
  initPage()
})

const scrollHandle = (e: any) => {
  if (e.target.offsetHeight + e.target.scrollTop >= e.target.scrollHeight - 30) {

  }
}

const batchMoveAll = (items: object) => {
  let text: string[] = []
  filesList.value.forEach((item: any) => {
    if (checkedRowKeys.value.indexOf(item.id) !== -1) {
      text.push(item.id)
    } else {
      if (item.children) {
        for (let i in item.children) {
          if (checkedRowKeys.value.indexOf(item.children[i].id) !== -1) {
            text.push(item.children[i].id)
          }
        }
      }
    }
  })
  batchMove(text)
  checkedRowKeys.value = []
}

const batchMove = (items: object) => {
  moveFiles.value = items
  window.localStorage.setItem('pikpakMoveFiles', JSON.stringify(items))
  window.$message.success('剪切成功，请点击页面右上方粘贴按钮')
}

const deleteFile = (id: string | string[]) => {
  http.post('https://api-drive.mypikpak.com/drive/v1/files:batchTrash', {
    ids: typeof id === 'string' ? [id] : id
  })
  .then(() => {
      deleteFileRecords(typeof id === 'string' ? [id] : id)
      window.$message.success('删除成功')
      checkedRowKeys.value = []
      if (lastAction) {
        lastAction()
      }
  })
}

const downloadAll = async () => {

  const getFileInfo = async (id: string) => {
    const res: any = await http.get('https://api-drive.mypikpak.com/drive/v1/files/' + id, {
      params: {
        _magic: '2021',
        thumbnail_size: 'SIZE_LARGE'
      }
    })
    return res
  }

  const getSelectedFiles = async () => {
    const selectedFileIds = JSON.parse(JSON.stringify(checkedRowKeys.value))
    const folders = new Set<string>()
    for (let i in filesList.value) {
      if (filesList.value[i].kind === 'drive#folder') {
        folders.add(filesList.value[i].id)
      }
    }
    const selectedFiles = []
    for (let i in selectedFileIds) {
      if (folders.has(selectedFileIds[i])) {
        continue
      }
      const res: any = await getFileInfo(selectedFileIds[i])
      selectedFiles.push({ url: res.data.web_content_link, filename: res.data.name })
    }
    return selectedFiles
  }

  const sendDownloadMsg = (items: any) => {
    const extensionId = "chrome_extension_id"; // 插件ID
    chrome.runtime.sendMessage(extensionId, { msg: "pikpak_batch_download", items })
  }

  notificationRef.value = notification.create({
      title: '批量下载文件',
      closable: true,
      content: '正在获取文件列表...'
    })

  const selectedFiles = await getSelectedFiles()
  checkedRowKeys.value = []
  notificationRef.value.content = '共获取到' + selectedFiles.length + '个文件'
  sendDownloadMsg(selectedFiles)
}
   
const searchFiles = async () => {
  filesList.value = await queryFiles('name', query.value)
  lastAction = searchFiles
}

const scanRedundancy = async () => {
  filesList.value = await getRedundancyFiles();
  lastAction = scanRedundancy
}

const getFileList = async (parent_id: string, limit: number, page_token: string) => {
  const filters: any = {
    phase: { eq: "PHASE_TYPE_COMPLETE" },
    trashed: { eq: false }
  }
  const res: any = await http.get('https://api-drive.mypikpak.com/drive/v1/files', {
    params: {
      parent_id,
      limit,
      filters,
      thumbnail_size: 'SIZE_LARGE',
      with_audit: true,
      page_token: page_token || undefined,
    }
  })
  return res.data;
}

const getFileListAll = async (parentId: string) => {
  const limit = 100
  let nextPageToken = ''
  let files:any = []
  for (let i = 0; i < 10; i++) {
    const res = await getFileList(parentId, limit, nextPageToken)
    files = files.concat(res.files)
    if (res.files.length < limit || !res.next_page_token) {
      break
    }
    nextPageToken = res.next_page_token
  }
  return files
}

const LOCAL_SERVER_URL = 'http://localhost:3000/pikpak'

const addFiles = async (parentIds: string[], files: any[]) => {
  await http.post(`${LOCAL_SERVER_URL}/files`, { parentIds, files })
}

const getRedundancyFiles = async () => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/files/redundancy`)
  return res.data
}

const getUndownloadedFiles = async () => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/files/undownloaded`)
  return res.data
}

const getDeletedFiles = async () => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/files/deleted`)
  return res.data
}

const getLargeFiles = async () => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/files/large`)
  return res.data
} 

const deleteFileRecords = async (ids: string[]) => {
  await http.get(`${LOCAL_SERVER_URL}/delete/files/${ids.join(',')}`)
}

const queryFiles = async (query: string, value: string) => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/files/${query}/${encodeURIComponent(value)}`)
  return res.data
}

const findFileById = async (id: string) => {
  const res: any = await http.get(`${LOCAL_SERVER_URL}/file/${id}`)
  return res.data
}

const markScanned = async (id: string) => {
  await http.get(`${LOCAL_SERVER_URL}/file/scanned/${id}`)
}

const deepClone = (src: any) => {
  return JSON.parse(JSON.stringify(src))
}

const sleep = async (ms: number) => {
  return new Promise((resolve: any, reject) => {
    setTimeout(() => {
      resolve()
    }, ms)
  });
}

const deepScan = async (parentIds: string[]) => {
  const parentId = parentIds[parentIds.length - 1]
  const files = await getFileListAll(parentId)
  await addFiles(parentIds, files)
  for (let i = 0; i < files.length; i++) {
    if(files[i].kind == 'drive#folder') {
      const localFile = await findFileById(files[i].id)
      if (!localFile.scanned) {
        //await sleep(500)
        await deepScan(parentIds.concat([files[i].id]))
      }
    }
    if (parentIds.length == 1) {
      notify(`已扫描${Math.floor((i+1)/files.length*100)}%(${i+1}/${files.length})...`)
    }
  }
  if (parentId != '') {
    await markScanned(parentId)
  }
}

const notify = async (msg: string) => {
  if (notificationRef.value) {
    try {
      notificationRef.value.destroy()
    } catch(e) {
    }
  }
  notificationRef.value = notification.info({title: msg})
}

const scanAllFiles = async () => {
  notify('开始扫描全盘...')
  try {
    const rootId = ''
    await deepScan([rootId])
    notify('扫描完成')
  } catch(e) {
    notify('扫描出错: '+e)
  }
}

const scanUndownloaded = async () => {
  let files = await getUndownloadedFiles();
  //@ts-ignore
  files = files.map(f => ({...f, exist: {filename: f.name, url: getLocalFileUrl(f.name)}}));
  filesList.value = files;
  lastAction = getUndownloadedFiles 
}

const getLocalFileUrl = (name:string) => {
  return `http://localhost:3000/xvideo/search/vid/${encodeURIComponent(name)}`
}

const scanDeleted = async () => {
  let files = await getDeletedFiles();
  //@ts-ignore
  files = files.map(f => ({...f, exist: {filename: f.name, url: getLocalFileUrl(f.name)}})); 
  filesList.value = files;
  lastAction = getDeletedFiles 
}

const scanLarge = async () => {
  let files = await getLargeFiles();
  //@ts-ignore
  files = files.map(f => ({...f, exist: {filename: f.name, url: getLocalFileUrl(f.name)}})); 
  filesList.value = files;
  lastAction = getLargeFiles
}

</script>

<style>

.header {
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  justify-content: space-between;
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 16px;
}
.header .title {
  flex: 1;
  width: 0;
  text-overflow: ellipsis;
  margin-right: 20px;
}
.header .action {
  font-size: 24px;
}
.n-data-table-td {
  cursor: pointer;
}
.n-data-table-td.modified_time,.n-data-table-th.modified_time {
  color: rgba(37, 38, 43, 0.36);
}
.n-data-table-td.size,.n-data-table-th.szie {
  color: rgba(37, 38, 43, 0.36);
}
.file-info {
  display: flex;
  align-items: center;
}
.file-info img {
  width: 28px;
  height: 28px;
  margin-right: 20px;
}
.file-info .title {
  flex: 1;
  width: 0;
}
.file-info .action {
  display: none;
}
.list-page {
  padding: 40px;
}
@media(max-width: 968px) {
  .list-page {
    padding: 10px;
  }
  .file-info img {
    display: none;
  }
}
.list-page .loading {
  margin-top: 20px;
  text-align: center;
  color: rgba(37, 38, 43, 0.36);
}
.list-page .loading .n-spin-body {
  vertical-align: middle;
  margin-right: 10px;
}
.list-page-files {
  padding-bottom: 80px;
}
.list-page-files .n-data-table-td .n-space .n-text{
  font-size: 12px;
}
.outer-wrapper {
  opacity: 0;
  position: absolute;
  left: 50%;
  bottom: 52px;
  transform: translateX(-50%);
  z-index: 5;
  transition: opacity 0.3s ease;
}
.outer-wrapper.static {
  animation: move-down ease 0.3s;
}
.outer-wrapper.show {
  opacity: 1;
}
.outer-wrapper.show.static {
  animation: move-up ease 0.3s;
}
.toolbar-wrapper {
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 10px;
  border: 1px solid #84858d33;
  background: #000;
  overflow: visible;
  user-select: none;
  box-shadow: 0 0 1px 1px rgba(28, 28, 32, 0.05),
    0 8px 24px rgba(28, 28, 32, 0.12);
}
.toolbar-item {
  border-radius: 5px;
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  transition: background 0.3s ease;
  color: #fff;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.toolbar-item:first-child {
  margin-left: 0;
}
.tool-icon {
  font-size: 18px;
}
@keyframes move-down {
  0% {
    bottom: 52px;
  }
  100% {
    bottom: -52px;
  }
}
@keyframes move-up {
  0% {
    bottom: -52px;
  }
  100% {
    bottom: 52px;
  }
}

td i.n-base-icon.n-data-table-expand-trigger {
  float: left;
}

</style>
