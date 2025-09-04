import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight text-center">
        Welcome to School Directory
      </h1>

      <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl text-center">
        A platform to manage school information effortlessly. Get started by selecting an option below.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Link to the addSchool page */}
        <Link
          href="/addSchool"
          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow text-center"
        >
          Add a New School
        </Link>

        {/* Link to the showSchools page */}
        <Link
          href="/showSchools"
          className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-full shadow text-center"
        >
          Show Schools
        </Link>
      </div>
    </div>
  );
}
