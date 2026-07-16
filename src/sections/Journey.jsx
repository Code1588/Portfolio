import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const journey = [
  {
    year: "Present",
    title: "MERN Stack Developer",
    description:
      "Building full-stack applications while mastering React, Node.js, Express.js, MongoDB, REST APIs, authentication, deployment, and modern UI development.",
  },
  {
    year: "Current",
    title: "Bachelor of Science (Mathematics)",
    description:
      "Pursuing graduation while focusing on software engineering and full-stack web development.",
  },
  {
    year: "2022",
    title: "Senior Secondary",
    description: "Completed Senior Secondary education.",
  },
  {
    year: "2020",
    title: "Secondary",
    description: "Completed Secondary education.",
  },
];

function Journey() {
  return (
    <section id="journey" className="section-pad">
      <div className="section-shell max-w-6xl">
        <SectionTitle title="My Journey" subtitle="Education and learning path." />

        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-teal-300/40 sm:before:left-6">
          {journey.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 sm:pl-16"
            >
              <div className="absolute left-[0.55rem] top-6 h-4 w-4 rounded-full border-4 border-slate-950 bg-teal-300 sm:left-[1.05rem]" />

              <div className="glass p-5 sm:p-6">
                <span className="eyebrow">{item.year}</span>

                <h3 className="mt-2 text-xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Journey;
