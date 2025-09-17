const aboutItems = [
  {
    label: "Collaborative projects in team",
    number: 20,
  },

  {
    label: "Languages Spoken (Spanish, English, Italian)",
    number: 3,
  },

  {
    label: "Data analysis and modeling projects developed",
    number: 5,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I am Gabriela García, a final-year Systems Engineering
            student at Universidad de los Andes, Bogotá. I’m passionate about
            using data analysis, business intelligence, and emerging
            technologies to solve real-world challenges and drive impact. I
            bring experience in data handling, visualization, and
            problem-solving, complemented by teamwork and leadership skills
            gained through academic projects and as a teaching assistant.
            Adaptable and curious, I thrive in fast-changing environments and
            enjoy applying creativity, critical thinking, and effective
            communication to deliver innovative solutions.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2 ">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="/images/icon.png"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
