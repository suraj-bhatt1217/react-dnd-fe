// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//components
import SearchForm from "../../components/SearchForm/SearchForm"

//services
import { getSpells } from "../../services/api-calls"

import './SpellSearch.css'

const SpellSearch = () => {

    const [allSpells, setAllSpells] = useState([])
    const [searchResults, setSearchResults] = useState([])

    useEffect(()=>{
        const fetchSpellList = async () => {
            const spellData = await getSpells()
            setAllSpells(spellData)
        }
        fetchSpellList()
    }, [])

    const handleSpellSearch = (formData) => {
        const filteredSpellResults = allSpells.filter(spell => 
            spell.name.toLowerCase().includes(formData.query.toLowerCase())
        )
        setSearchResults(filteredSpellResults)
    }

    return (  
        <main className="spell-list">
            <h1>Spells</h1>
            <SearchForm handleSpellSearch={handleSpellSearch} />
            {searchResults.length
            ? <h2>{searchResults.length} results found</h2>
                : 
                <h2>Please search for a spell.</h2>}
            {searchResults.map(spell => 
                <div key={spell._id} className="link-container">
                    <Link to={`/spells/${spell._id}`}> 
                    {spell.name} 
                    </Link>
                </div>
            )}
        </main>
        )}


 
export default SpellSearch