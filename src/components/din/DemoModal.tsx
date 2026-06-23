import { useEffect } from "react";
import { X, GraduationCap, Building2 } from "lucide-react";

export const INSTRUCTOR_URL = "https://calendly.com/din-demo?a1=Sono%20interessato%20all%27app%20istruttori";
export const SCHOOL_URL = "https://calendly.com/din-demo?a1=Sono%20interessato%20all%27app%20autoscuola";

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const go = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-card shadow-card p-8 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Chiudi"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="demo-modal-title" className="text-2xl sm:text-3xl font-bold text-foreground">
          Per cosa sei interessato a DIN?
        </h2>
        <p className="mt-2 text-muted-foreground">Scegli il tuo profilo per prenotare la demo giusta.</p>

        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          <button
            onClick={() => go(INSTRUCTOR_URL)}
            className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-background p-5 text-left transition hover:border-primary hover:bg-accent"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <GraduationCap className="h-6 w-6" />
            </span>
            <span className="font-bold text-foreground">Sono un istruttore</span>
            <span className="text-sm text-muted-foreground">Voglio il mio registro professionale.</span>
          </button>

          <button
            onClick={() => go(SCHOOL_URL)}
            className="group flex flex-col items-start gap-3 rounded-xl border border-border bg-background p-5 text-left transition hover:border-primary hover:bg-accent"
          >
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Building2 className="h-6 w-6" />
            </span>
            <span className="font-bold text-foreground">Sono un'autoscuola</span>
            <span className="text-sm text-muted-foreground">Voglio gestire i miei istruttori.</span>
          </button>
        </div>
      </div>
    </div>
  );
}
