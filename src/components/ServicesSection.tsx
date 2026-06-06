import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Lead Generation",
    description:
      "Generate qualified leads through data-driven performance marketing campaigns.",
    image: "/assets/service-lead-generation.png",
    eyebrow: "Performance Marketing",
  },
  {
    title: "Landing Page Development",
    description:
      "High-converting landing pages designed to maximize conversions and ROI.",
    image: "/assets/service-landing-page-development.png",
    eyebrow: "Conversion Design",
  },
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, scalability, and growth.",
    image: "/assets/service-web-development.png",
    eyebrow: "Scalable Engineering",
  },
  {
    title: "IT Services",
    description:
      "Reliable technology solutions and support that help businesses operate efficiently.",
    image: "/assets/service-it-services.png",
    eyebrow: "Technology Support",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export function ServicesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f8fb] px-6 py-24 text-slate-950 sm:px-8 lg:px-10 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_12%,rgba(59,130,246,0.16),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(168,85,247,0.16),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f7f8fb_52%,#eef2ff_100%)]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.86fr_1fr] lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={sectionMotion}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-700 shadow-sm">
              Services
            </p>
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-6xl">
              Solutions That Drive Growth
            </h2>
          </motion.div>

          <motion.p
            variants={sectionMotion}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto"
          >
            From lead generation and landing pages to web development and IT
            services, we help businesses attract, convert, and scale.
          </motion.p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_34px_110px_rgba(59,130,246,0.16)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-slate-950">
                <img
                  src={service.image}
                  alt={`${service.title} service visual`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/45 via-transparent to-blue-500/10" />
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {service.eyebrow}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 transition duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.035em] text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
