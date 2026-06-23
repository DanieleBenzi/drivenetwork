import logoAsset from "@/assets/din-logo.png.asset.json";

interface DinLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function DinLogo({ size = "md", className = "" }: DinLogoProps) {
  const heights = {
    sm: "h-9",
    md: "h-12",
    lg: "h-16",
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
