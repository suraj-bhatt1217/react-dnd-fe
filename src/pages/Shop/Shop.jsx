// npm modules
import { useState } from "react"

// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"
 
const Shop = () => {
    
    const [inventory, setInventory] = useState(inventoryData)
    console.log('Inventory Data:', inventoryData)

    return (
        <main>
            <h1>Shop</h1>
            <ul>
               <InventoryList inventory = {inventory} />
            </ul>
        </main>
    )
}
 
export default Shop
   