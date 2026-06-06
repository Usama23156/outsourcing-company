import {
  BarChart3,
  CheckCircle2,
  Clock3,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Proven Lead Generation Strategies",
    icon: BarChart3,
  },
  {
    title: "Fast Project Delivery",
    icon: Clock3,
  },
  {
    title: "Experienced Specialists",
    icon: UsersRound,
  },
  {
    title: "Scalable Solutions",
    icon: Rocket,
  },
  {
    title: "Transparent Communication",
    icon: MessageSquareText,
  },
  {
    title: "Results-Driven Approach",
    icon: ShieldCheck,
  },
];

const trustStats = [
  "Senior delivery team",
  "Growth-focused execution",
  "Clear weekly reporting",
];

export function WhyChooseUsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#080b18] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_18%,rgba(59,130,246,0.24),transparent_32%),radial-gradient(circle_at_86%_10%,rgba(168,85,247,0.2),transparent_30%),linear-gradient(135deg,#080b18_0%,#0d1327_48%,#111827_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200 backdrop-blur">
            Why choose us
          </p>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
            Why Businesses Choose Us
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustStats.map((stat) => (
              <div
                key={stat}
                className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-medium text-slate-200 backdrop-blur"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                {stat}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.085]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-[0_18px_40px_rgba(59,130,246,0.18)] transition duration-300 group-hover:bg-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em] text-white">
                    {feature.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 28 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/22 via-blue-500/12 to-fuchsia-500/22 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-white/[0.07] p-2 shadow-[0_34px_100px_rgba(2,6,23,0.5)] backdrop-blur-xl">
            <div className="relative aspect-video overflow-hidden rounded-[1.55rem] bg-slate-950">
              <img
                src="/assets/why-choose-us-collaboration.png"
                alt="Team collaboration and client success in a professional consulting environment"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-transparent to-blue-500/10" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/12 bg-slate-950/60 p-4 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
                  Client success system
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-xl bg-white/10 px-3 py-2">
                    <p className="text-lg font-semibold">01</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                      Align
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-2">
                    <p className="text-lg font-semibold">02</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                      Execute
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-2">
                    <p className="text-lg font-semibold">03</p>
                    <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                      Scale
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
