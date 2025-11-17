import './InventoryList.css'

const InventoryList = (props) => {
    return ( <div className="inventory-list">
        <h2 className="inventory-title">
            {props.title}
        </h2>
        <ul className="inventory-items">
            {props.inventory.length > 0 ? (
                props.inventory.map(item => 
                    <li key={item._id} className="inventory-item">
                        <p className="item-name"> {item.name} </p>
                        <p className="item-cost"> Cost: {item.cost} </p>
                        {props.handleAddItem 
                        ? <button className="item-button add-button" onClick={()=> props.handleAddItem(item)}>Add Item</button> 
                        : <button className="item-button remove-button" onClick={() => props.handleRemoveItem(item)}>Remove Item</button> }
                    </li>
                )
            ) : (
                <li style={{ 
                    textAlign: 'center', 
                    padding: '2rem', 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    fontStyle: 'italic',
                    listStyle: 'none'
                }}>
                    No items available
                </li>
            )}
        </ul>
    </div> )
}
 
export default InventoryList;