import Link from "next/link";
import linksData from "./pageLinks.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black px-[50px] py-8 -white">
      {/* Title */}
      <h1 className="mb-6 text-3xl font-bold">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      {/* Margin and y borders */}
      <div className="border-y border-purple-600/50">
        <div className="mx-auto max-w-7xl border-x border-purple-600/50 px-6 py-8">
          <div className="flex gap-6">

            {/* Navigation Links */}
            <div className="w-[620px] h-[800px] bg-black border border-purple-600 justify-items-center p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto justify-items-center ">
                {linksData.map((item) => (
                  <Link
                    key={item.linkPath}
                    href={item.linkPath}
                    className="w-[120px] min-h-[90px] flex items-center justify-center text-center rounded-lg border border-purple-600 bg-purple-900/30 p-4 font-semibold transition hover:bg-purple-700 hover:text-black break-words"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Website Info */}
            <div className="flex flex-col text-white w-[640px] h-[500px] bg-black border border-purple-600 justify-items-center p-6 rounded-lg shadow-lg">
              <h2 className="mb-4 text-2xl font-bold">About This Website</h2>
              <p className="mb-4">
                This website serves as a collection of assignments for the CPRG 306: Web Development 2. Each week, 
                a new assignment is added to the site, showcasing different aspects of web development. 
                The site uses JavaScript and includes React components, state management, and API integration with styled components.
              </p>

              {/* Divider */}  
              <div className="mb-4 w-full border border-purple-600/50"></div>

              {/* GitHub Repository Link */}
              <div className="mt-auto rounded-lg">

                <Link href="https://github.com/JoltedGeo/cprg306-assignments" 
                className="group relative block w-full overflow-hidden rounded-lg border border-purple-600/50 p-4">
                  {/* Opacity effect on hover */}
                  <span className="absolute inset-0 bg-purple-600/30 opacity-40 transition-opacity group-hover:opacity-70"></span>
                  <div className="relative z-10 transition-colors group-hover:text-purple-300">
                    <h2 className="mb-4 text-lg font-bold">GitHub Repository</h2>
                    <p className="text-sm">
                      You can find the source code for this website on GitHub.
                    </p>
                  </div>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
