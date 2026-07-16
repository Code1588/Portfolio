import { motion } from "framer-motion";

const stats = [
  {
    number: "15+",
    title: "Projects",
  },
  {
    number: "1+",
    title: "Years Learning",
  },
  {
    number: "20+",
    title: "Technologies",
  },
  {
    number: "100%",
    title: "Dedication",
  },
];

function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.12 }}
          viewport={{ once: true }}
          className="glass p-5 text-center sm:p-7"
        >
          <h3 className="text-3xl font-black text-teal-300 sm:text-4xl">
            {item.number}
          </h3>

          <p className="mt-3 text-sm font-medium text-slate-300 sm:text-base">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;
