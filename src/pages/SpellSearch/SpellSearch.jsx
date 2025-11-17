// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

//components
import SearchForm from "../../components/SearchForm/SearchForm"
import Pagination from "../../components/Pagination/Pagination"

//services
import { getSpells } from "../../services/api-calls"

import './SpellSearch.css'

const ITEMS_PER_PAGE = 10;

const SpellSearch = () => {

    const [allSpells, setAllSpells] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

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
        setCurrentPage(1) // Reset to first page on new search
    }

    const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentSpells = searchResults.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (  
        <main className="spell-list">
            <h1>Spells</h1>
            <div className="search-form-container">
                <SearchForm handleSpellSearch={handleSpellSearch} />
            </div>
            <div className="results-container">
                <div className="results-header">
                    {searchResults.length > 0 ? (
                        <>
                            <h2>{searchResults.length} results found</h2>
                            <p className="spell-count">Showing {startIndex + 1}-{Math.min(endIndex, searchResults.length)} of {searchResults.length} spells</p>
                        </>
                    ) : (
                        <h2 className="empty-state">Please search for a spell.</h2>
                    )}
                </div>
                {searchResults.length > 0 && (
                    <>
                        <div className="spells-list">
                            {currentSpells.map(spell => 
                                <div key={spell.index} className="link-container">
                                    <Link to={`/spells/${spell.index}`}> 
                                    {spell.name} 
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Pagination 
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </>
                )}
            </div>
        </main>
        )}


 
export default SpellSearch