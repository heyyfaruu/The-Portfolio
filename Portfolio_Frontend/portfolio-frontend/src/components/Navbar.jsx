import { Link } from "react-scroll";


function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md text-white shadow-lg z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-sky-400">
          Farhan Attar
        </h1>

        <div className="flex gap-8 text-sm font-medium">

          <Link
            to="about"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            Skills
          </Link>

          <Link
            to="education"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            Education
          </Link>

          <Link
            to="experience"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            Experience
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={800}
            offset={-80}
            className="cursor-pointer hover:text-sky-400 transition-all duration-300"
          >
            Contact
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;