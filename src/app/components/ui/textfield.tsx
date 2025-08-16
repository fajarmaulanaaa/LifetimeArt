/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { cn } from "@/app/lib/utils";

type Size = "sm" | "md" | "lg";
type Variant = "outline" | "soft";

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  required?: boolean;
  helperText?: string;
  error?: string | boolean;
  size?: Size;
  variant?: Variant;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  containerClassName?: string;
}

const baseInput =
  "block w-full rounded-lg border px-3.5 text-[15px] leading-6 text-slate-900 " +
  "placeholder:text-slate-400 outline-none disabled:opacity-60 disabled:cursor-not-allowed " +
  "transition-colors";

const sizeMap: Record<Size, string> = {
  sm: "py-2",
  md: "py-2.5",
  lg: "py-3",
};

const variantMap: Record<Variant, string> = {
  outline:
    "bg-white border-slate-300 hover:border-slate-400 focus:border-slate-400 " +
    "focus:ring-4 focus:ring-slate-200",
  soft:
    "bg-slate-50 border-slate-300 hover:border-slate-400 focus:border-slate-400 " +
    "focus:ring-4 focus:ring-slate-200",
};

const invalidClasses =
  "border-rose-400 focus:border-rose-400 focus:ring-4 focus:ring-rose-100";

export const TextField = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextFieldProps
>(
  (
    {
      id,
      label,
      required,
      helperText,
      error,
      size = "md",
      variant = "soft",
      leadingIcon,
      trailingIcon,
      multiline = false,
      rows = 4,
      className,
      containerClassName,
      ...props
    },
    ref
  ) => {
    const inputId = id ?? "";
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;
    const describedBy =
      (error ? errorId : "") + (helperText ? ` ${helperId}` : "");

    const commonProps = {
      id: inputId,
      "aria-invalid": !!error || undefined,
      "aria-describedby": describedBy.trim() || undefined,
      className: cn(
        baseInput,
        sizeMap[size],
        variantMap[variant],
        leadingIcon && "pl-10",
        trailingIcon && "pr-10",
        error && invalidClasses,
        className
      ),
      ref,
      ...props,
    };

    return (
      <div className={cn("w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1.5 block text-[13px] font-medium text-slate-800"
          >
            {label}
            {required && <span className="ml-0.5 text-rose-500">*</span>}
          </label>
        )}

        <div className="relative">
          {leadingIcon && (
            <span className="pointer-events-none absolute inset-y-0 left-3 grid place-items-center text-slate-400">
              {leadingIcon}
            </span>
          )}

          {multiline ? (
            <textarea {...(commonProps as any)} rows={rows} />
          ) : (
            <input {...(commonProps as any)} />
          )}

          {trailingIcon && (
            <span className="absolute inset-y-0 right-3 grid place-items-center text-slate-400">
              {trailingIcon}
            </span>
          )}
        </div>

        {error && typeof error === "string" && (
          <p id={errorId} className="mt-1.5 text-[12px] text-rose-600">
            {error}
          </p>
        )}

        {helperText && !error && (
          <p id={helperId} className="mt-1.5 text-[12px] text-slate-500">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = "TextField";
