import experiences from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-900 border-t border-slate-800 text-white px-8 py-20"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    Experience
  </h2>

  <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
</div>

        <div className="relative border-l-2 border-sky-500 ml-4">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 ml-8 relative"
            >

              <div
                className="
                  absolute
                  -left-11
                  top-2
                  w-5
                  h-5
                  rounded-full
                  bg-sky-500
                "
              ></div>

              <div
                className="
                  bg-slate-900
                  p-6
                  rounded-xl
                  border
                  border-slate-800
                  hover:border-sky-500
                  transition-all
                  duration-300
                "
              >
                <div className="flex justify-between flex-wrap gap-2">

                  <h3 className="text-2xl font-semibold text-sky-400">
                    {exp.role}
                  </h3>

                  <span className="text-slate-400">
                    {exp.duration}
                  </span>

                </div>

                <p className="mt-2 text-lg">
                  {exp.company}
                </p>

                <ul className="mt-4 space-y-2 text-slate-400">

                  {exp.points.map((point, i) => (
                    <li key={i}>
                      • {point}
                    </li>
                  ))}

                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;