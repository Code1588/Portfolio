import { color, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiGooglegemini,
  SiMongodb,
  SiPostman,
  SiPython,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscOpenai, VscVscode } from "react-icons/vsc";
import { icons } from "lucide-react";

const skills = [
  { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-400" },
  { icon: <FaCss3Alt />, name: "CSS3", color: "text-sky-400" },
  { icon: <FaJs />, name: "JavaScript", color: "text-amber-300" },
  { icon: <FaReact />, name: "React", color: "text-teal-300" },
  { icon: <FaNodeJs />, name: "Node.js", color: "text-emerald-400" },
  { icon: <SiExpress />, name: "Express", color: "text-slate-100" },
  { icon: <SiMongodb />, name: "MongoDB", color: "text-green-400" },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-300" },
  { icon: <FaGitAlt />, name: "Git", color: "text-orange-400" },
  { icon: <FaGithub />, name: "GitHub", color: "text-slate-100" },
  { icon: <SiPostman />, name: "Postman", color: "text-orange-300" },
  { icon: <SiPython />, name: "Python", color: "text-yellow-300" },
  { icon: <VscVscode />, name: "VS Code", color: "text-blue-300" },
  { icon: <VscOpenai />, name: "ChatGPT", color: "" },
  { icon: <SiGooglegemini />, name: "Gemini", color: "text-blue-700" },
  {icon:<SiVercel/>,name:"Vercel" ,color:"text-black"}
];

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies I use to build modern websites and full-stack applications."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {skills.map((item, index) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass p-5 text-center sm:p-6"
            >
              <div className={`mx-auto mb-4 flex justify-center text-4xl sm:text-5xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="text-sm font-bold text-slate-100 sm:text-base">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
