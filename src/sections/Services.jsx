import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Code2,
  Database,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Server,
} from "lucide-react";

const services = [
  {
    icon: <MonitorSmartphone size={34} />,
    title: "Responsive Website",
    desc: "Modern responsive websites that work smoothly on every device.",
  },
  {
    icon: <LayoutDashboard size={34} />,
    title: "Landing Pages",
    desc: "Focused landing pages with clean sections, sharp spacing, and strong calls to action.",
  },
  {
    icon: <Code2 size={34} />,
    title: "Frontend Development",
    desc: "Interactive React interfaces using modern component patterns.",
  },
  {
    icon: <Server size={34} />,
    title: "Backend APIs",
    desc: "RESTful APIs using Node.js, Express, and JWT authentication.",
  },
  {
    icon: <Database size={34} />,
    title: "Database Design",
    desc: "MongoDB data modeling for CRUD applications and dashboards.",
  },
  {
    icon: <Globe size={34} />,
    title: "Deployment",
    desc: "Project deployment on Vercel, Netlify, and modern hosting platforms.",
  },
];

function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="What I Can Build"
          subtitle="Practical solutions I am currently capable of delivering."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              className="glass p-6"
            >
              <div className="mb-5 inline-flex rounded-lg bg-teal-300/10 p-3 text-teal-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-black text-white">{service.title}</h3>

              <p className="mt-3 leading-7 text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
