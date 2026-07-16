import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const learning = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Responsive Design",
  "Git & GitHub",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "REST APIs",
  "Authentication",
  "Deployment",
  "Python",
  "AI",
  "ChatGPT"

];

function Learning() {
  return (
    <section className="section-pad">
      <div className="section-shell max-w-6xl">
        <SectionTitle
          title="Current Learning"
          subtitle="Technologies and practices I am strengthening through daily project work."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {learning.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="glass flex items-center gap-3 p-4"
            >
              <CheckCircle2 className="shrink-0 text-teal-300" size={20} />
              <h3 className="font-semibold text-slate-100">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Learning;
