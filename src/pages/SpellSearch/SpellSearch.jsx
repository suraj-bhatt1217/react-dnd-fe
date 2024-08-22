// npm modules
import { useState, useEffect } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"

//services
import { getSpells } from "../../services/api-calls"

const SpellSearch = () => {

    const [allSpells, setAllSpells] = useState([])

    useEffect(()=>{
        const fetchSpellList = async () => {
            const spellData = await getSpells()
            setAllSpells(spellData)
        }
        fetchSpellList()
    },[])

    return (  
        <main className="spell-list">
            <h1>Spells</h1>
            <SearchForm/>
        </main>
      )
}
 
export default SpellSearch