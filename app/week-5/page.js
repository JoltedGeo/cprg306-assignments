import NewItem from "./NewItem";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-3 text-purple-600 animate-pulse">
            Week 5 - New Item
        </h1>
        <NewItem />
    </main>
    );
}