import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import Stats from "../components/Stats";

function About() {
  return (
    <section id="about" className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="About Me"
          subtitle="I build clean user interfaces, practical backends, and responsive web experiences while growing deeper into the MERN stack."
        />

        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8 lg:p-10"
          >
            <p className="eyebrow mb-4">Who am I?</p>

            <h3 className="text-2xl font-black text-white sm:text-3xl">
              I am Himanshu Saini, an aspiring MERN Stack Developer from Jaipur.
            </h3>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-400">
              <p>
                I enjoy building responsive websites, modern dashboards, REST
                APIs, and full-stack web applications with thoughtful interfaces.
              </p>

              <p>
                I am currently learning React, Node.js, Express.js, and MongoDB
                while building real-world projects for internships and freelance
                opportunities.
              </p>

              <p>
                My long-term goal is to become an AI-powered full stack engineer
                and launch useful SaaS products.
              </p>
            </div>
          </motion.div>

          <Stats />
        </div>
      </div>
    </section>
  );
}

export default About;
