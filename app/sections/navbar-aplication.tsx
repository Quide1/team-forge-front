import React from "react";
import MiniMenu from "../components/mini-menu";
import { Bell, Search } from "lucide-react";
import Notifications from "../components/notifications";

function NavBarAplication() {
  return (
    <header className="h-14 border-b-[1px] border-gray-600 bg-custom-palette-500/80 flex flex-row justify-between px-4 items-center gap-2 text-black">
      <div className="flex flex-row gap-2">
        <button aria-label="Realizar búsqueda">
          <Search className="h-4 w-4" />
        </button>
        <input
          type="text"
          className="w-full md:w-64 px-2 py-2 rounded-md border border-input text-black  text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-transparent border-black bg-slate-50"
          placeholder="Nombre de proyecto"

        />
      </div>
      <Notifications />
      <MiniMenu />
    </header>
  );
}

export default NavBarAplication;
