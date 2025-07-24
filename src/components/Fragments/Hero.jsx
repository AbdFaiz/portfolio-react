import React, { useEffect } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import imageData from "../../data"; // Assuming imageData is exported from data.js

const Hero = () => {
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
                alt="Abdurrahman Faiz, a Full Stack Web Developer" 
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
  );
}

export default Hero;