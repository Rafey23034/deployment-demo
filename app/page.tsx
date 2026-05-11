import Clock from "./components/Clock";
import Weather from "./components/Weather";
import Todo from "./components/Todo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          Personal Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Your productivity hub
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <Clock />
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <Weather /> 
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl">
            <Todo />
          </div>

        </section>
      </div>
    </main>
  );
}