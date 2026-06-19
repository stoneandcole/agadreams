import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-terracotta-500 hover:bg-terracotta-600 text-white",
  outline: "border border-terracotta-400 text-terracotta-600 hover:bg-terracotta-50",
  ghost: "border border-stone-300 text-stone-700 hover:bg-sand-100",
  whatsapp: "bg-[#25D366] hover:bg-[#20b858] text-white",
};

const sizes: Record<Size, string> = {
  sm: "text-xs px-3 py-1.5",
  md: "text-sm px-5 py-2.5",
  lg: "text-base px-7 py-3.5",
};

const base = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
}

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({ href, variant = "primary", size = "md", external, className = "", children, ...props }: LinkButtonProps) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>{children}</a>;
  }
  return <Link href={href} className={cls} {...props}>{children}</Link>;
}
