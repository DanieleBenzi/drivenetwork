interface DinLogoProps {
  withTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function DinLogo({ withTagline = false, size = "md" }: DinLogoProps) {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-5xl",
  } as const;

  return (
    <div className="flex flex-col items-start gap-1">
      <span className={`din-logo ${sizes[size]}`} aria-label="DIN">
        D<span className="din-logo-bar" aria-hidden="true" />N
      </span>
      {withTagline && <span className="din-tagline">Drive Instructor Network</span>}
    </div>
  );
}
