"use client";
import { useState } from "react";

const initialState = { name: "", quantity: 1, category: "produce" };

export default function NewItem ({ onAddItem }){
    const [item, setItem] = useState({...initialState});

    //This const handles the submit form
    const handleSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            ...item,
            id: Math.random().toString(36).substring(2, 9)
        };

        onAddItem(newItem)

        //This resets the form
        setItem(initialState);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setItem((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md bg-white p-4 rounded-lg">
        
        {/* Input box */}
        <label className="text-black">
            Item Name
        </label>
        <input
            type="text"
            name="name"
            value={item.name}
            required
            onChange={(e) => handleChange(e)}
            placeholder="e.g., milk, 4 L 🥛"
            className="w-full p-2 mb-3 border rounded-md placeholder-gray-400 text-black border-purple-600 animate-pulse"/>
            
        {/* Quantity and Category */}
        <div className="flex gap-2 mb-3">

            {/* Quantity box */}
            <div className="w-1/3">
                <label className="block text-black mb-1">
                    Quantity
                </label>
                <input
                    type="number"
                    name="quantity"
                    min="1"
                    max="99"
                    value={item.quantity}
                    onChange={(e) => handleChange(e)}
                    className="p-2 border rounded-md text-gray-400 border-purple-600 animate-pulse"/>
            </div>

            {/* Category box */}
            <div className="w-2/3">
                <label className="block text-black mb-1">
                    Category
                </label>
                <select
                    name="category"
                    value={item.category}
                    onChange={(e) => handleChange(e)}
                    className="p-2 border rounded-md text-gray-400 border-purple-600 animate-pulse">

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
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Submit
        </button>
    </form>
  );
}