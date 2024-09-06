"use client";
import {
  Bell,
  LogOut,
  Settings,
  User,
  UserCircle,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

function MiniMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside =  (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Añadir event listener al montar el componente
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminar event listener al desmontar el componente
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button aria-label="Menú de usuario" onClick={toggleOpen}>
        <UserCircle className="h-5 w-5" />
      </button>
      <menu
        className={`transition-all duration-300 ease-in-out absolute right-2 shadow-lg min-h-[100px] bg-black rounded-lg border border-gray-600 text-sm ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-2 gap-4 ">
          <span className="font-bold text-custom-palette-500">Mis proyectos</span>
          <Link
            href={"/settings?tab=personal-info"}
            className="flex flex-row items-center text-white
            hover:bg-slate-500/20 p-1"
          >
            <User className="mr-2 h-4 w-4" />
            <span>Perfil</span>
          </Link>
          <Link
            href={"/settings?tab=security"}
            className="flex flex-row items-center text-white hover:bg-slate-500/20 p-1"
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Configuración</span>
          </Link>
          <div className="flex flex-row items-center text-white hover:bg-slate-500/20 p-1">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Cerrar sesión</span>
          </div>
        </ul>
      </menu>
    </div>
  );
}

export default MiniMenu;
