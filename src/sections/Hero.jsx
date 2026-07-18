import { ArrowDownToLine, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroGraphic from "../assets/hero.png";

function Hero() {
  return (
    <section id="home" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">Hello, I'm</p>

          <h1 className="max-w-2xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Himanshu
            <br />
          </h1>

          <h2 className="mt-5 min-h-10 text-2xl font-semibold text-slate-300 sm:text-3xl">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "Frontend Developer",
                "Backend Developer",
                "Future AI Engineer",
                "Tech Enthusiast",
              ]}
              loop
              cursor
            />
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate MERN Stack developer focused on creating modern,
            responsive and scalable web applications with exceptional user
            experiences.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Himanshu_Resume.pdf"
              download="Himanshu-Saini-Resume.pdf"
              className="btn-primary"
            >
              <ArrowDownToLine size={18} />
              Download Resume
            </a>

            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="https://github.com/Code1588" className="icon-link" target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/himanshu-saini-080844296/" target="_blank" className="icon-link" aria-label="LinkedIn">
              <FaLinkedin />
            </a>

            <a href="#contact" className="icon-link" aria-label="Contact">
              <Mail size={19} />
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="glass w-full max-w-md p-6 sm:p-8">
            <img
              src={heroGraphic}
              alt="Layered development interface illustration"
              className="mx-auto w-full max-w-[20rem] drop-shadow-2xl"
            />

            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-white/[0.07] p-3">
                <p className="text-lg font-black text-teal-300">UI</p>
                <p className="mt-1 text-xs text-slate-400">React</p>
              </div>
              <div className="rounded-lg bg-white/[0.07] p-3">
                <p className="text-lg font-black text-orange-300">API</p>
                <p className="mt-1 text-xs text-slate-400">Node</p>
              </div>
              <div className="rounded-lg bg-white/[0.07] p-3">
                <p className="text-lg font-black text-violet-300">DB</p>
                <p className="mt-1 text-xs text-slate-400">Mongo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
