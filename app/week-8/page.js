"use client";
import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const handleItemSelect = (item) => {
    // Remove emojis from the item name
    let cleanedName = item.name.replace(/(\u2700-\u27bf|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26ff]|\u2B50)/g, '');
    
    // Remove size information (everything after comma) and trim whitespace
    cleanedName = cleanedName.split(',')[0].trim();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="relative min-h-screen px-22 pr-[700px]">
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-3 text-purple-600 animate-pulse">
                Shopping List
            </h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        {/* Meal Ideas Section */}
        <div className="w-[620px] fixed right-15 top-1/2 -translate-y-1/2">
            <MealIdeas ingredient={selectedItemName} />
        </div>
    </main>
    );
}   