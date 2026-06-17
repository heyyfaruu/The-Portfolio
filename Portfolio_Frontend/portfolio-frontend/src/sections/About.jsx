function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 border-t border-slate-800 text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">

    <div className="text-center mb-12">
  <h2 className="text-4xl font-bold">
    About Me
  </h2>

  <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
</div>

        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who Am I?
            </h3>

            <p className="text-slate-400 leading-8">
              I am a Computer Science Engineering
              student passionate about building
              scalable web applications using
              Java, Spring Boot, React and MySQL.

              I enjoy solving real-world problems
              through clean architecture, secure
              authentication systems and efficient
              backend development.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-sky-400 text-xl">
                🎓 Degree
              </h4>

              <p>B.Tech CSE</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-sky-400 text-xl">
                💼 Internship
              </h4>

              <p>Java Full Stack</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-sky-400 text-xl">
                📍 Location
              </h4>

              <p>Nashik, India</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h4 className="text-sky-400 text-xl">
                🚀 Projects
              </h4>

              <p>5+</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;