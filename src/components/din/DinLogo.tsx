import logoAsset from "@/assets/din-logo.png.asset.json";

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
      src={logoAsset.url}
      alt="DIN — Drive Instructor Network"
      className={`${heights[size]} w-auto select-none ${className}`}
      draggable={false}
    />
  );
}
