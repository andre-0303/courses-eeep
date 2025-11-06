import { Link } from "react-router-dom";
import logo from "../assets/logoeeep.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";


export const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo da EEEP Dep. José Maria Melo"
          className="w-12 h-12 object-contain"
        />
      </Link>

      {/* Navegação */}
      <nav className="flex items-center gap-4 text-sm font-medium">
        <Link
          to="/"
          className="hover:text-lime-300 transition-colors duration-200"
        >
          Início
        </Link>

        {/* Menu Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:text-lime-300 focus:outline-none transition-colors duration-200">
            Cursos
            <ChevronDown className="w-4 h-4 mt-[1px]" />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-white text-green-700 rounded-xl shadow-lg border border-green-100 mt-2"
          >
            <DropdownMenuItem asChild>
              <Link
                to="/curso/informatica"
                className="block px-3 py-2 rounded-md hover:bg-green-100"
              >
                💻 Informática
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/curso/administracao"
                className="block px-3 py-2 rounded-md hover:bg-green-100"
              >
                📊 Administração
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/curso/agropecuaria"
                className="block px-3 py-2 rounded-md hover:bg-green-100"
              >
                🌱 Agropecuária
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                to="/curso/edificacoes"
                className="block px-3 py-2 rounded-md hover:bg-green-100"
              >
                🧱 Edificações
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </header>
  );
};

