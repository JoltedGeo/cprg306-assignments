export default function Item({onSelect, name, quantity, category}) {
    return (
        <li className="border p-2 rounded mb-2 border-purple-500" onClick={onSelect}>
            {name} <br />
            Quantity: {quantity} <br />
            Category: {category}    
        </li>
    );
}