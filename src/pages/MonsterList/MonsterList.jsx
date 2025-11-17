// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getMonsterList } from "../../services/api-calls"
import Pagination from "../../components/Pagination/Pagination"

import './MonsterList.css'

const ITEMS_PER_PAGE = 10;

const MonsterList = () => {
    const [monsterList, setMonsterList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        const fetchMonsterList = async ()=> {
            const monsterData = await getMonsterList()
            setMonsterList(monsterData)
        }
        fetchMonsterList()
    },[])

    if (!monsterList.length) return <h1>Loading scary monsters...</h1>

    const totalPages = Math.ceil(monsterList.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentMonsters = monsterList.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( 
        <main className="monster-list">
            <h1>Monster List (OMG Scary)</h1>
            <p className="monster-count">Showing {startIndex + 1}-{Math.min(endIndex, monsterList.length)} of {monsterList.length} monsters</p>
            {currentMonsters.map(monster=>
                <div className = "link-container" key = {monster.index}>
                   <Link to={`/monsters/${monster.index}`}> {monster.name} </Link>
                </div>
            )}
            <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </main>

     )
}
 
export default MonsterList