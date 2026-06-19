type BadgeColor = "terracotta" | "sand" | "ocean" | "stone";

const colors: Record<BadgeColor, string> = {
  terracotta: "bg-terracotta-100 text-terracotta-700",
  sand: "bg-sand-100 text-stone-600",
  ocean: "bg-ocean-100 text-ocean-700",
  stone: "bg-stone-100 text-stone-600",
};

interface BadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}

export default function Badge({ children, color = "sand", className = "" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${colors[color]} ${className}`}>
      {children}
    </span>
  );
}
