import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoeeep.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import {
  Menu,
  Code,
  Building2,
  Sprout,
  ClipboardList,
  UserRound,
  Info,
  Mail,
} from "lucide-react";

export const Header = () => {
  // Estado para controlar a abertura do menu mobile
  const [open, setOpen] = useState(false);

  // Função que fecha o menu
  const handleClose = () => setOpen(false);

  return (
    <header className="bg-green-700 text-white px-6 py-3 shadow-md flex justify-between items-center">
      {/* Logo + Nome */}
      <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
        <img src={logo} alt="Logo da EEEP" className="w-10 h-10 object-contain" />
        <span className="font-bold text-lg tracking-tight">
          EEEP Dep. José Maria Melo
        </span>
      </Link>

      {/* Menu Desktop */}
      <nav className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavLink to="/">Início</NavLink>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-green-800 hover:text-lime-200 rounded-md px-4 py-2">
                Cursos
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white text-green-800 rounded-xl shadow-lg p-4 border border-green-100">
                <ul className="grid w-[320px] gap-3 sm:w-[400px] sm:grid-cols-2">
                  <ListItem
                    icon={<Code className="w-4 h-4 inline mr-1" />}
                    title="Informática"
                    to="/curso/informatica"
                    description="Desenvolvimento de sistemas e tecnologia."
                  />
                  <ListItem
                    icon={<ClipboardList className="w-4 h-4 inline mr-1" />}
                    title="Administração"
                    to="/curso/administracao"
                    description="Gestão, liderança e empreendedorismo."
                  />
                  <ListItem
                    icon={<Sprout className="w-4 h-4 inline mr-1" />}
                    title="Agropecuária"
                    to="/curso/agropecuaria"
                    description="Produção sustentável e inovação rural."
                  />
                  <ListItem
                    icon={<Building2 className="w-4 h-4 inline mr-1" />}
                    title="Edificações"
                    to="/curso/edificacoes"
                    description="Projetos e construção civil."
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/contato">Contato</NavLink>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="w-7 h-7 text-white" />
          </SheetTrigger>

          <SheetContent side="right" className="bg-green-700 text-white p-0">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              className="p-6"
            >
              <SheetHeader>
                <SheetTitle className="text-white font-bold text-xl mb-4">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-5 text-lg font-medium">
                <Link
                  to="/"
                  onClick={handleClose}
                  className="flex items-center gap-2 hover:text-lime-300"
                >
                  <UserRound className="w-5 h-5" /> Início
                </Link>

                <div>
                  <span className="font-semibold text-lime-200 flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" /> Cursos
                  </span>
                  <ul className="mt-2 ml-4 flex flex-col gap-3 text-base">
                    <Link
                      to="/curso/informatica"
                      onClick={handleClose}
                      className="flex items-center gap-2 hover:text-lime-300"
                    >
                      <Code className="w-5 h-5" /> Informática
                    </Link>
                    <Link
                      to="/curso/administracao"
                      onClick={handleClose}
                      className="flex items-center gap-2 hover:text-lime-300"
                    >
                      <ClipboardList className="w-5 h-5" /> Administração
                    </Link>
                    <Link
                      to="/curso/agropecuaria"
                      onClick={handleClose}
                      className="flex items-center gap-2 hover:text-lime-300"
                    >
                      <Sprout className="w-5 h-5" /> Agropecuária
                    </Link>
                    <Link
                      to="/curso/edificacoes"
                      onClick={handleClose}
                      className="flex items-center gap-2 hover:text-lime-300"
                    >
                      <Building2 className="w-5 h-5" /> Edificações
                    </Link>
                  </ul>
                </div>

                <Link
                  to="/sobre"
                  onClick={handleClose}
                  className="flex items-center gap-2 hover:text-lime-300"
                >
                  <Info className="w-5 h-5" /> Sobre
                </Link>

                <Link
                  to="/contato"
                  onClick={handleClose}
                  className="flex items-center gap-2 hover:text-lime-300"
                >
                  <Mail className="w-5 h-5" /> Contato
                </Link>
              </div>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

/* Helpers */
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={`${navigationMenuTriggerStyle()} bg-transparent text-white hover:bg-green-800 hover:text-lime-200 rounded-md px-4 py-2`}
      >
        <Link to={to}>{children}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function ListItem({
  title,
  description,
  to,
  icon,
}: {
  title: string;
  description: string;
  to: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700"
        >
          <div className="text-sm font-semibold leading-none flex items-center gap-1">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
