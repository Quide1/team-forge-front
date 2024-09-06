import Link from "next/link";
import { Users, Rocket, Zap, ArrowRight, Anvil, User } from "lucide-react";
import { featuresContent, howToWorkInfo } from "./mock/features";
import NavBarLandingPage from "./sections/navbar-landing";
export default function Home() {
  return (
    <>
        <NavBarLandingPage/>
      <main className="flex min-h-screen flex-col ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center space-y-4 text-center ">
              <div className="space-y-2">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold">
                  <span className="bg-gradient-to-l from-yellow-400 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                    Forja tu equipo
                  </span>
                  , crea proyectos impresionantes
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Conéctate con desconocidos talentosos, colabora en proyectos
                  emocionantes y lleva tus habilidades al siguiente nivel.
                </p>
              </div>
              <div>
                <Link href={"/home"}>
                  <button className="p-3 bg-custom-palette-950 rounded-lg text-sm lg:text-base hover:bg-custom-palette-600 transition-all font-bold  ">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32  items-center justify-center flex">
          <div className="flex flex-col container px-4 md:px-6 gap-12 items-center  justify-center ">
            <h2 className="text-2xl text-center lg:text-4xl font-bold ">
              ¿Por qué elegir ForgeTeam?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-[500px] border-gray-600 border p-6 text-center rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <Users className="w-12 h-12 text-custom-palette-500" />
                  <h3 className="text-xl font-bold">
                    Encuentra tu Equipo Perfecto
                  </h3>
                  <p className="text-gray-500 max-w-[350px]">
                    Encontrarás una gran cantidad de personas dispuestas a crear
                    impresionantes proyectos cooperando contigo
                  </p>
                </div>
              </div>
              <div className="max-w-[500px] border-gray-600 border p-6 text-center rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <Rocket className="w-12 h-12 text-custom-palette-500" />
                  <h3 className="text-xl font-bold">
                    Lanza Proyectos Emocionantes
                  </h3>
                  <p className="text-gray-500 max-w-[350px]">
                    Desde aplicaciones web hasta innovaciones en IA, da vida a
                    tus ideas con un equipo diverso y capacitado.
                  </p>
                </div>
              </div>
              <div className="max-w-[500px] border-gray-600 border p-6 text-center rounded-xl">
                <div className="flex flex-col items-center gap-4">
                  <Zap className="w-12 h-12 text-custom-palette-500" />
                  <h3 className="text-xl font-bold">Acelera tu Crecimiento</h3>
                  <p className="text-gray-500 max-w-[350px]">
                    Aprende de otros, expande tu red de contactos y construye un
                    portafolio que destaque en la industria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center  ">
          <div className="  flex flex-col container items-center justify-center ">
            <h2 className="text-2xl text-center lg:text-4xl font-bol mb-6 ">
              Cómo Trabajamos
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4">
              {howToWorkInfo.map((step, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center  text-center"
                >
                  <div className="w-12 h-12 rounded-full  text-white flex items-center justify-center text-xl font-bold mb-4 bg-custom-palette-900">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-slate-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center bg-custom-palette-600 text-black">
          <div className="container text-center ">
            <div className="flex flex-col">
              <div className="flex flex-col justify-center items-center gap-2 ">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para Comenzar tu Viaje?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-950 md:text-xl">
                  Únete a ForgeTeam hoy y convierte tus ideas en realidad con el
                  poder de la colaboración.
                </p>
              </div>
              <div className="flex flex-col gap-1 mt-2">
                <Link href={"/home"}>
                  <button className="p-3 bg-custom-palette-800 rounded-lg text-sm lg:text-base hover:bg-custom-palette-600 transition-all font-bold  ">
                    Comenzar
                  </button>
                </Link>
                <p className="text-gray-600 text-sm">
                  Al registrarte, aceptas nuestros{" "}
                  <Link href="#">Términos y Condiciones</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-row justify-between  items-center text-sm p-4">
        <p>Con ❤️ ☕ por Eze</p>
        <nav className="flex flex-row gap-4 text-sm px-2">
          <Link href="#">Términos de servicio</Link>
          <Link href="#">Privacidad</Link>
        </nav>
      </footer>
    </>
  );
}
