import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-10 text-gray-600">
        <h1 className="text-2xl font-semibold">
          Spotter Navbar Assignment
        </h1>
        <p className="mt-2 text-sm">
          Frontend assessment submission
        </p>
      </main>
    </>
  );
}
