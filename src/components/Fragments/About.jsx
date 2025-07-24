import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { listSocial } from "../../data"; // Assuming listSocial is exported from data.js

const About = () => {
  // AOS.init is typically called once in App.js or a top-level component.
  // No need to re-initialize here unless this component is loaded conditionally and unmounted.

  return (
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
  );
}

export default About;