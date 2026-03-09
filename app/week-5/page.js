import NewItem from "./NewItem";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
        <div className="home-button-wrapper">
                <Link href="/" className="home-button" >
                    <span className="home-button-bg"></span>
                    <span className="home-button-text">Homepage</span>
                </Link>
            </div>
        <h1 className="text-2xl font-bold mb-3 text-purple-600 animate-pulse">
            Week 5 - New Item
        </h1>
        <NewItem />
    </main>
    );
}