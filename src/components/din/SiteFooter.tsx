import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { DinLogo } from "./DinLogo";
import { DemoModal } from "./DemoModal";
import { SocialLinks } from "./SocialLinks";

const NAV = [
  { href: "/#come-funziona", label: "Come funziona" },
  { href: "/#per-istruttori", label: "Per istruttori" },
  { href: "/#per-autoscuole", label: "Per autoscuole" },
  { href: "/#prezzi", label: "Prezzi" },
];

export function SiteFooter() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <footer className="bg-surface-deep border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <DinLogo size="sm" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                L'ecosistema professionale per istruttori e autoscuole.
              </p>
              <div className="mt-5">
                <SocialLinks />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground">Naviga</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-foreground transition">{n.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground">Contatti</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@dinitalia.it" className="inline-flex items-center gap-1.5 hover:text-foreground transition">
                    <Mail className="h-4 w-4" /> info@dinitalia.it
                  </a>
                </li>
                <li>
                  <button onClick={() => setModal(true)} className="text-left hover:text-foreground transition">
                    Accedi all'app
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground">Legale</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="hover:text-foreground transition">Privacy Policy</Link></li>
                <li><Link to="/cookie" className="hover:text-foreground transition">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-5 text-xs text-muted-foreground">
            © 2026 DIN — Drive Instructor Network · P.IVA 00000000000
          </div>
        </div>
      </footer>
      <DemoModal open={modal} onClose={() => setModal(false)} />
    </>
  );
}
