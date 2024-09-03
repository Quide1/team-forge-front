import { Ghost, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            404 - Página No Encontrada
          </h1>
          <p className="mx-auto max-w-[700px]  text-red-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            ¡Ups! La página que estás buscando parece haber desaparecido en el
            aire.
          </p>
        </div>
        <div className="w-full max-w-sm ">
          <div className="flex justify-center bg-slate-700 my-10">
            <Ghost className="h-24 w-24 text-red-600 animate-bounce" />
          </div>
        </div>
        <div className="space-x-4">
          <button className="bg-slate-700 rounded-lg p-4 flex flex-row">
            <Link href="/" className="flex flex-row items-center">
              <Home className="mr-2 h-4 w-4" />
              Regresar a Inicio
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
