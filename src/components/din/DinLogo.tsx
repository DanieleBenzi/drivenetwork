interface DinLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DinLogo({ size = "md", className = "" }: DinLogoProps) {
  const heights = {
    sm: "h-16",
    md: "h-24",
    lg: "h-32",
  } as const;

  return (
    <img
      src="/din-logo.png"
      alt="DIN — Drive Instructor Network"
      className={`${heights[size]} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
