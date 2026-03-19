"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleLogin = async () => {
    try {
        await gitHubSignIn();
    } catch (error) {
        console.log(error);
    }
    };

    const handleLogout = async () => {
    try {
        await firebaseSignOut();
    } catch (error) {
        console.log(error);
    }
    };

    return (
        <main className="min-h-screen bg-black px-[50px] py-8 text-white">
            <h1 className="mb-6 text-3xl font-bold">Week 9 Shopping List</h1>

            <div className="border-y  border-purple-600/50 h-[800px]">
                <div className="mx-auto max-w-7xl border-x border-purple-600/50 px-6 py-8 h-[800px]">
                    <div className="flex justify-center">
                        <div className="w-[620px] bg-black border border-purple-600 p-6 rounded-lg shadow-lg text-center">
                            {!user ? (
                            <div className="space-y-4">
                                <p>Please log in to continue.</p>
                                <button onClick={handleLogin} className="rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black">
                                    Login with GitHub
                                </button>
                            </div>
                            ) : (
                            <div className="space-y-4">
                                <p>
                                    Welcome, {user.displayName} ({user.email})
                                </p>
                                <button onClick={handleLogout} className="rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black">
                                    Logout
                                </button>
                                <br />
                                <br />
                                <Link href="/week-9/shopping-list" className="inline-block rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black">
                                    Go to Shopping List
                                </Link>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}