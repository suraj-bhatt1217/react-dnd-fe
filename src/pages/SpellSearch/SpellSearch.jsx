// npm modules
import { useState, useEffect } from "react"

//components
import SearchForm from "../../components/SearchForm/SearchForm"

const SpellSearch = () => {

    const [allSpells, setAllSpells] = useState([])

    useEffect(()=>{

    },[])

    return (  
        <main className="spell-list">
            <h1>Spells</h1>
            <SearchForm/>
        </main>
      )
}
 
export default SpellSearch