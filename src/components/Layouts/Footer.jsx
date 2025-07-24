import { useEffect, useState } from "react";
import { listSocial } from "../../data";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Back to top button - fixed position */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:cursor-pointer text-white shadow-lg flex items-center justify-center transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        aria-label="Back to top"
      >
        <i className="ri-arrow-up-line text-xl"></i>
      </button>

      {/* Footer */}
      <footer className="relative py-16 bg-gray-950 border-t border-gray-800/50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-transparent to-transparent"></div>
        </div>

        {/* Floating orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-900/20 blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-indigo-800/30 blur-[80px]"></div>

        <div className="relative px-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand info */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">
                Abdurrahman Faiz
              </h3>
              <p className="mt-2 text-gray-400">Full Stack Developer</p>
              <p className="mt-4 text-sm text-gray-500">
                © 2025 Abdurrahman Faiz. All rights reserved.
              </p>
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

            {/* Social & contact */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-white mb-4">
                abdurrahmanfaiz187@gmail.com
              </h4>
              <div className="flex justify-center md:justify-end gap-4">
                {listSocial.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 border border-gray-700 hover:border-indigo-500 transition-all duration-300 ${social.hover}`}
                    aria-label={social.label}
                  >
                    <i className={`text-xl ${social.icon}`}></i>
                  </a>
                ))}
              </div>
              {/* <p className="mt-4 text-sm text-gray-500">
                Built with <span className="text-indigo-400">React</span> &{" "}
                <span className="text-indigo-400">Tailwind CSS</span>
              </p> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
