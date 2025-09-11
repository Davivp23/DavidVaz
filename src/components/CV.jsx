import React from 'react';
import Header from './Header';

export default function CV() {
    return (
        <div className="dark:bg-[#f0f0f0] transition-all duration-300 bg-[#0d1117] text-white min-h-screen font-sans">
            <Header />
            <main className="container mx-auto grid grid-flow-row auto-rows-max px-4">

                {/* Sobre mí */}
                <section className="dark:bg-[#d2d7ee] flex flex-col justify-center mt-12 mb-6 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Sobre mí</h2>
                <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">Mi nombre es David y soy estudiante y 
                    programador. <br />
                    Soy trabajador y tengo muchas ganas de participar en proyectos que me ayuden a crecer como profesional. 
                    Me motiva aprender constantemente y aportar soluciones creativas y eficientes.<br />
                </p>
                </section>
                <div className="flex md:flex-row flex-col justify-between items-stretch h-full gap-4">
                    {/* Contenedor izquierdo */}
                    <div className="w-full md:flex-[2] flex flex-col justify-between h-full flex-1 gap-4">
                        {/* Formación académica */}
                        <section className="dark:bg-[#d2d7ee] flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden flex flex-col justify-center">
                            <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400 flex flex-col justify-center">Formación académica</h2>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                                Ciclo formativo de grado superior - Desarrollo de aplicaciones web (DAW)<br />
                                Universitat Oberta de Catalunya (UOC) - 2/2025-Presente <br /> <br />
                            </p>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                                Ingeniería en telecomunicaciones<br />
                                Universitat Politècnica de Catalunya (UPC) - 9/2022-1/2025 <br /> <br />
                            </p>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                                Bachillerato científico-tecnológico<br />
                                Institut Frederic Mompou - 9/2020-6/2022 <br />
                            </p>
                        </section>

                        {/* Experiencia Profesional */}
                        <section className="dark:bg-[#d2d7ee] flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group flex flex-col justify-center">
                            <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400 flex flex-col justify-center">Experiencia profesional</h2>
                            <h3 className="pl-2 text-xl font-semibold mb-2 text-blue-400">Desarrollador Freelance - 2025</h3>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                                Autohorario<br />
                                - Creación de una web app para la gestión de los horarios <br />
                                - Comunicación directa con el cliente y futura expansión <br /> <br />
                            </p>
                            <h3 className="pl-2 text-xl font-semibold mb-2 text-blue-400">Trabajos con contrato</h3>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                                Frutería Cal Maimó<br />
                                - Desarrollo de una web app para gestionar caducidades, stock y futuros pedidos <br />
                                - Atención al público y resposición de productos <br /> <br />
                            </p>
                        </section>
                    </div>

                    {/* Contenedor derecho */}
                    <div className="w-full md:flex-[1] flex flex-col justify-between h-full flex-1 gap-4">
                        {/* Lenguajes */}
                        <section className="dark:bg-[#d2d7ee] flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden flex flex-col justify-center">
                            <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400 flex flex-col justify-center">Lenguajes</h2>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300"> 
                                - Web: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS <br />
                                - BBDD: SQL, Supabase <br />
                                - Otros lenguajes: Python, C, C++, C# <br />
                                - Sistemas operativos: Linux, Windows <br />
                            </p>
                        </section>

                        {/* Idiomas */}
                        <section className="dark:bg-[#d2d7ee] flex-1 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl 
                                            hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] 
                                            transition-all duration-300 group overflow-hidden flex flex-col justify-center">
                            <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400 flex flex-col justify-center">Idiomas</h2>
                            <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300"> 
                                - Castellano: Nativo <br />
                                - Catalán: Nativo <br />
                                - Inglés: Fluido (oral y escrito) <br />
                                - Alemán: A2 <br />
                            </p>
                        </section>
                    </div>
                </div>
                {/* A demás */}
                <section className="dark:bg-[#d2d7ee] flex flex-col justify-center mt-6 mb-6 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                    <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">A demás</h2>
                    <p className="pl-2 text-gray-300 dark:text-gray-600 transition-all duration-300">
                        A demás de la programación, me gustan muchas otras cosas: <br />
                        - Los coches: actualmente estoy restaurando un Volkswagen Golf clásico y me encanta conducir <br />
                        - La ingeniería: disfruto creando soluciones de todo tipo, pero especialmente la mecánica y electrónica (a parte de la programación) <br />
                        - El trading: tanto el manual como el algorítmico, y en todos los mercados <br />
                        - La música: empecé a tocar el piano con 5 años en el liceo y desde entonces no he podido parar <br />
                    </p>
                </section>
            </main>
        </div>
        
    );
}