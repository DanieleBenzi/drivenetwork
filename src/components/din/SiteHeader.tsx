import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { DinLogo } from "./DinLogo";
import { DemoModal } from "./DemoModal";

const NAV = [
  { href: "/#come-funziona", label: "Come funziona" },
  { href: "/#per-istruttori", label: "Per istruttori" },
  { href: "/#per-autoscuole", label: "Per autoscuole" },
  { href: "/#prezzi", label: "Prezzi" },
];

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link to="/" className="shrink-0"><DinLogo size="sm" /></Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModal(true)}
              className="hidden md:inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
            >
              Accedi all'app
            </button>
            <button
              onClick={() => setMenu((s) => !s)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground"
              aria-label="Menu"
            >
              {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {menu && (
          <div className="md:hidden border-t border-border bg-background px-5 py-4 space-y-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenu(false)}
                className="block text-sm font-medium text-foreground"
              >
                {n.label}
              </a>
            ))}
            <button
              onClick={() => { setMenu(false); setModal(true); }}
              className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Accedi all'app
            </button>
          </div>
        )}
      </header>
      <DemoModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
