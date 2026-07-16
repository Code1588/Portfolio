import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
    >
      <p className="eyebrow mb-3">Portfolio</p>

      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-teal-300" />

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;
