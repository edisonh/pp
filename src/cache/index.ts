const baseUrl = window.location.origin.replace(/:\/\/.*?\./, '://myyun.')
const token = window.localStorage.getItem('myyun_token')
const pikMap = new Map<string, any>()
const localMap = new Map<string, any>()
const savingMap = new Map<string, any>()


async function fetchPikMap() {
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
                if (pik.saving) {
                    const s = savingMap.get(pik.magnet) || []
                    s.push(pik)
                    savingMap.set(pik.magnet, s)
                }
            }
        }
    }
}

async function fetchLocalMap() {
    if (localMap.size === 0) {
        const res = await fetch(`${baseUrl}/xvideo/api/local/files/simple`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (res.ok) {
            const locals = await res.json()
            for (let local of locals) {
                localMap.set(local.id + '', local)
            }
        }
    }
}


export async function getPikFile(id: string) {
    try {
        await fetchPikMap()
        await fetchLocalMap()
        const pik = pikMap.get(id) || null
        if (!pik) {
            return null
        }
        const localSizes = pik.localIds && pik.localIds.split(',').map((id: string) => localMap.get(id)?.size || 1)
        return { ...pik, localSizes }
    } catch (e) {
        console.error('Error fetching pik files:', e)
    }
    return []
}

export async function getSaving(hash: string) {
    try {
        await fetchPikMap()
        return savingMap.get(hash) || []
    } catch (e) {
        console.error('Error fetching savings:', e)
        return []
    }
}