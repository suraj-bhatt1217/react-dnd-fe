const baseUrl = `https://www.dnd5eapi.co/api/2014`

export const getMonsterList = async () => {
    const res = await fetch(`${baseUrl}/monsters`)
    const data = await res.json()
    // The new API returns {count, results: [{index, name, url}]}
    // Return the results array for compatibility with existing components
    return data.results || []
}

export const getMonster = async (monsterIndex) => {
    const res = await fetch(`${baseUrl}/monsters/${monsterIndex}`)
    const data = await res.json()
    // Transform snake_case to camelCase and adjust structure to match component expectations
    // Convert speed object to array format for component compatibility
    const speedArray = data.speed ? Object.entries(data.speed).map(([key, value]) => ({ [key]: value })) : []
    return {
        ...data,
        armorClass: data.armor_class,
        hitPoints: data.hit_points,
        speed: speedArray,
        // actions are already in the correct format
    }
}

export const getSpells = async () => {
    const res = await fetch(`${baseUrl}/spells`)
    const data = await res.json()
    // The new API returns {count, results: [{index, name, url}]}
    // Return the results array for compatibility with existing components
    return data.results || []
}

export const getSpell = async (spellIndex) => {
    const res = await fetch(`${baseUrl}/spells/${spellIndex}`)
    const data = await res.json()
    // Transform API response to match component expectations
    return {
        ...data,
        description: Array.isArray(data.desc) ? data.desc.join(' ') : data.desc,
        higherLevel: Array.isArray(data.higher_level) ? data.higher_level.join(' ') : data.higher_level,
        castingTime: data.casting_time,
        school: typeof data.school === 'object' ? data.school.name : data.school,
        classes: Array.isArray(data.classes) ? data.classes.map(c => typeof c === 'object' ? c.name : c) : data.classes,
        subclasses: Array.isArray(data.subclasses) ? data.subclasses.map(s => typeof s === 'object' ? s.name : s) : data.subclasses,
    }
}
// export {
    //     getMonsterList
// }

