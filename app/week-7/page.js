"use client";
import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";


export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
  setItems((prev) => [...prev, newItem]);
  };

  return (
    <main className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3 text-purple-600 animate-pulse">
            Shopping List
        </h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
    </main>
    );
}   