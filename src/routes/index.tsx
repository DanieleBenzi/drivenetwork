import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Users, Calendar, BarChart3, Award,
  LayoutDashboard, UserCheck, Eye, FileDown, Lock, BadgeCheck,
} from "lucide-react";
import { DemoModal, INSTRUCTOR_URL, SCHOOL_URL } from "@/components/din/DemoModal";
import { PhoneMockup, DesktopMockup } from "@/components/din/Mockups";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIN — Drive Instructor Network" },
      { name: "description", content: "L'ecosistema che dà identità professionale agli istruttori di guida e trasparenza alle autoscuole italiane." },
      { property: "og:title", content: "DIN — Drive Instructor Network" },
      { property: "og:description", content: "Due app collegate: il registro dell'istruttore e il gestionale dell'autoscuola." },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const openExternal = (url: string) => window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="bg-background text-foreground">
      <SiteHeader />


      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-alt px-3 py-1 text-xs font-semibold text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Ecosistema per istruttori e autoscuole
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                Dai ai tuoi istruttori l'identità professionale che meritano.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                DIN è l'ecosistema di due app collegate per il mondo delle autoscuole italiane: il
                registro professionale dell'istruttore e il gestionale dell'autoscuola, allineati su
                un'unica identità verificata.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-soft"
                >
                  Richiedi una demo <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#come-funziona"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-surface-alt transition"
                >
                  Scopri come funziona
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> ID DIN verificato</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-primary" /> Certificazioni tracciate</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-surface-alt" />
              <div className="relative grid grid-cols-[auto_1fr] gap-4 items-end p-6 lg:p-10">
                <PhoneMockup />
                <div className="hidden sm:block">
                  <DesktopMockup />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section id="problema" className="border-t border-border bg-surface-alt">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 lg:py-24 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Il problema</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
            Oggi manca un linguaggio comune tra istruttori e autoscuole.
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-4 text-left">
            <div className="rounded-2xl bg-background border border-border p-6">
              <h3 className="font-bold text-foreground">Le autoscuole non vedono.</h3>
              <p className="mt-2 text-muted-foreground">Nessuna visibilità trasparente e in tempo reale sul lavoro dei propri istruttori: tutto passa da fogli sparsi e racconti.</p>
            </div>
            <div className="rounded-2xl bg-background border border-border p-6">
              <h3 className="font-bold text-foreground">Gli istruttori non sono riconosciuti.</h3>
              <p className="mt-2 text-muted-foreground">Non esiste un'identità professionale portabile: esperienza, statistiche e certificazioni restano invisibili tra una scuola e l'altra.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Come funziona */}
      <section id="come-funziona" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Come funziona</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
              Tre passaggi, un ecosistema connesso.
            </h2>
            <p className="mt-4 text-muted-foreground">
              L'istruttore produce e possiede i dati. L'autoscuola li vede e li aggrega in sola lettura.
              <span className="font-semibold text-foreground"> Un istruttore, un'autoscuola alla volta.</span>
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { n: "01", t: "L'istruttore ha il suo ID DIN", d: "Riceve un ID DIN univoco e usa l'app per registrare allievi, guide ed esami. Il suo storico è suo." },
              { n: "02", t: "L'autoscuola lo collega", d: "La scuola invia una richiesta di collegamento. L'istruttore approva: 1 istruttore = 1 autoscuola alla volta." },
              { n: "03", t: "La scuola vede in sola lettura", d: "L'autoscuola accede al registro e alle statistiche aggregate, senza poter modificare i dati operativi." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-7 hover:shadow-soft transition">
                <span className="text-sm font-bold text-primary">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per istruttori */}
      <section id="per-istruttori" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                App Istruttori · Mobile
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">
                Il tuo registro professionale, sempre con te.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Allievi, guide ed esami nella tua tasca. Costruisci il tuo storico e portalo con te,
                ovunque tu lavori.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { i: Users, t: "Registro allievi e guide", d: "Tieni traccia di ogni guida, ogni allievo, ogni progresso." },
                  { i: Calendar, t: "Calendario esami", d: "Esami teorici e pratici sempre sotto controllo." },
                  { i: BarChart3, t: "Statistiche di successo personali", d: "Il tuo tasso di promozione, in chiaro." },
                  { i: Award, t: "Certificazioni e badge di carriera", d: "ID DIN verificato e anni di esperienza riconosciuti." },
                ].map((f) => (
                  <li key={f.t} className="flex gap-4">
                    <span className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-accent text-primary">
                      <f.i className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">{f.t}</p>
                      <p className="text-muted-foreground text-sm">{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openExternal(INSTRUCTOR_URL)}
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-soft"
              >
                Richiedi una demo <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="flex justify-center lg:justify-end">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Per autoscuole */}
      <section id="per-autoscuole" className="border-t border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DesktopMockup />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                App Autoscuole · Desktop
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-foreground">
                Tutti i tuoi istruttori, una vista sola.
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Una dashboard chiara e onesta del lavoro che esce dalla tua scuola, costruita sui dati
                reali dei tuoi istruttori collegati.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  { i: LayoutDashboard, t: "Dashboard aggregata", d: "Indicatori della scuola in tempo reale." },
                  { i: UserCheck, t: "Istruttori collegati e verificati", d: "Profili DIN con ID e certificazioni controllate." },
                  { i: Eye, t: "Vista allievi ed esami in sola lettura", d: "Trasparenza totale, senza alterare i dati operativi." },
                  { i: FileDown, t: "Statistiche e export documentale", d: "Esportazioni pronte per gestione e adempimenti." },
                ].map((f) => (
                  <li key={f.t} className="flex gap-4">
                    <span className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-background border border-border text-primary">
                      <f.i className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-bold text-foreground">{f.t}</p>
                      <p className="text-muted-foreground text-sm">{f.d}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openExternal(SCHOOL_URL)}
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-soft"
              >
                Richiedi una demo <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibilità */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Nato dall'esperienza di chi lavora ogni giorno con le autoscuole.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              DIN nasce dall'osservazione diretta del lavoro di istruttori e scuole guida italiane,
              per dare struttura e riconoscimento a una professione che oggi ne è priva.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              { i: Lock, t: "Dati di proprietà dell'istruttore", d: "Privacy e controllo by design." },
              { i: ShieldCheck, t: "Conforme al GDPR", d: "Trattamento dati a norma di legge." },
              { i: BadgeCheck, t: "Modello a identità verificata", d: "Ogni istruttore ha un ID DIN univoco." },
            ].map((f) => (
              <div key={f.t} className="rounded-2xl border border-border bg-background p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent text-primary">
                  <f.i className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{f.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section className="bg-primary">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 lg:py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-primary-foreground leading-tight">
            Pronto a entrare nel network DIN?
          </h2>
          <p className="mt-4 text-primary-foreground/85 text-lg max-w-xl mx-auto">
            Prenota una demo e scopri come l'identità professionale dei tuoi istruttori cambia il modo
            di lavorare della tua autoscuola.
          </p>
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-6 py-3.5 text-sm font-bold text-primary hover:bg-surface-alt transition shadow-soft"
          >
            Richiedi una demo <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-alt">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-14 pb-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <DinLogo size="sm" />
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
                L'ecosistema professionale per istruttori e autoscuole.
              </p>
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
                  <a href="mailto:info@din.it" className="inline-flex items-center gap-1.5 hover:text-foreground transition">
                    <Mail className="h-4 w-4" /> info@din.it
                  </a>
                </li>
                <li>
                  <button onClick={openModal} className="text-left hover:text-foreground transition">
                    Richiedi una demo
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground">Legale</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-5 text-xs text-muted-foreground">
            © 2026 DIN — Drive Instructor Network · P.IVA 00000000000
          </div>
        </div>
      </footer>

      <DemoModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}
