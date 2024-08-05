// npm modules
import { useState } from "react"

// components
import InventoryList from "../../components/InventoryList/InventoryList"

// data
import { inventoryData } from "../../data/data"

//css
import './Shop.css'
 
const Shop = () => {
    const [shopInventory, setShopInventory] = useState(inventoryData)
    const [userInventory, setUserInventory] = useState([])

    const handleAddItem = (item) => { 
        setUserInventory([item, ...userInventory])
        setShopInventory(shopInventory.filter((el) => el._id != item._id ))
    }

    const handleRemoveItem = (item) => {
        setShopInventory([...shopInventory, item])
        setUserInventory(userInventory.filter((el) => el._id !== item._id))
    }

    return (
        <main>
            <h1>Shop</h1>       
            <ul>
            <section className="shop-section">
               <InventoryList 
                inventory = {shopInventory} 
                handleAddItem = {handleAddItem}
               />
               <InventoryList 
                inventory = {userInventory}
                handleRemoveItem = {handleRemoveItem} 
               />
            </section>
            </ul>
        </main>
    )
}
 
export default Shop 