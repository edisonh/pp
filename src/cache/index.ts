const baseUrl = window.location.origin.replace(/:\/\/.*?\./, '://myyun.')
const token = window.localStorage.getItem('myyun_token')
const pikMap = new Map<string, any>()
const localMap = new Map<string, any>()


export async function getPikFile(id: string) {
    try {
        if (pikMap.size === 0) {
            const res = await fetch(`${baseUrl}/xvideo/api/pik/files`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.ok) {
                const pikFiles = await res.json()
                for (let pik of pikFiles) {
                    pikMap.set(pik.id, pik)
                }
            }
        }
        if (localMap.size === 0) {
            const res = await fetch(`${baseUrl}/xvideo/api/local/files/simple`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (res.ok) {
                const locals = await res.json()
                for (let local of locals) {
                    localMap.set(local.id+'', local)
                }
            }
        }
        const pik = pikMap.get(id) || null
        if (!pik) {
        return null
        }
        const localSizes = pik.localIds && pik.localIds.split(',').map((id:string) => localMap.get(id)?.size || 1)
        return {...pik, localSizes}
    } catch (e) {
        console.error('Error fetching pik files:', e)
    }
    return []
}
