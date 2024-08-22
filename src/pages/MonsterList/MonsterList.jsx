// npm modules
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { getMonsterList } from "../../services/api-calls"

const MonsterList = () => {
    const [monsterList, setMonsterList] = useState([])

    useEffect(()=>{
        const fetchMonsterList = async ()=> {
            const monsterData = await getMonsterList()
            setMonsterList(monsterData)
        }
        fetchMonsterList()
        // fetchData()
    },[])

    if (!monsterList.length) return <h1>Loading scary monsters...</h1>



    return ( 
        <main className="monster-list">
            <h1>Monster List (OMG Scary)</h1>
            {monsterList.map(monster=>
                <div className = "link-container" key = {monster._id}>
                   <Link to={`/monsters/${monster._id}`}> {monster.name} </Link>
                </div>
            )}
        </main>

     )
}
 
export default MonsterList