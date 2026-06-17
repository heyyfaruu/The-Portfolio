import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-8 py-12">

        {/* Top Section */}

        <div className="grid md:grid-cols-3 gap-10 items-start">

          {/* Left */}

          <div>
            <h3 className="text-2xl font-bold text-sky-400 mb-3">
              Farhan Attar
            </h3>

            <p className="text-slate-400 leading-7">
              Java Full Stack Developer passionate about
              building scalable, secure and modern web
              applications using Spring Boot, React,
              MySQL and JWT Authentication.
            </p>
          </div>

          {/* Quick Links */}

          <div className="md:mx-auto">
  <h3 className="text-xl font-semibold text-white mb-4">
    Quick Links
  </h3>

            <div className="flex flex-col gap-3 text-slate-400 ">

              <a href="#home" className="hover:text-sky-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-sky-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-sky-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-sky-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-sky-400 transition">
                Contact
              </a>

            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Connect With Me
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>
                📍 Nashik, Maharashtra, India
              </p>

              <p>
                📧 farhaan.attar313@gmail.com
              </p>

              <p>
                💼 Open To Work
              </p>

            </div>

            <div className="flex gap-4 mt-5">

              <a
                href="https://github.com/heyyfaruu"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  hover:border-sky-500
                  hover:text-sky-400
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/farhan-attar-b6006228b"
                target="_blank"
                rel="noreferrer"
                className="
                  p-3
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  hover:border-sky-500
                  hover:text-sky-400
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:farhaan.attar313@gmail.com"
                className="
                  p-3
                  rounded-xl
                  bg-slate-900
                  border
                  border-slate-800
                  hover:border-sky-500
                  hover:text-sky-400
                  hover:-translate-y-1
                  transition-all
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800 mt-10 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-400 text-sm">
              © 2026 Farhan Attar. All Rights Reserved.
            </p>

            <a
              href="#home"
              className="
                flex
                items-center
                gap-2
                text-sky-400
                hover:text-sky-300
                transition
              "
            >
              <FaArrowUp />
              Back To Top
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;