import React from 'react'
import NavBarAplication from '../sections/navbar-aplication'


import { projects } from '../mock/projects'
import MiniCardProject from '../components/mini-card-project'
function HomePage() {
  return (
    <div>
        <NavBarAplication/>
        <main className='flex flex-col items-center justify-center'>
        <section className="w-full p-12 bg-red-500">
          <div className='container'>
          <h1 className='text-3xl font-bold'>Proyectos</h1>

          </div>
        </section>
        <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          projects.map((e)=>{
            return <MiniCardProject key={e.id} project={e}/>
          })
        }
        </section>
        </main>
      
    </div>
  )
}

export default HomePage
