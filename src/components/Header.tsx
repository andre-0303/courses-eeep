import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-lg">
        EEEP Dep. José Maria Melo
      </Link>
      <nav className="space-x-4 text-sm">
        <Link to="/" className="hover:underline">Início</Link>
      </nav>
    </header>
  );
};
