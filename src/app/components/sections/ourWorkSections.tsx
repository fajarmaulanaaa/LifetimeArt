"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ourWorkData, Work } from "@/app/lib/constants";
import { Pill } from "../ui/pill";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const VIEWPORT_MARGIN = "-120px 0px -10% 0px"
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: EASE },
  },
};

function ProjectCard({
  data,
  compact = false,
  idx,
  delay = 0,
}: {
  data: Work;
  idx: number;
  compact?: boolean;
  delay?: number;
}) {
  const isDark = idx % 2 === 1;

  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35,  margin: VIEWPORT_MARGIN }}
      transition={{ duration: 0.28, ease: EASE, delay }}
      
      className={[
        "overflow-hidden rounded-[22px] md:rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.12)] ring-1",
        isDark
          ? "bg-[#0F0F10] text-white ring-white/10"
          : "bg-[#E9ECEF] text-neutral-900 ring-black/10",
      ].join(" ")}
    >
      <div className={compact ? "p-4" : ""}>
        <div
          className={[
            "relative overflow-hidden rounded-[16px]",
            compact ? "aspect-[16/11] ring-1" : "hidden",
            isDark ? "ring-white/15" : "ring-black/10",
            "md:hidden",
          ].join(" ")}
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2">
        <div className="relative md:h-[380px] lg:h-[430px]">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(min-width:1024px) 620px, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex flex-col justify-center gap-3 p-8">
          <h3 className="text-[28px] md:text-[34px] font-bold tracking-[-0.02em]">
            {data.title}
          </h3>
          <p
            className={
              isDark
                ? "text-white/85 text-[15px] leading-[1.75]"
                : "text-neutral-800 text-[15px] leading-[1.75]"
            }
          >
            {data.desc}
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            {isDark ? (
              <>
                <Pill tone="light">{data.service}</Pill>
                <Pill tone="light">{data.timeline}</Pill>
              </>
            ) : (
              <>
                <Pill tone="dark">{data.service}</Pill>
                <Pill tone="dark">{data.timeline}</Pill>
              </>
            )}
          </div>
          <div
            className={[
              "mt-4 rounded-[14px] p-4",
              isDark
                ? "bg-white/6 ring-1 ring-white/12"
                : "bg-white/70 ring-1 ring-black/10",
            ].join(" ")}
          >
            <div
              className={
                isDark
                  ? "text-[15px] leading-relaxed text-white/90"
                  : "text-[15px] leading-relaxed text-neutral-800"
              }
            >
              <span aria-hidden className="mr-2">
                “
              </span>
              {data.review}
            </div>
            <div className="mt-3 flex items-center gap-3">
              <Image
                src={data.avatar}
                alt={data.id}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className={isDark ? "text-white/80" : "text-neutral-700"}>
                {data.creator}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-5">
        <h3 className="text-[26px] font-bold tracking-[-0.02em]">
          {data.title}
        </h3>
        <p
          className={
            isDark
              ? "text-white/85 text-[15px] leading-[1.75]"
              : "text-neutral-800 text-[15px] leading-[1.75]"
          }
        >
          {data.desc}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {isDark ? (
            <>
              <Pill tone="light">{data.service}</Pill>
              <Pill tone="light">{data.timeline}</Pill>
            </>
          ) : (
            <>
              <Pill tone="dark">{data.service}</Pill>
              <Pill tone="dark">{data.timeline}</Pill>
            </>
          )}
        </div>
        <div
          className={[
            "mt-4 rounded-[14px] p-4",
            isDark
              ? "bg-white/6 ring-1 ring-white/12"
              : "bg-white/70 ring-1 ring-black/10",
          ].join(" ")}
        >
          <div
            className={
              isDark
                ? "text-[15px] leading-relaxed text-white/90"
                : "text-[15px] leading-relaxed text-neutral-800"
            }
          >
            <span aria-hidden className="mr-2">
              “
            </span>
            {data.review}
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Image
              src={data.avatar}
              alt={data.id}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className={isDark ? "text-white/80" : "text-neutral-700"}>
              {data.creator}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function OurWorkSections() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    const target = child.offsetLeft - (el.clientWidth - child.clientWidth) / 2;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let delta = Infinity;
      Array.from(el.children).forEach((c, i) => {
        const ch = c as HTMLElement;
        const chCenter = ch.offsetLeft + ch.clientWidth / 2;
        const d = Math.abs(chCenter - center);
        if (d < delta) {
          delta = d;
          best = i;
        }
      });
      setActive(best);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="our-work" aria-labelledby="work-heading" className="bg-white">
      <div className="mx-auto max-w-[1160px] md:py-8 min-[1440px]:max-w-[1360px] min-[1960px]:max-w-[1860px] min-[1960px]:px-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.26, ease: EASE }}
          className="text-center"
        >
          <Pill tone="dark"> Our work</Pill>

          <motion.h2
            id="work-heading"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.26, ease: EASE, delay: 0.04 }}
            className="mt-3 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[48px]"
          >
            Get inspired by our work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.24, ease: EASE, delay: 0.08 }}
            className="mx-auto mt-3 max-w-[720px] text-[15px] leading-relaxed text-neutral-600"
          >
            Selected renovations and new builds.
          </motion.p>
        </motion.div>

        <div className="md:hidden mt-10">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2"
          >
            {ourWorkData.map((item, i) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[86vw] max-w-[520px]"
              >
                <ProjectCard data={item} idx={i} compact delay={i * 0.1} />
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {ourWorkData.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={
                  "h-2 w-2 rounded-full transition " +
                  (active === i ? "bg-neutral-900" : "bg-neutral-300")
                }
              />
            ))}
          </div>
        </div>

        <div className="relative mt-10 hidden md:block">
          <ul className="space-y-10">
            {ourWorkData.map((item, i) => (
              <li
                key={item.id}
                className="sticky top-[96px] lg:top-[110px]"
                style={{ zIndex: 10 + i }}
              >
                <ProjectCard data={item} idx={i} />
              </li>
            ))}
          </ul>
          <div className="h-16" />
        </div>
      </div>
    </section>
  );
}
