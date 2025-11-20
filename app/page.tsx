import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-16 px-8 bg-white dark:bg-black text-center">
        <Image
          src="/logo-mutt.png"
          alt="Logo Mutt"
          width={120}
          height={120}
        />
        <h1 className="text-4xl font-bold text-black dark:text-white">
          ¡Bienvenido a Mutt Cotizador!
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Calcula el precio de tu pedido fácilmente. Selecciona una categoría para comenzar:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            🐶 Mutt tabletas
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            🐕 Canittas
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            🐾 Huellitas
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            🍖 Snacks
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">
            🐈 Arena para gatos
          </button>
        </div>
      </main>
    </div>
  );
}