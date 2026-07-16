import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const goals = [
  "Become a Professional MERN Stack Developer",
  "Build AI-Powered Web Applications",
  "Create SaaS Products",
  "Contribute to Open Source",
  "Work with International Clients",
  "Launch My Own Software Company",
];

function Goals() {
  return (
    <section className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="Career Goals"
          subtitle="Where I am heading in the coming years."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal, index) => (
            <motion.div
              key={goal}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="glass flex min-h-32 items-start justify-between gap-4 p-6"
            >
              <div>
                <p className="eyebrow mb-3">Goal {index + 1}</p>
                <h3 className="text-lg font-black leading-7 text-white">
                  {goal}
                </h3>
              </div>

              <ArrowUpRight className="mt-1 shrink-0 text-orange-300" size={22} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Goals;
