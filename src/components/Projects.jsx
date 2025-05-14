import { Link } from 'react-router-dom';
import projects from '../data/projects';

export default function Projects() {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/proyecto/${project.id}`}
            className="block p-4 bg-[#161b22] border border-gray-700 rounded-2xl hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-blue-200">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}