interface StarRatingProps {
  rating: number;
  max?: number;
  size?: "sm" | "md" | "lg";
}

const sizes = { sm: "text-sm", md: "text-base", lg: "text-xl" };

export default function StarRating({ rating, max = 5, size = "md" }: StarRatingProps) {
  return (
    <div className={`flex gap-0.5 ${sizes[size]}`} aria-label={`Note : ${rating} sur ${max}`}>
      {Array.from({ length: max }).map((_, i) => (
        <span key={i} className={i < rating ? "text-terracotta-500" : "text-stone-200"}>
          ★
        </span>
      ))}
    </div>
  );
}
