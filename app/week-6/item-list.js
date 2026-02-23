"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
    const [sortBy, setSortBy] = useState("name");

    // Sort using .sort and localeCompare for the name and category
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
          return a.category.localeCompare(b.category);
        }
    });

    return(
        // Render buttons and use ${ x ? x : x} for expression
        <div>
            <div className="mb-2 flex justify-center pt-5 pb-3">
                <button
                    onClick={() => setSortBy("name")}
                    className={`mr-2 px-2 py-1 border ${sortBy === "name" ? "bg-purple-600 text-white" : ""}`}>
                    Sort by Name
                </button>

                <button
                    onClick={() => setSortBy("category")}
                    className={`px-2 py-1 border ${sortBy === "category" ? "bg-purple-600 text-white" : ""}`}>
                    Sort by Category
                </button>
            </div>

            <ul className="grid grid-cols-3 gap-4"  >
                {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
                ))}
            </ul>
        </div>
    );
}