import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "Modern portfolio built using React, Tailwind CSS, and Framer Motion.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "MERN Authentication",
    description: "Authentication system with login, register, JWT, and MongoDB.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    tech: ["Node", "MongoDB", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "Admin Dashboard",
    description: "Responsive dashboard interface with analytics-style layouts.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    tech: ["React", "Chart.js", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "Weather App",
    description: "Weather forecast app using Fetch API and OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    tech: ["JavaScript", "API"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description: "CRUD task manager concept with a MongoDB-backed workflow.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    tech: ["MERN"],
    github: "#",
    live: "#",
  },
  {
    title: "Landing Page",
    description: "Animated SaaS landing page with polished responsive sections.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    tech: ["React"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="Featured Projects"
          subtitle="Projects that showcase my frontend and backend development journey."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              className="glass group overflow-hidden"
            >
              <img
                src={project.image}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                alt={project.title}
                loading="lazy"
              />

              <div className="p-6">
                <h3 className="text-xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-20 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-teal-300/10 px-3 py-1 text-xs font-bold text-teal-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 text-sm font-bold text-slate-200">
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 transition hover:text-teal-300"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 transition hover:text-teal-300"
                  >
                    Live
                    <ExternalLink size={17} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
