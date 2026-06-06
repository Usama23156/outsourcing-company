import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { Logo } from "@/components/Logo";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 12);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? "border-white/16 bg-slate-950/72 shadow-[0_20px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl"
            : "border-white/10 bg-white/[0.055] shadow-[0_14px_50px_rgba(2,6,23,0.12)] backdrop-blur-xl"
        }`}
      >
        <div className="flex items-center">
          <Logo className="h-10 w-[144px] text-white" />
        </div>

        <motion.button
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ y: 0 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-xs font-semibold text-slate-950 shadow-[0_18px_50px_rgba(59,130,246,0.22)] transition duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:px-5 sm:text-sm"
        >
          <span className="hidden sm:inline">Book a Free Consultation</span>
          <span className="sm:hidden">Book Consultation</span>
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
        </motion.button>
      </div>
    </motion.header>
  );
}
