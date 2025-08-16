"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const pillVariants = cva(
  "inline-flex items-center gap-2 rounded-full font-medium leading-none select-none",
  {
    variants: {
      tone: {
        dark: "bg-neutral-900 text-white",

        light: "border border-slate-200 bg-slate-50 text-slate-700",

        glass: "bg-white/10 text-white ring-1 ring-white/10 backdrop-blur",
      },
      size: {
        sm: "text-xs px-3 py-1",
        md: "text-sm px-3.5 py-1.5",
        lg: "text-base px-4 py-2",
      },
      elevate: {
        none: "",
        shadow: "shadow-sm",
      },
    },
    defaultVariants: {
      tone: "dark",
      size: "sm",
      elevate: "none",
    },
  }
);

type PillProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof pillVariants> & {
    asChild?: boolean;

    dot?: boolean;

    pulse?: boolean;

    leading?: React.ReactNode;

    trailing?: React.ReactNode;
  };

export function Pill({
  className,
  asChild,
  tone,
  size,
  elevate,
  children,
  dot,
  pulse,
  leading,
  trailing,
  ...props
}: PillProps) {
  const Comp = asChild ? Slot : "span";

  const dotWrapClass = tone === "glass" ? "bg-white/30" : "bg-black/10";
  const dotClass = tone === "glass" ? "bg-white" : "bg-neutral-900";

  return (
    <Comp
      className={cn(pillVariants({ tone, size, elevate }), className)}
      {...props}
    >
      {leading ??
        (dot && (
          <span
            className={cn(
              "mr-1.5 grid h-5 w-5 place-items-center rounded-full",
              dotWrapClass
            )}
          >
            <span
              className={cn(
                "h-2.5 w-2.5 rounded-full",
                dotClass,
                pulse && "animate-pulse"
              )}
              aria-hidden
            />
          </span>
        ))}
      {children}
      {trailing}
    </Comp>
  );
}
