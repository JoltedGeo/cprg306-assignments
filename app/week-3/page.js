
import GroceryItemList from "./GroceryItemList";
import Link from "next/link";
export default function Page() {
  return (
    <main className="p-4 max-w-xl mx-auto ">
      <div className="home-button-wrapper">
            <Link href="/" className="home-button" >
                <span className="home-button-bg"></span>
                <span className="home-button-text">Homepage</span>
            </Link>
        </div>
      <h1 className="text-2xl font-bold mb-3 ">Shopping List</h1>
      <GroceryItemList></GroceryItemList>
    </main>
  );
}