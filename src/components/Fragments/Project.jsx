// src/components/Project.jsx
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { listProject, listTools } from "../../data"; // Assuming listProject and listTools are exported from data.js

const Project = () => {
  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-gray-950"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-transparent"></div>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            My <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Selected works showcasing my development skills
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listProject.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={project.dad}
            >
              {/* Project image with glass effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.gambar}
                  alt={project.nama}
                  className="object-cover w-full h-full p-3 rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Project content */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-white">
                  {project.nama}
                </h3>
                <p className="mb-4 text-sm text-gray-400">{project.desk}</p>

                {/* Project footer */}
                <div className="flex justify-between items-center mt-4">
                  {/* Tech stack icon */}
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => {
                      const toolData = listTools.find(
                        (t) => t.name.toLowerCase() === tool.toLowerCase()
                      );
                      return (
                        toolData?.icon && (
                          <img
                            key={tool}
                            src={toolData.icon}
                            alt={tool}
                            title={tool}
                            className="w-5 h-5 grayscale-100 hover:grayscale-0 transition-all duration-200"
                          />
                        )
                      );
                    })}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-indigo-400 transition-colors"
                  >
                    {project.type === "code" ? (
                      <>
                        <i className="ri-github-fill mr-2"></i> Code
                      </>
                    ) : (
                      <>
                        <i className="ri-external-link-line mr-2"></i> Preview
                      </>
                    )}
                  </a>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-indigo-500/10 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;