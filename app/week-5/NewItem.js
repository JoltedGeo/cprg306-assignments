"use client";
import { useState } from "react";

export default function NewItem (){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    //This const handles the submit form
    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            name,
            quantity,
            category
        };

        console.log(item);
        alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`)

        //This resets the form
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    return (
        <form onSubmit={handleSubmit} className="max-w-md bg-white p-4 rounded-lg">
        
        {/* Input box */}
        <label className="text-black">
            Item Name
        </label>
        <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., milk, 4 L 🥛"
            className="w-full p-2 mb-3 border rounded-md placeholder-gray-400 text-black border-purple-600 animate-pulse"
        />
        {/* Quantity and Category */}
        <div className="flex gap-2 mb-3">

            {/* Quantity box */}
            <div className="w-1/3">
                <label className="block text-black mb-1">
                    Quantity
                </label>
                <input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="p-2 border rounded-md text-gray-400 border-purple-600 animate-pulse"
                />
            </div>

            {/* Category box */}
            <div className="w-2/3">
                <label className="block text-black mb-1">
                    Category
                </label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 border rounded-md text-gray-400 border-purple-600 animate-pulse"
                >
                    {/* The list of options */}
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>

                </select>
            </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
        Submit
      </button>
    </form>
  );
}