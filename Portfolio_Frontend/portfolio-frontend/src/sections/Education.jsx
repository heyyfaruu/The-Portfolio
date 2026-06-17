import education from "../data/education";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-slate-950 border-t border-slate-800 text-white px-8 py-20"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
  <h2 className="text-4xl font-bold">
    Education
  </h2>

  <div className="w-24 h-1 bg-sky-500 mx-auto mt-4 rounded"></div>
</div>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                p-8
                rounded-2xl
                border
                border-slate-800
              "
            >
              <h3 className="text-2xl font-semibold text-sky-400">
                {item.degree}
              </h3>

              <p className="mt-2">
                {item.field}
              </p>

              <p className="text-slate-400">
                {item.college}
              </p>

              <div className="flex justify-between mt-4 text-slate-400">
                <span>{item.year}</span>
                <span>{item.cgpa}</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;