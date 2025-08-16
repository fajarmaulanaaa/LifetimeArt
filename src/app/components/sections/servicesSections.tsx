"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { serviceData } from "@/app/lib/constants";
import { Pill } from "../ui/pill";

export default function ServicesSections() {
  const [openKey, setOpenKey] = useState<string>(serviceData[0].key);
  const active = serviceData.find((s) => s.key === openKey)!;

  return (
    <section id="services" className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="text-center">
          <motion.span
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <Pill tone="dark" size="sm">
              {" "}
              Services
            </Pill>
          </motion.span>

          <motion.h2
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.28, ease: "easeOut", delay: 0.05 }}
            className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl"
          >
            What we do
          </motion.h2>

          <motion.p
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="mt-2 text-sm text-slate-600 md:text-base"
          >
            Find out which one of our services fits the needs of your project
          </motion.p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-2">
          <div className="order-1 lg:order-none">
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.key}
                initial={{ opacity: 0, y: 10, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.985 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl ring-1 ring-black/5"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={active.img}
                    alt={active.title}
                    fill
                    priority
                    sizes="(max-width:1024px) 100vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white divide-y divide-slate-200 overflow-hidden">
            {serviceData.map((s) => {
              const isOpen = s.key === openKey;
              return (
                <div key={s.key} className="group">
                  <button
                    type="button"
                    onClick={() => setOpenKey(s.key)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Image src={s.icon} width={24} height={24} alt={s.key} />
                      <span
                        className={`text-[15px] font-medium ${
                          isOpen
                            ? "text-slate-900"
                            : "text-slate-800 group-hover:text-slate-900"
                        }`}
                      >
                        {s.title}
                      </span>
                    </span>

                    <span className="relative h-5 w-5">
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.span
                            key="x"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <XMarkIcon className="h-5 w-5 text-slate-700" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <PlusIcon className="h-5 w-5 text-slate-500 group-hover:text-slate-900" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 md:px-6 md:pb-6">
                          <motion.p
                            initial={{ x: 12, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.28, ease: "easeOut" }}
                            className="text-sm leading-relaxed text-slate-600 md:text-[15px]"
                          >
                            {s.desc}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
