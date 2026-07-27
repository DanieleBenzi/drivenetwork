import { createFileRoute, Link } from "@tanstack/react-router";
import { track } from "@vercel/analytics";
import { ArrowRight, BadgeCheck, Building2, GraduationCap, Target } from "lucide-react";
import { SCHOOL_URL } from "@/components/din/DemoModal";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";
import { SITE_URL } from "@/lib/site";

const TITLE = "Chi siamo — DIN, Drive Instructor Network";
const DESCRIPTION =
  "DIN è la prima piattaforma professionale italiana dedicata agli istruttori di guida e alle autoscuole: identità verificata, storico di carriera e strumenti di gestione.";
const URL = SITE_URL + "/chi-siamo";

export const Route = createFileRoute("/chi-siamo")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
          mainEntity: {
            "@type": "Organization",
            name: "DIN — Drive Instructor Network",
            alternateName: "DIN",
            url: SITE_URL,
            areaServed: "IT",
            description: DESCRIPTION,
          },
        }),
      },
    ],
  }),
  component: ChiSiamoPage,
});

function ChiSiamoPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main id="main">
        {/* Intro */}
        <section className="relative overflow-hidden" aria-label="Chi siamo">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 50% at 75% 0%, rgba(46,123,255,0.18) 0%, rgba(46,123,255,0) 60%), radial-gradient(50% 40% at 10% 20%, rgba(46,123,255,0.10) 0%, rgba(46,123,255,0) 60%)",
            }}
          />
          <div className="mx-auto max-w-4xl px-5 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" /> Chi siamo
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
              DIN — <span className="text-primary">Drive Instructor Network</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              DIN è la prima piattaforma professionale italiana dedicata esclusivamente agli
              istruttori di guida e alle autoscuole. Nasce con un obiettivo preciso: valorizzare la
              figura dell'istruttore di guida, trasformando esperienza, competenze e risultati in
              un'identità professionale riconoscibile e verificabile.
            </p>
          </div>
        </section>

        {/* Due lati dell'ecosistema */}
        <section className="border-t border-border bg-surface-alt">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Due professioni, un unico ecosistema
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  Per gli istruttori di guida
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Con strumenti digitali pensati per il lavoro di ogni giorno, ogni istruttore
                  gestisce la propria attività, monitora i risultati ottenuti e costruisce lo
                  storico della propria carriera. Certificazioni e badge professionali rendono quel
                  percorso visibile e verificabile, permettendo di distinguersi sul mercato.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
                  <Building2 className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">Per le autoscuole</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  DIN mette a disposizione strumenti evoluti per la gestione dei collaboratori,
                  l'analisi delle performance e l'organizzazione del lavoro. Il risultato è un
                  ecosistema moderno, costruito per migliorare qualità, efficienza e crescita della
                  scuola guida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missione */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
              <Target className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              La nostra missione
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Vogliamo contribuire all'evoluzione della formazione alla guida in Italia, offrendo
              tecnologie, servizi e strumenti che aiutino professionisti e autoscuole a lavorare
              meglio, crescere professionalmente e offrire agli allievi un servizio sempre più
              qualificato.
            </p>
            <div className="mt-10 rounded-2xl border border-primary/30 bg-accent p-7 lg:p-8">
              <p className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                DIN non è solo un software. È una rete professionale costruita per dare valore a chi
                ogni giorno forma i conducenti di domani.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative border-t border-border overflow-hidden"
          aria-label="Accedi all'app"
        >
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(60% 80% at 50% 100%, rgba(46,123,255,0.35) 0%, rgba(46,123,255,0) 65%), linear-gradient(180deg, #0a0e1a 0%, #0c1430 100%)",
            }}
          />
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-16 lg:py-20 text-center">
            <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
              Entra nel network DIN
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Scopri come funziona l'ecosistema e inizia a costruire la tua identità professionale
              verificata.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/app"
                onClick={() => track("click_apri_app", { posizione: "chi_siamo" })}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
              >
                Usa l'app <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SCHOOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("click_apri_dashboard", { posizione: "chi_siamo" })}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground hover:bg-card transition"
              >
                Apri la dashboard <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
