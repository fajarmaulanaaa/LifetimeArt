"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon, XMarkIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "What area are you based in?",
    a: "We primarily serve London and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary depending on size and complexity. We’ll provide an estimated schedule during your consultation and keep you updated throughout the process.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Yes, we offer free, no-obligation quotes. Our team will visit your property, assess your needs, and provide a detailed breakdown.",
  },
  {
    q: "Will I need planning permission for my project?",
    a: "This depends on the type and scope of your project. We can guide you through local regulations and help with applications if needed.",
  },
  {
    q: "Do you provide a guarantee for your work?",
    a: "Absolutely. All of our work is backed by a guarantee for quality and durability, giving you peace of mind.",
  },
  {
    q: "Can I stay in my home while the work is being done?",
    a: "In most cases, yes—though it may depend on the scope of work and areas affected. We’ll discuss options to minimise disruption.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply get in touch with our team. We’ll arrange a consultation, discuss your ideas, and prepare a tailored plan and quote.",
  },
];

export default function FAQSections() {
  const [open, setOpen] = useState<number>(0); // item pertama terbuka

  return (
    <section id="faqs" className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left copy */}
          <div>
            <motion.span
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-white"
            >
              FAQs
            </motion.span>

            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.28, ease: "easeOut", delay: 0.05 }}
              className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl"
            >
              Answering Your <br className="hidden sm:block" /> Questions
            </motion.h2>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
              className="mt-3 max-w-md text-sm text-slate-600 md:text-base"
            >
              Got more questions? Send us your enquiry below
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
            >
              Get in touch
              <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-white text-neutral-900">
                <ArrowUpRightIcon className="h-4 w-4" />
              </span>
            </motion.a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-xl border border-slate-200 bg-white">
                  {/* header row */}
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-3 text-left hover:bg-slate-50 md:px-5 md:py-4"
                  >
                    <span className="text-[15px] font-medium text-slate-900">
                      {item.q}
                    </span>

                    {/* icon: + <-> x with rotation */}
                    <span className="relative h-5 w-5 shrink-0">
                      <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                          <motion.span
                            key="x"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <XMarkIcon className="h-5 w-5 text-slate-600" />
                          </motion.span>
                        ) : (
                          <motion.span
                            key="plus"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="absolute inset-0"
                          >
                            <PlusIcon className="h-5 w-5 text-slate-400" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  </button>

                  {/* content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pr-10 text-sm leading-relaxed text-slate-600 md:px-5 md:pb-5">
                          {item.a}
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
