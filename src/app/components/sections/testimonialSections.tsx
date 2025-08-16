"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";
import { Testimonial, testimonialsData } from "@/app/lib/constants";

function TestimonialCard({ t, index }: { t: Testimonial, index: number }) {
  return (
    <div
    className={`rounded-xl border border-slate-200 p-4 shadow-sm md:p-5 ${
      index % 2 === 1 ? "bg-white" : "bg-[#E9ECF2]"
    }`}
    >
      <div className="mb-2 flex gap-0.5">
        {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4 text-[#101014]" />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">
        {t.text}
      </p>
      <div className="mt-4 flex items-center gap-3">
        <Image
          src={t.avatar}
          alt={t.name}
          width={32}
          height={32}
          className="h-8 w-8 rounded-full object-cover"
        />
        <div>
          <div className="text-[13px] font-medium text-slate-900">{t.name}</div>
          {t.role && <div className="text-xs text-slate-500">{t.role}</div>}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialSections() {
  const prefersReducedMotion = useReducedMotion();
  const dur = (s: number) => (prefersReducedMotion ? 0 : s);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.6 });

  const rowA = useMemo(
    () => testimonialsData.filter((_, i) => i % 2 === 0),
    []
  );
  const rowB = useMemo(
    () => testimonialsData.filter((_, i) => i % 2 === 1),
    []
  );
  const loopA = useMemo(() => [...rowA, ...rowA], [rowA]);
  const loopB = useMemo(() => [...rowB, ...rowB], [rowB]);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () =>
      setActive(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);
  const go = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div ref={headerRef} className="text-center">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: dur(0.24), ease: "easeOut" }}
            className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white"
          >
            Testimonials
          </motion.span>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: dur(0.28),
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.05,
            }}
            className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            Hear from our clients
          </motion.h2>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: dur(0.3),
              ease: "easeOut",
              delay: prefersReducedMotion ? 0 : 0.1,
            }}
            className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 md:text-base"
          >
            Hear from our happy clients about their experience working with
            us—and the quality of our craftsmanship.
          </motion.p>
        </div>
      </div>

      <div className="mt-10 hidden md:block">
        <div className="mx-auto max-w-[1440px] px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/60 p-3 md:p-4 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <motion.div
              className="flex gap-4 md:gap-5"
              animate={
                !prefersReducedMotion ? { x: ["0%", "-50%"] } : { x: "0%" }
              }
              transition={
                !prefersReducedMotion
                  ? { duration: 40, ease: "linear", repeat: Infinity }
                  : undefined
              }
            >
              {loopA.map((t, i) => (
                <div key={`a-${i}`} className="w-[280px] md:w-[320px]">
                  <TestimonialCard t={t} index={i}/>
                </div>
              ))}
            </motion.div>

            <div className="h-4 md:h-5" />

            <motion.div
              className="flex gap-4 md:gap-5"
              animate={
                !prefersReducedMotion ? { x: ["-50%", "0%"] } : { x: "0%" }
              }
              transition={
                !prefersReducedMotion
                  ? { duration: 40, ease: "linear", repeat: Infinity }
                  : undefined
              }
            >
              {loopB.map((t, i) => (
                <div key={`b-${i}`} className="w-[280px] md:w-[320px]">
                  <TestimonialCard t={t} index={i}/>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-8 md:hidden">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar"
        >
          {testimonialsData.map((t, i) => (
            <div key={i} className="min-w-full snap-start px-4">
              <TestimonialCard t={t} index={i}/>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 w-1.5 rounded-full transition-colors ${
                active === i ? "bg-neutral-900" : "bg-neutral-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
