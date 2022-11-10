import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export function Error404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full text-white">
      <Logo />
      <h1 className="text-3xl mb-[6px]">Página não encontrada</h1>
      <p className="italic">Está página não existe</p>
      <Link
        to="/"
        className="px-4 py-1 bg-gray-500 mt-4 rounded text-black hover:bg-white transition-all hover:scale-105"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}
