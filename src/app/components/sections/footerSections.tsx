"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { FormValues, menuHeader, sosmed } from "@/app/lib/constants";
import { TextField } from "../ui/textfield";
import { Pill } from "../ui/pill";
import { Button } from "../ui/button";
import { useFormik } from "formik";
import { ContactSchema } from "@/app/lib/utils";
import { usePathname, useRouter } from "next/navigation";

export default function FooterSections() {
  const [submitting, setSubmitting] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const handleFooterNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (pathname !== "/") {
      router.push(`/#${id}`, { scroll: true });
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    const headerEl =
      (document.getElementById("site-header") as HTMLElement | null) ||
      (document.querySelector("header[role='banner']") as HTMLElement | null);

    const offset = headerEl?.offsetHeight ?? 0;
    const y =
      target.getBoundingClientRect().top + window.pageYOffset - offset - 8;

    window.scrollTo({ top: y, behavior: "smooth" });

    if (history.replaceState) {
      history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: ContactSchema,
    validateOnBlur: submitting,
    validateOnChange: submitting,
    onSubmit: async (values, helpers) => {
      await new Promise((r) => setTimeout(r, 1200));
      helpers.setSubmitting(false);
      setSubmitting(false);
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!submitting) setSubmitting(true);
    formik.handleSubmit();
  };

  const err = (name: keyof FormValues) =>
    (submitting || formik.touched[name]) && formik.errors[name]
      ? (formik.errors[name] as string)
      : undefined;

  return (
    <section id="contact" className="bg-white py-4 md:py-8">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-2xl bg-[#0F0F12] text-white ring-1 ring-white/10 p-4 sm:p-6 lg:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Pill tone="dark">Contact</Pill>

              <h3 className="mt-4 text-3xl font-semibold md:text-4xl">
                Get in touch
              </h3>

              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                For any inquiries or to discuss your vision further, we invite
                you to contact our professional team using the details provided
                below.
              </p>

              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 text-white/70" />
                  <div>
                    <dt className="font-medium text-white">Office</dt>
                    <dd className="text-white/70">
                      160 Old Park Ln, London W1K 1QZ
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="mt-0.5 h-5 w-5 text-white/70" />
                  <div>
                    <dt className="font-medium text-white">Email</dt>
                    <dd className="text-white/70">hello@lifetimeart.com</dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 text-white/70" />
                  <div>
                    <dt className="font-medium text-white">Telephone</dt>
                    <dd className="text-white/70">07713 555 888</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6">
                <div className="text-sm font-medium text-white">Follow us</div>
                <div className="mt-3 flex items-center gap-3">
                  {sosmed.map((item) => (
                    <a
                      key={item.id}
                      href="#"
                      className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white/80 ring-1 ring-white/10 transition hover:bg-white/20"
                      aria-label={item.id}
                    >
                      <Image
                        src={item.icon}
                        width={24}
                        height={24}
                        alt="sosmed"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/10 md:p-5">
                <form
                  onSubmit={onSubmit}
                  className="space-y-4 max-w-xl"
                  noValidate
                >
                  <TextField
                    label="Name"
                    name="name"
                    required
                    placeholder="John Smith"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={err("name")}
                  />

                  <TextField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    variant="outline"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={err("email")}
                  />

                  <TextField
                    label="Phone"
                    name="phone"
                    placeholder="+44 ..."
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={err("phone")}
                  />

                  <TextField
                    label="Message"
                    name="message"
                    placeholder="Tell us a little about your project…"
                    multiline
                    rows={5}
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={err("message")}
                  />

                  <Button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full cursor-pointer
                   bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white
                   ring-1 ring-white/10 transition hover:bg-neutral-800 disabled:opacity-70"
                  >
                    {formik.isSubmitting ? "Sending…" : "Send message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.footer
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
          className="mt-4 rounded-2xl bg-[#0F0F12] text-white ring-1 ring-white/10 p-4 sm:p-6 lg:p-8"
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="/img/Logo.png"
                  width={18}
                  height={18}
                  alt="LifetimeArt"
                  className="opacity-95"
                />
                <span className="text-lg font-semibold">LifetimeArt</span>
              </div>
              <p className="mt-3 text-xs text-white/60">
                © {new Date().getFullYear()} LifetimeArt. All rights reserved.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Quick links
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {menuHeader.slice(0, 3).map((l) => (
                      <li key={l.id}>
                        <a
                          href={`#${l.id}`}
                          onClick={(e) => handleFooterNavClick(e, l.id)}
                          className="text-white/70 transition hover:text-white"
                        >
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white opacity-0 sm:opacity-100">
                    &nbsp;
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    {menuHeader.slice(3).map((l) => (
                      <li key={l.id}>
                        <a
                          href={`#${l.id}`}
                          onClick={(e) => handleFooterNavClick(e, l.id)}
                          className="text-white/70 transition hover:text-white"
                        >
                          {l.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
