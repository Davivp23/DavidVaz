import React from 'react';
import Header from '../components/sharedComponents/Header';
import { motion } from 'framer-motion';

export default function CV() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="bg-background transition-all duration-300 text-foreground min-h-screen font-sans">
            <Header />
            <main className="container mx-auto px-4 py-12 max-w-6xl">
                <motion.div variants={containerVariants} initial="hidden" animate="show" className="flex flex-col gap-8">

                    {/* Sobre mí */}
                    <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 md:p-12 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500">
                        <h2 className="text-3xl font-bold mb-6 text-contraste">Sobre mí</h2>
                        <p className="text-lg opacity-90 text-contraste leading-relaxed">
                            Mi nombre es David y soy estudiante y programador. <br /><br />
                            Soy trabajador y tengo muchas ganas de participar en proyectos que me ayuden a crecer como profesional.
                            Me motiva aprender constantemente y aportar soluciones creativas y eficientes.
                        </p>
                    </motion.section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contenedor izquierdo: Formación y Experiencia */}
                        <div className="flex flex-col gap-8">
                            {/* Formación académica */}
                            <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 flex-1">
                                <h2 className="text-2xl font-bold mb-6 text-contraste">Formación académica</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-contraste">Ciclo formativo de grado superior (DAW)</h3>
                                    <p className="text-contraste/80">Universitat Oberta de Catalunya (UOC) - 2/2025-Presente</p>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-contraste">Ingeniería en telecomunicaciones</h3>
                                    <p className="text-contraste/80">Universitat Politècnica de Catalunya (UPC) - 9/2022-1/2025</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-contraste">Bachillerato científico-tecnológico</h3>
                                    <p className="text-contraste/80">Institut Frederic Mompou - 9/2020-6/2022</p>
                                </div>
                            </motion.section>

                            {/* Experiencia Profesional */}
                            <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 flex-1">
                                <h2 className="text-2xl font-bold mb-6 text-contraste">Experiencia profesional</h2>
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold text-contraste">Desarrollador Freelance - 2025</h3>
                                    <p className="text-contraste/80 mt-2 mb-1"><strong>Autohorario</strong></p>
                                    <ul className="text-contraste/80 list-disc list-inside">
                                        <li>Creación de una web app para la gestión de horarios</li>
                                        <li>Comunicación directa con el cliente y futura expansión</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-contraste">Trabajos con contrato</h3>
                                    <p className="text-contraste/80 mt-2 mb-1"><strong>Frutería Cal Maimó</strong></p>
                                    <ul className="text-contraste/80 list-disc list-inside">
                                        <li>Desarrollo de una web app para gestionar caducidades, stock y futuros pedidos</li>
                                        <li>Atención al público y resposición de productos</li>
                                    </ul>
                                </div>
                            </motion.section>
                        </div>

                        {/* Contenedor derecho: Lenguajes e Idiomas */}
                        <div className="flex flex-col gap-8">
                            {/* Lenguajes */}
                            <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 flex-1">
                                <h2 className="text-2xl font-bold mb-6 text-contraste">Lenguajes y Tecnologías</h2>
                                <ul className="text-contraste/90 space-y-4 text-lg">
                                    <li><strong>Web:</strong> HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS</li>
                                    <li><strong>BBDD:</strong> SQL, Supabase</li>
                                    <li><strong>Otros lenguajes:</strong> Python, C, C++, C#</li>
                                    <li><strong>Sistemas operativos:</strong> Linux, Windows</li>
                                </ul>
                            </motion.section>

                            {/* Idiomas */}
                            <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 flex-1">
                                <h2 className="text-2xl font-bold mb-6 text-contraste">Idiomas</h2>
                                <ul className="text-contraste/90 space-y-4 text-lg">
                                    <li><strong>Castellano:</strong> Nativo</li>
                                    <li><strong>Catalán:</strong> Nativo</li>
                                    <li><strong>Inglés:</strong> Fluido (oral y escrito)</li>
                                    <li><strong>Alemán:</strong> A2</li>
                                </ul>
                            </motion.section>
                        </div>
                    </div>

                    {/* Además */}
                    <motion.section variants={itemVariants} className="bg-foreground rounded-3xl p-8 md:p-12 shadow-sm border border-transparent hover:border-contraste/50 hover:shadow-xl transition-all duration-500 mb-12">
                        <h2 className="text-3xl font-bold mb-6 text-contraste">Además</h2>
                        <p className="text-lg opacity-90 text-contraste mb-4">
                            Además de la programación, me gustan muchas otras cosas:
                        </p>
                        <ul className="text-lg opacity-90 text-contraste space-y-3 list-disc list-inside">
                            <li><strong>Los coches:</strong> actualmente estoy restaurando un Volkswagen Golf clásico y me encanta conducir</li>
                            <li><strong>La ingeniería:</strong> disfruto creando soluciones de todo tipo, pero especialmente la mecánica y electrónica</li>
                            <li><strong>El trading:</strong> tanto el manual como el algorítmico, y en todos los mercados</li>
                            <li><strong>La música:</strong> empecé a tocar el piano con 5 años en el liceo y desde entonces no he podido parar</li>
                        </ul>
                    </motion.section>

                </motion.div>
            </main>
        </div>
    );
}