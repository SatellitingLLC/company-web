import Link from "next/link";
import type { ComponentProps } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "ghost" | "light";
type Size = "md" | "sm";

/** Lets native elements (e.g. a form submit button) share the Button look. */
export function buttonClassName(variant: Variant = "primary", size: Size = "md") {
  return [styles.btn, styles[variant], size === "sm" && styles.sm]
    .filter(Boolean)
    .join(" ");
}

type ButtonProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return <Link className={[buttonClassName(variant, size), className].filter(Boolean).join(" ")} {...props} />;
}
