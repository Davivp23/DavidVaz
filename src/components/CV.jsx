import React from 'react';
import Header from './Header';

export default function CV() {
    return (
        <div>
            <Header />
            <main className="container mx-auto grid grid-flow-row auto-rows-max px-4">

                {/* Sobre mí */}
                <section className="my-12 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Sobre mí</h2>
                <p className="pl-2 text-gray-300">Mi nombre es David y soy estudiante y 
                    programador. <br />
                    Trabajador y con muchas ganas de participar en proyectos que me ayuden a crecer como profesional. 
                    Me motiva aprender constantemente y aportar soluciones creativas y eficientes.<br />
                </p>
                </section>
                <div className="flex md:flex-row flex-col justify-between items-center my-8">
                    {/* Formación académica */}
                    <section className="my-12 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                    <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Formación académica</h2>
                    <p className="pl-2 text-gray-300">
                        Ciclo formativo de grado superior - Desarrollo de aplicaciones web (DAW)<br />
                        Universitat Oberta de Catalunya (UOC); - 2/2025-Presente <br /> <br />
                    </p>
                    <p className="pl-2 text-gray-300">
                        Ingeniería en telecomunicaciones<br />
                        Universitat Politècnica de Catalunya (UPC) - 9/2022-1/2025 <br /> <br />
                    </p>
                    <p className="pl-2 text-gray-300">
                        Bachillerato científico-tecnológico<br />
                        Institut Frederic Mompou - 9/2020-6/2022 <br /> <br />
                    </p>
                    </section>

                    {/* Experiencia Profesional */}
                    <section className="my-12 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                    <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Experiencia profesional</h2>
                    <h3 className="pl-2 text-xl font-semibold mb-2 text-blue-400">Desarrollador Freelance - 2025</h3>
                    <p className="pl-2 text-gray-300">
                        Autohorario<br />
                        - Creación de una web app para la gestión de los horarios <br />
                        - Comunicación directa con el cliente y futura expansión <br /> <br />
                    </p>
                    <h3 className="pl-2 text-xl font-semibold mb-2 text-blue-400">Trabajos con contrato</h3>
                    <p className="pl-2 text-gray-300">
                        Frutería Cal Maimó<br />
                        - Desarrollo de una web app para gestionar caducidades, stock y futuros pedidos <br />
                        - Atención al público y resposición de productos <br /> <br />
                    </p>
                    </section>
                </div>
                
                {/* Habilidades técnicas */}
                <section className="my-12 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Habilidades técnicas</h2>
                <p className="pl-2 text-gray-300"> 
                    - Web: HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS <br />
                    - BBDD: SQL, Supabase <br />
                    - Otros lenguajes: Python, C, C++, C# <br />
                    - Sistemas operativos: Linux, Windows <br /> <br />
                </p>
                </section>

                {/* Idiomas */}
                <section className="my-12 p-8 bg-[#0a0f1c] border-2 border-blue-500 rounded-2xl hover:border-orange-500 hover:shadow-[0_0_20px_#ff6b35aa] transition-all duration-300 group overflow-hidden">
                <h2 className="pl-2 text-2xl font-semibold mb-4 text-blue-400">Idiomas</h2>
                <p className="pl-2 text-gray-300"> 
                    - Castellano: Nativo <br />
                    - Catalán: Nativo <br />
                    - Inglés: Fluido (oral y escrito) <br />
                    - Alemán: A2 <br /> <br />
                </p>
                </section>

            </main>
        </div>
        
    );
}