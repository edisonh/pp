const baseUrl = window.location.origin.replace(/:\/\/.*?\./, '://myyun.')
const token = window.localStorage.getItem('myyun_token')
const pikMap = new Map<string, any>()
const localMap = new Map<string, any>()
const savingMap = new Map<string, any>()


async function fetchPikMap(ids: any) {
    //if (pikMap.size === 0) {
        const res = await fetch(`${baseUrl}/xvideo/api/pik/files`, {
            method: 'POST',
            body: JSON.stringify(ids),
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
    //}
}

async function fetchLocalMap(ids: any) {
    if (localMap.size === 0) {
        const res = await fetch(`${baseUrl}/xvideo/api/local/files/simple`, {
            method: 'POST',
            body: JSON.stringify(ids),
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
        //await fetchPikMap()
        //await fetchLocalMap()
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
        //await fetchPikMap()
        return savingMap.get(hash) || []
    } catch (e) {
        console.error('Error fetching savings:', e)
        return []
    }
}

export async function cachePikFiles(ids: any) {
    try {
        await Promise.allSettled([fetchPikMap(ids), fetchLocalMap(ids)])
    } catch (e) {
        console.error('Error fetching savings:', e)
    }
}