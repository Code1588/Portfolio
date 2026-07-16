import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import SectionTitle from "../components/SectionTitle";

const EMAIL_TO = "himanshusaini95099@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get("from_name"),
      from_email: formData.get("from_email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      reply_to: formData.get("from_email"),
      to_email: EMAIL_TO,
    };

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const mailSubject = encodeURIComponent(templateParams.subject);
      const mailBody = encodeURIComponent(
        `Name: ${templateParams.from_name}\nEmail: ${templateParams.from_email}\n\n${templateParams.message}`,
      );

      window.location.href = `mailto:${EMAIL_TO}?subject=${mailSubject}&body=${mailBody}`;
      setStatus("Email app opened. Please send the draft message.");
      return;
    }

    try {
      setIsSending(true);
      setStatus("");

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      form.reset();
      setStatus("Message sent successfully.");
    } catch {
      setStatus("Message could not be sent. Please try again.");
    } finally {
      setIsSending(false);
    }
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
              <a href="https://github.com/Code1588" className="icon-link" target="_blank" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/himanshu-saini-080844296/" target="_blank" className="icon-link" aria-label="LinkedIn">
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
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="field"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                className="field"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="field"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              className="field resize-none"
              required
            />

            <button
              type="submit"
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p className="text-center text-sm font-semibold text-teal-200">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
