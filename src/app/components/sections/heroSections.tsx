"use client";
import { motion } from "framer-motion";
import Header from "../common/header";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Button } from "../ui/button";
import { Pill } from "../ui/pill";

function HeroContent() {
  return (
    <motion.div
      className="max-w-3xl text-left"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
          },
        },
      }}
    >
      <motion.div
        className="inline-flex items-center gap-2 text-white text-sm px-2 py-2"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        <Pill tone="glass" size="md" dot pulse>
          Available for work
        </Pill>
      </motion.div>

      <motion.h1
        className="mt-6 text-white font-semibold text-4xl sm:text-5xl lg:text-[56px] leading-tight"
        variants={{
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        Your trusted partner for quality home improvement
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-200 text-base sm:text-lg max-w-lg"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
          },
        }}
      >
        LifetimeArt delivers expert home improvements, creating beautiful and
        functional spaces with quality craftsmanship.
      </motion.p>

      <motion.div
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 },
          },
        }}
      >
        <Button className="group h-12 rounded-2xl bg-neutral-800 px-6 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-neutral-700 mt-3">
          Work with us
          <motion.span
            className="ml-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform duration-200 group-hover:translate-x-1"
            whileHover={{ rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRightIcon className="h-4 w-4" />
          </motion.span>
        </Button>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSections() {
  return (
    <section
      id="hero-sections"
      className="relative bg-[#0C0C0C] text-white overflow-hidden"
    >
      {/* 1440 px Desktop */}
      <div className="hidden min-[1441px]:block max-w-[1440px] mx-auto px-4 md:px-6 relative">
        <motion.div
          className="mx-auto py-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
        >
          <Header />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-8 items-center min-h-screen">
          <div className="px-2 py-16 mt-8">
            <HeroContent />
          </div>

          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.5,
              },
            }}
            className="relative h-screen lg:h-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-full w-full">
              <Image
                src="/img/hero-bg.jpg"
                alt="Hero Background"
                fill
                className="object-cover object-center"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,..."
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hidden lg:block min-[1441px]:hidden">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
        >
          <Header />
        </motion.div>

        <div className="px-4 min-h-[560px]">
          <motion.div
            className="relative w-full h-full min-h-[560px] overflow-hidden rounded-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/img/hero-bg.jpg"
              alt="Hero"
              fill
              className="md:object-fill object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute z-10 bottom-2 left-2 p-3">
              <HeroContent />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.6 },
          }}
        >
          <Header />
        </motion.div>

        <div className="px-4 min-h-[560px]">
          <motion.div
            className="relative w-full h-full min-h-[560px] overflow-hidden rounded-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
          >
            <Image
              src="/img/hero-bg.jpg"
              alt="Hero"
              fill
              className="md:object-fill object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="absolute z-10 bottom-2 left-2 p-3">
              <HeroContent />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
