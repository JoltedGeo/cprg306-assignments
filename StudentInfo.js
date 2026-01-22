import Link from "next/link";

export default function StudentInfo() {
    const githubUrl = "https://github.com/JoltedGeo/cprg306-assignments";
  return (
    <section>
        <h2>Student Info</h2>
        <div>
            <p>Hunter Norman</p>
        </div>
        <div>
            <Link href={githubUrl}>
            Github Link
            </Link>
        </div>
    </section>
  );
}