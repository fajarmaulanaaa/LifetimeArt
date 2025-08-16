import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as Yup from "yup";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export const ContactSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .matches(EMAIL_REGEX, "Enter a valid email address")
    .required("Email is required"),
  message: Yup.string().trim().required("Message is required"),

  phone: Yup.string().trim().required("Phone is required"),
});

