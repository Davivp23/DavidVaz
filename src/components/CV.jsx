import React from 'react';
import Header from './Header';

export default function CV() {
    return (
        <div>
            <Header />
            <main className="container mx-auto grid grid-flow-row auto-rows-max px-4">

                {/* Sobre mí */}
                <section className="mt-12 mb-6 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Sobre mí</h2>
                <p className="pl-2 text-gray-300">Mi nombre es David y soy estudiante y 
                    programador. <br />
                    Trabajador y con muchas ganas de participar en proyectos que me ayuden a crecer como profesional. 
                    Me motiva aprender constantemente y aportar soluciones creativas y eficientes.<br />
                </p>
                </section>

                <div className="flex md:flex-row flex-col justify-between items-stretch h-full gap-4">
                    {/* Contenedor izquierdo */}
                    <div className="flex flex-col justify-between h-full flex-1 gap-4">
                        {/* Formación académica */}
                        <section className="flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden">
                        <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Formación académica</h2>
                        {/* ...contenido... */}
                        </section>

                        {/* Experiencia Profesional */}
                        <section className="flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden">
                        <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Experiencia profesional</h2>
                        {/* ...contenido... */}
                        </section>
                    </div>

                    {/* Contenedor derecho */}
                    <div className="flex flex-col justify-between h-full flex-1 gap-4">
                        {/* Habilidades técnicas */}
                        <section className="flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden">
                        <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Habilidades técnicas</h2>
                        {/* ...contenido... */}
                        </section>

                        {/* Idiomas */}
                        <section className="flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden">
                        <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Idiomas</h2>
                        {/* ...contenido... */}
                        </section>
                    </div>
                </div>

            </main>
        </div>
        
    );
}