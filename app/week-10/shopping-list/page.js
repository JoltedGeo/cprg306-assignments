"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItems((prev) => [...prev, { id, ...newItem }]);
    };

    const loadItems = async () => {
        if (!user) return;
        const userItems = await getItems(user.uid);
        setItems(userItems);
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
        }, [user]);

    const handleItemSelect = (item) => {
        // Remove emojis from the item name
        let cleanedName = item.name.replace(/(\u2700-\u27bf|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26ff]|\u2B50)/g, '');
        // Remove size information (everything after comma) and trim whitespace
        cleanedName = cleanedName.split(',')[0].trim();
        setSelectedItemName(cleanedName);
    };

  if (!user) {
  return (
    <main className="min-h-screen bg-black px-[50px] py-8 text-white">
        <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>

        <div className="border-y border-purple-600/50 h-[700px]">
            <div className="mx-auto max-w-7xl border-x border-purple-600/50 px-6 py-8 h-[700px]">
            <div className="flex justify-center">
                <div className="w-[620px] bg-black border border-purple-600 p-6 rounded-lg shadow-lg text-center">
                <div className="space-y-4">
                    <p>You must be logged in to view this page.</p>

                    <div className="flex justify-center gap-4">
                    <Link
                        href="/week-10"
                        className="inline-block rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black"
                    >
                        Back to Login
                    </Link>

                    <Link
                        href="/"
                        className="inline-block rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black"
                    >
                        Homepage
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </main>
    );}

    return (
        <main className="relative min-h-screen px-22 pr-[700px]">
            <div className="home-button-wrapper">
                    <Link href="/" className="home-button" >
                        <span className="home-button-bg"></span>
                        <span className="home-button-text">Homepage</span>
                    </Link>
                </div>
                
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
