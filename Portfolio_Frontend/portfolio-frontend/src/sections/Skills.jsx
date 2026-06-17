import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-slate-900 border-t border-slate-800 text-white px-8 py-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    Skills
  </h2>

  <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
</div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                p-8
                rounded-2xl
                border
                border-slate-800
                hover:border-sky-500
                hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(14,165,233,0.25)]
                transition-all
                duration-300
                "
            >
              <h3 className="text-2xl font-semibold text-sky-400 mb-6">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="
                      bg-slate-800
                      px-4
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
