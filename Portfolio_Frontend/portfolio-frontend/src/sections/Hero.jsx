import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}

        <div>

          <p className="text-sky-400 text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold mb-4">
            Farhan Attar
          </h1>

          <h2 className="text-2xl text-slate-300 mb-6">
            Java Full Stack Developer
          </h2>

          <p className="text-slate-400 leading-7 mb-8">
            Passionate about building secure,
            scalable and modern web applications
            using Spring Boot, React, MySQL and JWT.
          </p>

          <div className="flex gap-4 mb-8">

            <a
              href="#projects"
              className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-sky-500 px-6 py-3 rounded-lg hover:bg-sky-500"
            >
              Contact Me
            </a>

          </div>

          <div className="flex gap-6 text-3xl">

            <a
              href="https://github.com/heyyfaruu"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/farhan-attar-b6006228b"
              target="_blank"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
            src={profile}
            alt="profile"
            className="w-80 h-80 rounded-full border-4 border-sky-500 object-cover"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;