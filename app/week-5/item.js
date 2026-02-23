export default function Item({name, quantity, category}) {
    return (
        <div>
            <li className="border p-2 rounded mb-2 border-purple-500">
                {name} <br />
                Quantity: {quantity} <br />
                Category: {category}    
            </li>
        </div>
    );
}