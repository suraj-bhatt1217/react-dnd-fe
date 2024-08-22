import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getSpell } from "../../services/api-calls";

import './SpellDetails.css'

const SpellDetails = () => {

    const [spell, setSpell] = useState({})
    const {spellId} = useParams()

    useEffect(()=> {
        const fetchData = async () => {
            const spellData = await getSpell(spellId)
            setSpell(spellData) 
            }
            fetchData()
    },[spellId])

    if (!spell.name) return <h1>Loading Spell Details...</h1>
    return ( 
        
        <main className="spell-details">
            <h1>SpellDeets</h1>
            <h2>{spell.name}</h2>
            <p><strong>Description:</strong> {spell.description}</p>
            {spell.higherLevel && (
                <p><strong>Higher Level:</strong> {spell.higherLevel}</p>
            )}
            <p><strong>Range:</strong> {spell.range}</p>
            <p><strong>Components:</strong> {spell.components?.join(', ')}</p>
            <p><strong>Material:</strong> {spell.material}</p>
            <p><strong>Ritual:</strong> {spell.ritual ? 'Yes' : 'No'}</p>
            <p><strong>Duration:</strong> {spell.duration}</p>
            <p><strong>Concentration:</strong> {spell.concentration ? 'Yes' : 'No'}</p>
            <p><strong>Casting Time:</strong> {spell.castingTime}</p>
            <p><strong>Level:</strong> {spell.level}</p>
            <p><strong>School:</strong> {spell.school}</p>
            <p><strong>Classes:</strong> {spell.classes?.join(', ')}</p>
            {spell.subclasses && (
                <p><strong>Subclasses:</strong> {spell.subclasses.join(', ')}</p>
            )}
        </main>
     );
}
 
export default SpellDetails;