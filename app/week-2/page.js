import StudentInfo from "@/app/week-2/StudentInfo";
import Link from "next/link";
export default function Page() {
  return (
    <main className="min-h-screen bg-black px-[50px] py-8 -white">
      <div className="home-button-wrapper">
            <Link href="/" className="home-button" >
                <span className="home-button-bg"></span>
                <span className="home-button-text">Homepage</span>
            </Link>
        </div>
      <h1 className="pt-15">Shopping List</h1>
      <StudentInfo />
    </main>
  );
}