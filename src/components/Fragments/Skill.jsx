import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { listTools } from "../../data"; // Assuming listTools is exported from data.js

const Skill = () => {
  return (
    <section
      id="skill"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 isolate"
    >
      {/* Cosmic background */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Floating grid */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]">
        <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-indigo-900/30 blur-[120px] animate-float-slow"></div>
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-800/40 blur-[120px] animate-float-slower"></div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center" data-aos="fade-down">
          <span className="inline-flex items-center px-4 py-2 mb-4 text-xs font-medium tracking-wider rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-800/50 gap-2">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-indigo-400"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-indigo-500"></span>
            </span>
            CORE EXPERTISE
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl lg:text-6xl">
            What I Use
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
            Tools and technologies I rely on to build reliable, scalable, and
            modern web solutions
          </p>
        </div>

        {/* Tech stack grid - Now with SVG icons */}
        <div
          className="grid grid-cols-3 gap-4 mt-20 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"
          data-aos="fade-up"
        >
          {listTools.map((tool, index) => (
            <div
              key={tool.name}
              className="flex flex-col group"
              data-aos="fade-up"
              data-aos-delay={50 * (index % 7)}
            >
              <div
                className={`relative flex items-center justify-center p-5 mb-3 transition-all duration-500 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20`}
              >
                <div className="relative w-12 h-12">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full grayscale-100 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
                </div>
              </div>
              {/* <span className="text-sm font-medium text-gray-400 transition-all duration-300 group-hover:text-white">
                {tool.name}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
