import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";

const contactDetails = [
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "himanshusaini95099@gmail.com",
  },
  {
    icon: <Phone size={22} />,
    label: "Phone",
    value: "+91 9982831624",
  },
  {
    icon: <MapPin size={22} />,
    label: "Location",
    value: "Jaipur, Rajasthan, India",
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="contact" className="section-pad">
      <div className="section-shell">
        <SectionTitle
          title="Let's Connect"
          subtitle="Interested in working together or discussing a project? I would love to hear from you."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-6 sm:p-8"
          >
            <p className="eyebrow mb-3">Contact</p>

            <h3 className="text-2xl font-black text-white">
              Contact Information
            </h3>

            <div className="mt-8 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="mt-1 shrink-0 text-teal-300">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{item.label}</h4>
                    <p className="mt-1 break-words text-slate-400">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <a href="#" className="icon-link" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" className="icon-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass grid gap-4 p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="Your Name" className="field" />

              <input type="email" placeholder="Your Email" className="field" />
            </div>

            <input type="text" placeholder="Subject" className="field" />

            <textarea
              rows="6"
              placeholder="Message"
              className="field resize-none"
            />

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
