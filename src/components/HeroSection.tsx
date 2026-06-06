import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const trustIndicators = [
  "Vetted Engineers",
  "Flexible Engagement",
  "Fast Team Scaling",
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#070a18] text-white">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(84,116,255,0.28),transparent_34%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.26),transparent_30%),linear-gradient(135deg,#07101f_0%,#0b0f24_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl items-center gap-14 px-6 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.11, delayChildren: 0.08 }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-100 shadow-[0_0_40px_rgba(96,165,250,0.18)] backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            Trusted Software Development Partner
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl"
          >
            Scale Your Team Without Hiring Delays
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Access top-tier developers, designers, and dedicated software teams
            to accelerate your product delivery.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_22px_60px_rgba(59,130,246,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#070a18]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-[#070a18]"
            >
              Explore Services
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-3 text-sm text-slate-200 sm:grid-cols-3"
          >
            {trustIndicators.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/24 via-blue-500/14 to-fuchsia-500/24 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.07] p-2 shadow-[0_34px_100px_rgba(2,6,23,0.45)] backdrop-blur-xl">
            <div className="relative aspect-video overflow-hidden rounded-[1.55rem] bg-slate-950">
              <img
                src="/assets/software-outsourcing-hero.png"
                alt="Diverse software engineering team collaborating in a modern coding workspace"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-blue-500/10" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-slate-950/55 px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                    Team readiness
                  </p>
                  <p className="mt-1 text-base font-semibold text-white">
                    Senior delivery pod available
                  </p>
                </div>
                <div className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-950">
                  72h kickoff
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
