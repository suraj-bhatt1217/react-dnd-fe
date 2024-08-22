const baseUrl = `https://sei-dnd-api.herokuapp.com`

export const getMonsterList = async () => {
    const res = await fetch(`${baseUrl}/api/monsters`)
    return res.json()
}

export const getMonster = async (monsterId) => {
    const res = await fetch(`${baseUrl}/api/monsters/${monsterId}`)
    return res.json()
}

export const getSpells = async () => {
    const res = await fetch(`${baseUrl}/api/spells`)
    return res.json()
}

// export {
//     getMonsterList
// }

