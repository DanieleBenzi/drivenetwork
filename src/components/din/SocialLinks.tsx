import { Facebook } from "lucide-react";

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/DINDriveInstructorNetwork",
    Icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@din.drive.instruct",
    Icon: TikTokIcon,
  },
];

// lucide-react non include un'icona TikTok
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06v-3.1a5.66 5.66 0 0 0-.77-.05A5.66 5.66 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.28 4.28 0 0 1-3.24-1.48Z" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {SOCIALS.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-card/60 text-muted-foreground hover:border-primary hover:text-foreground transition"
          >
            <s.Icon className="h-4 w-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
