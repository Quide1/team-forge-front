import { Users, Rocket, Zap, ArrowRight, Anvil } from "lucide-react";
import Link from "next/link";
function NavBarLandingPage() {
  return (
    <header className="bg-gray-600 flex px-4 lg:px-6 h-14 items-center justify-between">
      <Link className="flex items-center justify-center" href="#">
        <Anvil className="h-6 w-6 text-red-600" />
        <span className="ml-2 text-2xl font-bold ">ForgeTeam</span>
      </Link>
      <nav className="flex flex-row gap-2 text-wrap items-center justify-center py-4 lg:gap-4 text-sm">
        <Link href={"#nosotros"}>
          <p>Nosotros</p>
        </Link>
        <Link href={"#como-trabajamos"}>
          <p>Como trabajamos</p>
        </Link>
      </nav>
    </header>
  );
}

export default NavBarLandingPage;
