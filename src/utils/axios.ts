import axios from 'axios'
import router from '../router/index'
import md5 from 'js-md5'
import { exception } from 'vue-gtag'

const instance = axios.create({})
let isLoginLoading = false

window.localStorage.setItem('timestamp', ''+new Date().valueOf())


instance.interceptors.request.use(async (request:any) => {
  if(request.url?.indexOf('https://', 4) < 0) {
    const proxyArray = JSON.parse(window.localStorage.getItem('proxy') || '[]')
    if (proxyArray.length > 0) {
      const index = Math.floor((Math.random() * proxyArray.length))
      request.url = proxyArray[index] + '/' + request.url
    }
  }
  return request
})

instance.interceptors.request.use(async (request:any) => {
  if (request.url?.indexOf('/v1/shield/captcha/init') < 0 && request.url.indexOf('/v1/auth/signin') < 0) {
    const pikpakLogin = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
    request.headers = request.headers || {}
    if (pikpakLogin.access_token) {
      request.headers['Authorization'] = `${pikpakLogin.token_type || 'Bearer'} ${pikpakLogin.access_token}`
    }
    const client = JSON.parse(window.localStorage.getItem('pikpakClient')||'{}')
    request.headers['X-Device-Id'] = client.deviceId
  }
  return request
})

instance.interceptors.request.use(async (request:any) => {
  if (!request.url || request.url?.indexOf('/v1/shield/captcha/init') >= 0) {
    return request
  }
  const urls = /https:\/\/.*\.mypikpak\.com(\/.*)/.exec(request.url)
  const url = urls ? urls[1] : ''
  const action = request.method?.toUpperCase()+':'+url
  const token = await fetchCaptchaToken(action)
  if (!token) {
    throw 'Fetch captcha token error'
  }
  request.headers = request.headers || {}
  request.headers['X-Captcha-Token'] = token
  return request
})

// instance.interceptors.request.use(request => {
//   if (request.url?.indexOf('http://localhost') === 0) {
//     request.headers = request.headers || {}
//     if (request.method == 'post') {
//       request.headers['Content-Type'] = 'application/json'
//     } else {
//       request.headers['Content-Type'] = 'text/plain'
//     }
//     return request
//   }

//   const pikpakLogin = JSON.parse(window.localStorage.getItem('pikpakLogin') || '{}')
//   request.headers = request.headers || {}
//   if (pikpakLogin.access_token) {
//     request.headers['Authorization'] = `${pikpakLogin.token_type || 'Bearer'} ${pikpakLogin.access_token}`
//   }
//   if(request.url?.indexOf('https://', 4) === -1) {
//     const proxyArray = JSON.parse(window.localStorage.getItem('proxy') || '[]')
//     if (proxyArray.length > 0) {
//       const index = Math.floor((Math.random() * proxyArray.length))
//       request.url = proxyArray[index] + '/' + request.url
//     }
//   }
//   return request
// })

// let isLoginLoading = false
instance.interceptors.response.use(response => {
  return response
}, (error) => {
  const { response, config } = error
  if(response.status) {
    switch (response.status) {
      case 401:
        console.log(1)
        // router.push('/login')
        const loginData = window.localStorage.getItem('pikpakLoginData')
        const loginDataJson = loginData ? JSON.parse(loginData) : {}
        if(loginDataJson.username && loginDataJson.password && !isLoginLoading) {
          console.log('wait', config.url)
          isLoginLoading = true
          return instance.post('https://user.mypikpak.com/v1/auth/signin', {
            "captcha_token": "",
            "client_id": "YNxT9w7GMdWvEOKa",
            "client_secret": "dbw2OtmVEeuUvIptb1Coyg",
            ...loginDataJson
          })
            .then((res:any) => {
              if(res.data && res.data.access_token) {
                window.localStorage.setItem('pikpakLogin', JSON.stringify(res.data))
              }
              isLoginLoading = false
              return instance(config)
            })
            .catch(() => {
              router.push('/login')
              return false
            })
        } else if(loginDataJson.username && loginDataJson.password && isLoginLoading) {
          return new Promise((resolve, reject) => {
            const s = setInterval(() => {
              if(!isLoginLoading) {
                clearInterval(s)
                resolve(instance(config))
              }
            }, 100)
          })
        } else {
          router.push('/login?redirect=' + router.currentRoute.value.fullPath)
          return Promise.reject(error)
        }
        
        break;
      // case 400:  case 403:
      //   window.$message.error(response.data.error_description || '出错了')
      default:
        window.$message.error(response?.data?.error_description || '出错了')
        break;
    }
  }
  console.log(config.url, 111)
  return Promise.reject(error)
})

const instance2 = axios.create({})
instance2.interceptors.request.use(request => {
  request.headers = {
    Authorization: 'Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt',
    'Notion-Version': '2021-08-16',
    'Content-Type': 'application/json'
  }
  const proxyArray = JSON.parse(window.localStorage.getItem('proxy') || '[]')
  if (proxyArray.length > 0) {
    const index = Math.floor((Math.random() * proxyArray.length))
    request.url = proxyArray[index] + '/' + request.url
  }
  return request
})

async function fetchCaptchaToken(action: string) {
  const client = JSON.parse(window.localStorage.getItem('pikpakClient')||'{}')
  const loginData = JSON.parse(window.localStorage.getItem('pikpakLoginData')||'{}')
  if (!client.clientId) {
    return null
  }
  const meta:any = {}
  const params:any = {
    action,
    client_id: client.clientId,
    device_id: client.deviceId,
    meta
  }
  if (action == 'POST:/v1/auth/signin') {
    params.meta.email = loginData.username||''
  } else {
    const captchaToken = window.localStorage.getItem('last_captcha_token')
    if (!captchaToken) {
      throw {response: {status: 401}, message: 'No captcha token'}
    }
    const timestamp = window.localStorage.getItem('timestamp')||''
    const {sub} = JSON.parse(window.localStorage.getItem('pikpakLogin')||'{sub: ""}')
    params.captcha_token = captchaToken
    params.meta = {
      captcha_sign: sign(client.clientId, client.clientVersion, client.packageName, client.deviceId, timestamp),
      client_version: client.clientVersion,
      package_name: client.packageName,
      timestamp,
      user_id: sub
    }
  }
  const headers:any = {
    "X-Client-Id": client.clientId,
    "X-Client-Version": '1.0.0',
    "X-Device-Id": client.deviceId,
    "X-Device-Model": 'chrome%2F114.0.0.0',
    "X-Device-Name": 'PC-Chrome',
    "X-Device-Sign": 'wdi10.'+client.deviceId+'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    "X-Net-Work-Type": 'NONE',
    "X-Os-Version": 'MacIntel',
    "X-Platform-Version": 1,
    "X-Protocol-Version": 301,
    "X-Provider-Name": 'NONE',
    "X-Sdk-Version": '6.0.0'
  }
  const res:any = await instance.post('https://user.mypikpak.com/v1/shield/captcha/init', params, {headers})
  if (res && res.data && res.data.captcha_token) {
    const newCaptchaToken = res.data.captcha_token
    window.localStorage.setItem('captcha_token_'+action, newCaptchaToken)
    window.localStorage.setItem('last_captcha_token', newCaptchaToken)
    return newCaptchaToken
  }
  return null
}

function sign(clientId: string, clientVersion: string, packageName: string, deviceId: string, timestamp: any) {
  const algorithms = [{
      alg: "md5",
      salt: "C9qPpZLN8ucRTaTiUMWYS9cQvWOE"
  }, {
      alg: "md5",
      salt: "+r6CQVxjzJV6LCV"
  }, {
      alg: "md5",
      salt: "F"
  }, {
      alg: "md5",
      salt: "pFJRC"
  }, {
      alg: "md5",
      salt: "9WXYIDGrwTCz2OiVlgZa90qpECPD6olt"
  }, {
      alg: "md5",
      salt: "/750aCr4lm/Sly/c"
  }, {
      alg: "md5",
      salt: "RB+DT/gZCrbV"
  }, {
      alg: "md5",
      salt: ""
  }, {
      alg: "md5",
      salt: "CyLsf7hdkIRxRm215hl"
  }, {
      alg: "md5",
      salt: "7xHvLi2tOYP0Y92b"
  }, {
      alg: "md5",
      salt: "ZGTXXxu8E/MIWaEDB+Sm/"
  }, {
      alg: "md5",
      salt: "1UI3"
  }, {
      alg: "md5",
      salt: "E7fP5Pfijd+7K+t6Tg/NhuLq0eEUVChpJSkrKxpO"
  }, {
      alg: "md5",
      salt: "ihtqpG6FMt65+Xk+tWUH2"
  }, {
      alg: "md5",
      salt: "NhXXU9rg4XXdzo7u5o"
  }]
  return algorithms.reduce((a, b) => {
      return {salt: md5(a.salt+b.salt)}
  }, {salt: clientId+clientVersion+packageName+deviceId+timestamp}).salt
}


export const notionHttp = instance2
export default instance
