export default function Navbar() {
  return (
    <div className="flex justify-center w-full">
      <div className="z-[9999] fixed flex items-center px-6 py-6 transition-all duration-300 ease-in-out transform -translate-y-1/2 rounded-full shadow-xl bg-slate-700/50 border border-slate-600  md:left-auto w-fit bottom-0 md:top-1/2 backdrop-blur-xl hover:border-slate-500 md:right-8">
        <nav>
          <ul className="flex flex-row space-x-6 text-xl md:flex-col md:space-x-0 md:space-y-10">
            <li>
              <a
                href="#home"
                className="group items-center cursor-pointer text-slate-300"
              >
                <i className="ri-home-3-line group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_10px_#6366f1] group-hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="group items-center cursor-pointer text-slate-300"
              >
                <i className="ri-user-line group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_10px_#6366f1] group-hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li>
              <a
                href="#skill"
                className="group items-center cursor-pointer text-slate-300"
              >
                <i className="ri-blaze-line group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_10px_#6366f1] group-hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="group items-center cursor-pointer text-slate-300"
              >
                <i className="ri-briefcase-3-line group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_10px_#6366f1] group-hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li>
            {/* <li>
              <a
                href="#contact"
                className="group items-center cursor-pointer text-slate-300"
              >
                <i className="ri-mail-line group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_10px_#6366f1] group-hover:scale-110 transition duration-300 ease-in-out"></i>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </div>
  );
}
