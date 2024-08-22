// npm modules
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// services
import { getMonster } from "../../services/api-calls";

const MonsterDetails = () => {
    const [monsterDetails, setMonsterDetails] = useState({});
    const { monsterId } = useParams();

    useEffect(() => {
        const fetchDetails = async () => {
            const monsterData = await getMonster(monsterId);
            setMonsterDetails(monsterData);
        };
        fetchDetails();
    }, [monsterId]);

    if (!monsterDetails.name) return <h1>Loading scary details...</h1>;

    return ( 
        <main className="monster-details">
            <h1>MonsterDeets</h1>
            <div>
                {monsterDetails.image
                    ? <img 
                        style={{ width: "320px" }} 
                        src={`https://www.dnd5eapi.co${monsterDetails.image}`} 
                        alt={`A (scary) ${monsterDetails.name}!`} 
                      />
                    : <img 
                        src="https://picsum.photos/320/240/" 
                        alt="A random lorem picsum photo" 
                      />
                }
                <h2>{monsterDetails.name}</h2>
                <p>Type: {monsterDetails.type}</p>
                <p>Size: {monsterDetails.size}</p>
                <p>Armor Class: {monsterDetails.armorClass?.[0]?.value}</p>
                <p>Hit Points: {monsterDetails.hitPoints}</p>
                <p>Speed: {monsterDetails.speed?.map((s) => 
                    Object.entries(s).map(([key, value]) => `${key}: ${value}`).join(', ')
                ).join(', ')}</p>
                <p>Actions: {monsterDetails.actions?.map(action => action.name).join(', ')}</p>
            </div>
        </main>
    );
};

export default MonsterDetails;
