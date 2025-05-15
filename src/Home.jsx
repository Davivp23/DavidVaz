export default function Home() {
  console.log("Home se está renderizando");

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold text-blue-400">¡Funciona!</h1>
      <p className="mt-4 text-gray-400">Este es un test temporal para verificar la vista principal.</p>
    </div>
  );
}
