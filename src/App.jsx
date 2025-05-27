import React, { useEffect } from "react";
// list project & tools
import { listProject, listTools, listSocial } from "./data";
// imagedata
import imageData from "./data";
// typed js
import Typed from "typed.js";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const typedText = new Typed(".typewriter-text", {
      strings: ["Web Developer", "Backend Developer", "Frontend Developer"],
      typeSpeed: 90,
      backSpeed: 50,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typedText.destroy();
    };
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative flex flex-col justify-center w-full min-h-screen px-6 overflow-hidden isolate"
      >
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-indigo-900/20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full bg-indigo-800/30 blur-[100px]"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full gap-12 mx-auto max-w-7xl md:flex-row md:items-center md:gap-24">
          {/* Left: Hero Text */}
          <div
            className="order-2 text-center md:order-1 md:text-left"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-1.5 text-xs font-medium tracking-wider rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-800/50 gap-2">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-indigo-400"></span>
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-indigo-500"></span>
                </span>
                WELCOME TO MY PORTFOLIO
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Hi, I'm <span className="text-indigo-700">Abdurrahman Faiz</span>
            </h1>

            <div className="mb-6">
              <p className="text-xl font-medium text-gray-300">
                I'm a{" "}
                <span className="font-bold text-indigo-600 typewriter-text"></span>
              </p>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-400 max-w-2xl">
              A Software Engineering graduate with a passion for design and
              development. I build clean, modern, and user-friendly web and
              mobile applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="#about"
                className="group flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 shadow-lg hover:shadow-indigo-500/20"
              >
                Learn More
                <i className="ri-arrow-right-line group-hover:ms-1 transition-all duration-300"></i>
              </a>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div
            className="relative order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative group">
              {/* Main image with glass morphism effect */}
              <div className="relative z-20 overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10">
                <img
                  src={imageData.HeroImage}
                  alt="Abdurrahman Faiz"
                  className="w-full h-full transition-all duration-500 saturate-0 hover:saturate-100 object-cover max-w-[28rem] max-h-[28rem]"
                />
              </div>

              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-10 w-32 h-32 rounded-full bg-indigo-500/30 animate-float-delay"></div>
              <div className="absolute -bottom-6 -right-16 w-48 h-48 rounded-full bg-orange-500/30 animate-float-slow"></div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section
        id="about"
        className="relative py-32 overflow-hidden bg-gray-950 isolate"
      >
        {/* Cosmic background */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15"></div>
          <div className="absolute inset-0 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/40 via-transparent to-transparent"></div>
        </div>

        {/* Floating grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]">
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
        </div>

        {/* Animated floating elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-900/20 blur-[120px] animate-float-slow"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-indigo-800/30 blur-[120px] animate-float-slower"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-indigo-700/10 blur-[80px] animate-float-delay"></div>

        <div className="relative px-6 mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Content */}
            <div className="space-y-10" data-aos="fade-up" data-aos-delay="200">
              <div className="relative">
                <span className="inline-flex items-center px-4 py-2 mb-6 text-xs font-medium tracking-wider rounded-full bg-indigo-900/40 text-indigo-300 border border-indigo-800/50 gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-indigo-400"></span>
                    <span className="relative inline-flex w-2 h-2 rounded-full bg-indigo-500"></span>
                  </span>
                  HELLO WORLD
                </span>

                <h2 className="mb-8 text-5xl font-bold tracking-tighter text-white sm:text-6xl lg:text-7xl">
                  <span className="text-indigo-600">Digital Craftsman</span>
                  <br />
                  Behind The Code
                </h2>

                <div className="absolute top-0 right-0 w-px h-16 bg-gradient-to-b from-transparent via-indigo-500 to-transparent"></div>
              </div>

              {/* Animated text blocks */}
              <div className="space-y-8 text-gray-300">
                <p className="relative pl-8 text-lg leading-relaxed before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:shadow-[0_0_12px_3px_rgba(99,102,241,0.6)] before:animate-pulse">
                  <span className="font-semibold text-indigo-200">
                    I'm Abdurrahman Faiz
                  </span>
                  , a Software Engineering student from Jakarta with a strong
                  passion for web development — both frontend and backend.
                </p>

                <p className="relative pl-8 text-lg leading-relaxed before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:shadow-[0_0_12px_3px_rgba(99,102,241,0.6)] before:animate-pulse">
                  I enjoy solving real-world problems through clean, efficient
                  code, and I approach every project with focus, creativity, and
                  a drive to grow.
                </p>

                <p className="relative pl-8 text-lg leading-relaxed before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-indigo-500 before:shadow-[0_0_12px_3px_rgba(99,102,241,0.6)] before:animate-pulse">
                  I believe in the power of collaboration and open learning. I'm
                  always excited to connect with others, exchange ideas, and
                  build meaningful digital experiences together.
                </p>
              </div>

              {/* Social links with elegant hover */}
              <div className="flex gap-5 pt-6">
                {listSocial.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex items-center justify-center w-14 h-14 transition-all duration-500 rounded-xl bg-gradient-to-br ${social.color} border border-white/10 backdrop-blur-sm ${social.hover} group`}
                    aria-label={social.label}
                  >
                    <i
                      className={`text-2xl text-gray-300 transition-all duration-500 ${social.icon}`}
                    ></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Visual element - Code animation */}
            <div
              className="relative hidden lg:block"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-900/20 to-indigo-900/5 border border-indigo-800/30 backdrop-blur-sm"></div>
              <div className="relative p-8 overflow-hidden rounded-2xl bg-gray-900/30 border border-white/5">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="font-mono text-sm text-gray-300">
                  <div className="mb-4">
                    <span className="text-indigo-400">const</span>{" "}
                    <span className="text-indigo-300">aboutMe</span>{" "}
                    <span className="text-gray-500">=</span>{" "}
                    <span className="text-yellow-200">&#123;</span>
                  </div>
                  <div className="pl-6 mb-4">
                    <div>
                      <span className="text-indigo-300">name</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-400">'Abdurrahman Faiz'</span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-indigo-300">role</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-400">
                        'Web Full Stack Developer'
                      </span>
                      <span className="text-gray-500">,</span>
                    </div>
                    <div>
                      <span className="text-indigo-300">passion</span>
                      <span className="text-gray-500">:</span>{" "}
                      <span className="text-green-400">
                        'Creating digital experiences'
                      </span>
                    </div>
                  </div>
                  <div className="mb-6 text-yellow-200">&#125;;</div>
                  <div className="text-gray-500">
                    // Always learning, always building
                  </div>
                  <div className="mt-2 text-gray-500">
                    // Let's create something amazing
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Skills */}
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
              TECHNICAL MASTERY
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl lg:text-6xl">
              Tech Stack
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">
              Cutting-edge tools I wield to craft digital excellence
            </p>
          </div>

          {/* Tech stack grid - Now with SVG icons */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7"
            data-aos="fade-up"
          >
            {listTools.map((tool, index) => (
              <div
                key={tool.name}
                className="flex flex-col items-center group"
                data-aos="fade-up"
                data-aos-delay={50 * (index % 7)}
              >
                <div
                  className={`relative flex items-center justify-center p-5 mb-3 transition-all duration-500 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm ${tool.bg} ${tool.color} hover:border-white/20`}
                >
                  <div className="relative w-12 h-12">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 [background-image:radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent"></div>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-400 transition-all duration-300 group-hover:text-white">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>

          {/* Animated floating tech labels */}
          <div className="absolute top-1/3 left-0 w-full pointer-events-none select-none">
            <div className="flex justify-around">
              <span className="text-xs font-bold tracking-widest text-transparent uppercase opacity-20 bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-300">
                Frontend
              </span>
              <span className="text-xs font-bold tracking-widest text-transparent uppercase opacity-20 bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
                Backend
              </span>
              <span className="text-xs font-bold tracking-widest text-transparent uppercase opacity-20 bg-clip-text bg-gradient-to-r from-green-500 to-green-300">
                Database
              </span>
              <span className="text-xs font-bold tracking-widest text-transparent uppercase opacity-20 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
                Tools
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Project */}
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

          {/* Simple CTA
          <div className="mt-16 text-center">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <i className="ri-chat-1-line mr-2"></i>
              More Project
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default App;
