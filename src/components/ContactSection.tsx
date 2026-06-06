import { ArrowRight, CheckCircle2, Clock3, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const trustIndicators = [
  "Fast Response Time",
  "Free Initial Consultation",
  "Custom Solutions",
];

const inputClassName =
  "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100";

export function ContactSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8fb] px-6 py-24 text-slate-950 sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_14%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_84%_22%,rgba(168,85,247,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7f8fb_54%,#eef2ff_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700 shadow-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Lead generation CTA
          </p>
          <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
            Let&apos;s Discuss Your Next Project
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Tell us what you want to build or improve. We&apos;ll map the best
            path to more leads, stronger conversions, and faster execution.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            {trustIndicators.map((indicator) => (
              <div
                key={indicator}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                {indicator}
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_28px_90px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-video overflow-hidden rounded-[1.55rem] bg-slate-950">
              <img
                src="/assets/contact-consultation.png"
                alt="Professional business consultation for a digital project"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 via-transparent to-blue-500/10" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-slate-950/60 px-4 py-3 text-white backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-slate-950">
                    <MessageSquare className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      Consultation ready
                    </p>
                    <p className="mt-1 text-sm font-semibold">
                      Strategy call for qualified growth
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-slate-950">
                  <Clock3 className="h-3.5 w-3.5" />
                  Fast reply
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_30px_100px_rgba(15,23,42,0.12)] sm:p-7 lg:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              <span>Name</span>
              <input className={inputClassName} name="name" placeholder="Your name" type="text" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              <span>Email</span>
              <input className={inputClassName} name="email" placeholder="you@company.com" type="email" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              <span>Phone</span>
              <input className={inputClassName} name="phone" placeholder="+1 234 567 890" type="tel" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-700">
              <span>Company</span>
              <input className={inputClassName} name="company" placeholder="Company name" type="text" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-slate-700 sm:col-span-2">
              <span>Message</span>
              <textarea
                className={`${inputClassName} min-h-36 resize-none`}
                name="message"
                placeholder="Tell us about your project, goals, or growth challenge."
              />
            </label>
          </div>

          <button
            type="submit"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white shadow-[0_22px_60px_rgba(59,130,246,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Share your details and our team will follow up with a tailored
            consultation path.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
