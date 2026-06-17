import { useEffect, useState } from "react";
import { getAllProjects } from "../services/projectService";

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    console.log(projects);
  try {
    const response = await getAllProjects();

    console.log(response.data);

    setProjects(response.data);

  } catch (error) {
    console.log(error);
  }
};

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 border-t border-slate-800 text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    Projects
  </h2>

  <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
  key={project.id}
  className="
    group
    bg-slate-900
    rounded-2xl
    overflow-hidden
    border
    border-slate-800

    hover:border-sky-500
    hover:-translate-y-2
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(14,165,233,0.35)]

    transition-all
    duration-500
  "
>

              <div className="overflow-hidden">
  <img
    src={project.imageUrl}
    alt={project.title}
    className="
      h-48
      w-full
      object-cover
      transition-transform
      duration-700
      group-hover:scale-110
    "
  />
</div>

              <div className="p-6">

                <h3 className="text-xl font-semibold text-sky-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies
                        ?.split(",")
                            .map((tech, index) => (
                    <span
                        key={index}
                        className="
px-3
py-1
text-sm
rounded-full
bg-sky-500/20
text-sky-300
border
border-sky-500/30

hover:bg-sky-500/30
hover:scale-105

transition-all
duration-300
"
                    >
                        {tech.trim()}
                    </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-6">

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4
                    py-2
                    rounded-lg
                    bg-slate-800
                    hover:bg-slate-700
                    transition
                  "
                >
                  GitHub
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    px-4
                    py-2
                    rounded-lg
                    bg-sky-500
                    hover:bg-sky-600
                    transition
                  "
                >
                  Live Demo
                </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;