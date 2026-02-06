import Item from "./item.js";
import items from "./items.json";
export default function ItemList() {
    return (
        <div>
            <ul>
                {items.map(item => (
                    <Item
                        key={item.id} name={item.name} quantity={item.quantity} category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}