import InventoryList from "../../components/InventoryList/InventoryList"
import { inventoryData } from "../../data/data"

const Shop = () => {
    console.log('Inventory Data:', inventoryData)
    return (
        <main>
            <h1>Shop</h1>
            <ul>
               <InventoryList inventory = {inventoryData} />
            </ul>
        </main>
    )
}

export default Shop