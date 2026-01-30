
export default function Item({ name, quantity, category }) {
  return (
      <li className="border p-2 rounded ">
        <div>
          {name} <br />
          Quantity: {quantity} <br />
          Category: {category}
        </div>
      </li>
  );
} 