"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { aboutStats, aboutUsPhotos } from "@/app/lib/constants";
import { Pill } from "../ui/pill";

export default function AboutUsSections() {
  const prefersReducedMotion = useReducedMotion();
  const dur = (ms: number) => (prefersReducedMotion ? 0 : ms / 1000);

  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const marqueeInView = useInView(marqueeRef, { once: true, amount: 0.25 });
  const loopImgs = useMemo(() => [...aboutUsPhotos, ...aboutUsPhotos], []);

  const railRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!vis) return;
        const idx = itemRefs.current.findIndex((n) => n === vis.target);
        if (idx >= 0) setActive(idx);
      },
      { root: rail, threshold: [0.4, 0.6, 0.8] }
    );
    itemRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const rail = railRef.current;
    const el = itemRefs.current[i];
    if (!rail || !el) return;
    rail.scrollTo({
      left: el.offsetLeft - rail.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <motion.span
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: dur(240), ease: "easeOut" }}
            >
              <Pill tone="dark" size="sm">
                {" "}
                About us
              </Pill>
            </motion.span>
            <motion.h2
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: dur(280), ease: "easeOut" }}
              className="mt-4 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
            >
              Home <br className="hidden sm:block" />
              Improvement <br className="hidden sm:block" />
              Specialists
            </motion.h2>
          </div>

          <motion.p
            initial={{ x: 16, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: dur(300), ease: "easeOut", delay: 0.08 }}
            className="max-w-prose text-slate-600 md:text-base"
          >
            Welcome to LifetimeArt, your trusted home improvement experts,
            dedicated to transforming homes with precision and care. With years
            of experience in kitchens, bathrooms, garages, and more, we deliver
            clean design, top-quality craftsmanship, and a seamless customer
            experience. Our mission is to bring your vision to life while
            ensuring clear communication and expert guidance at every step.
          </motion.p>
        </div>
      </div>

      <div className="mt-12 hidden min-[1024px]:block">
        <div className="mx-[calc(50%-50vw)] w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            ref={marqueeRef}
            className="
              flex gap-5 min-[1440px]:gap-6
              px-4 md:px-6
              min-[1440px]:px-[calc((100vw-1440px)/2)]
            "
            animate={
              !prefersReducedMotion && marqueeInView
                ? { x: ["0%", "-50%"] }
                : { x: "0%" }
            }
            transition={
              !prefersReducedMotion && marqueeInView
                ? { duration: 28, ease: "linear", repeat: Infinity }
                : undefined
            }
          >
            {loopImgs.map((src, i) => {
              const isFirstSet = i < aboutUsPhotos.length;
              const delay = (i % aboutUsPhotos.length) * 0.08;
              return (
                <motion.figure
                  key={`${src.src}-${i}`}
                  initial={isFirstSet ? { opacity: 0, y: 10 } : undefined}
                  whileInView={isFirstSet ? { opacity: 1, y: 0 } : undefined}
                  viewport={
                    isFirstSet ? { once: true, amount: 0.3 } : undefined
                  }
                  transition={
                    isFirstSet
                      ? { duration: dur(260), ease: "easeOut", delay }
                      : undefined
                  }
                  className="relative shrink-0 overflow-hidden rounded-[16px] md:rounded-[20px] ring-1 ring-black/5"
                >
                  <div className="relative h-[280px] w-[320px] min-[1280px]:h-[320px] min-[1280px]:w-[360px] min-[1440px]:h-[360px] min-[1440px]:w-[400px]">
                    <Image
                      src={src.src}
                      alt={src.alt ?? ""}
                      fill
                      sizes="400px"
                      className="object-cover"
                      priority={i < 2}
                    />
                  </div>
                </motion.figure>
              );
            })}
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="mt-10 min-[1024px]:hidden">
          <div
            ref={railRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-1"
          >
            {aboutUsPhotos.map((src, i) => (
              <motion.div
                key={src.alt ?? i}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[i] = el;
                }}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: dur(260),
                  ease: "easeOut",
                  delay: i * 0.06,
                }}
                className="snap-start shrink-0"
                style={{ scrollMarginLeft: "16px" }}
              >
                <div className="relative h-[220px] w-[78vw] sm:h-[260px] sm:w-[70vw] overflow-hidden rounded-[16px] ring-1 ring-black/5">
                  <Image
                    src={src.src}
                    alt={src.alt ?? ""}
                    fill
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {aboutUsPhotos.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-[8px] w-[8px] rounded-full transition-opacity ${
                  active === i
                    ? "bg-neutral-900 opacity-90"
                    : "bg-neutral-300 opacity-70"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 border-t border-slate-200 pt-8 md:mt-14 md:pt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
            },
          }}
        >
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {aboutStats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { y: 16, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: dur(240),
                      ease: "easeOut",
                      delay: i * 0.02,
                    },
                  },
                }}
                className="text-center md:text-left"
              >
                <div className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-700">
                  {s.label}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 md:text-sm">
                  {s.sub}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
