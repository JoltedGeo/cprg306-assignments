
export default function Item({ name, quantity, category }) {
  return (
      <li className="border p-8 rounded mb-2 ">
        <div className="bg-red-300 text-black border-4 border-blue-500 m-3 pl-4 rounded-[10px]">
          {name} <br />
          Quantity: {quantity} <br />
          Category: {category}
        </div>
      </li>
  );
}