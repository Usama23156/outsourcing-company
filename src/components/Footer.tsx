import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Logo } from "@/components/Logo";

const services = [
  "Lead Generation",
  "Landing Pages",
  "Web Development",
  "IT Services",
];

const footerLinks = ["Privacy Policy", "Terms of Service"];

const columnMotion = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#070a18] px-6 pt-20 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_0%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_82%_8%,rgba(168,85,247,0.16),transparent_28%),linear-gradient(180deg,#080b18_0%,#070a18_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <motion.div
        className="mx-auto grid max-w-7xl gap-10 pb-14 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={columnMotion}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <Logo className="h-11 w-11" variant="dark" />
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
            Helping businesses grow through lead generation, landing pages, web
            development, and IT solutions.
          </p>
        </motion.div>

        <motion.div
          variants={columnMotion}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
            Services
          </h3>
          <ul className="mt-6 space-y-4">
            {services.map((service) => (
              <li key={service}>
                <a
                  href="#services"
                  className="text-sm font-medium text-slate-300 transition duration-300 hover:text-cyan-200"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={columnMotion}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-slate-400">
            Contact Information
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>hello@qubain.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>+1 (555) 012-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
              <span>Global delivery, remote-first</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={columnMotion}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.24)] backdrop-blur"
        >
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
            Ready to Scale Your Business?
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Start with a focused consultation and a clear path to growth.
          </p>
          <a
            href="#consultation"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_50px_rgba(59,130,246,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#070a18]"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright &copy; {new Date().getFullYear()} Qubain. All rights reserved.</p>
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {footerLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="transition duration-300 hover:text-cyan-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
