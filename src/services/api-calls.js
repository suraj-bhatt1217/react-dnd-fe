const baseUrl = `https://sei-dnd-api.herokuapp.com`

export const getMonsterList = async () => {
    const res = await fetch(`${baseUrl}/api/monsters`)
    return res.json()
}

// export {
//     getMonsterList
// }

