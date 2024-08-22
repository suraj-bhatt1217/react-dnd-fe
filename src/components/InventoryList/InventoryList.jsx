import './InventoryList.css'

const InventoryList = (props) => {
    return ( <div className="inventory-list">
        <h2 className="inventory-title">
            {props.title}
        </h2>
        <ul className="inventory-items">
            {props.inventory.map(item => 
                    <li key={item._id} className="inventory-item">
                        <p className="item-name"> {item.name} </p>
                        <p className="item-cost"> Cost: {item.cost} </p>
                        {props.handleAddItem 
                        ? <button className="item-button add-button" onClick={()=> props.handleAddItem(item)}>Add Item</button> 
                        : <button className="item-button remove-button" onClick={() => props.handleRemoveItem(item)}>Remove Item</button> }
                    </li>
                )}
        </ul>
    </div> )
}
 
export default InventoryList;