// npm modules
import { useState } from "react"

// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"
 
const Shop = () => {
    const [inventory, setInventory] = useState(inventoryData)

    const handleAddItem = () => { 
        setInventory([{ _id: 26, name: "Alienware", cost: 25, weight: 20 },
            ...inventory])
    }

    return (
        <main>
            <h1>Shop</h1>
            <button onClick={handleAddItem}>Click here</button>
            <ul>
               <InventoryList inventory = {inventory} />
            </ul>
        </main>
    )
}
 
export default Shop 