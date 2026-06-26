import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Users, Calendar, BarChart3, Award,
  LayoutDashboard, UserCheck, Eye, FileDown, Lock, BadgeCheck, Check,
} from "lucide-react";
import { DemoModal, INSTRUCTOR_URL, SCHOOL_URL } from "@/components/din/DemoModal";
import { PhoneMockup, DesktopMockup } from "@/components/din/Mockups";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";

const SITE_URL = "https://drivenetwork.lovable.app";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4f8e7923-9a47-4b76-8e6b-5da3dd994e19/id-preview-3e6cd928--05b32e19-9e7b-488f-96f5-bf9104e8ed46.lovable.app-1782154781464.png";

const FAQS: { q: string; a: string }[] = [
  {
    q: "Cos'è DIN?",
    a: "DIN (Drive Instructor Network) è la piattaforma professionale italiana per istruttori di guida e autoscuole. Si compone di due app collegate: il registro digitale dell'istruttore, con ID DIN univoco e storico verificato, e il gestionale dell'autoscuola, che permette di seguire in trasparenza il lavoro degli istruttori collegati.",
  },
  {
    q: "Come funziona il collegamento tra istruttore e autoscuola?",
    a: "L'autoscuola invia una richiesta di collegamento all'istruttore tramite il suo ID DIN. L'istruttore approva o rifiuta dall'app: solo dopo l'approvazione la scuola guida vede in sola lettura allievi, guide ed esami registrati. Un istruttore può essere collegato a una sola autoscuola alla volta.",
  },
  {
    q: "Un istruttore può lavorare con più autoscuole?",
    a: "Non in contemporanea: il modello DIN prevede un collegamento attivo per volta, per garantire chiarezza nei rapporti professionali. L'istruttore può però cambiare autoscuola in qualsiasi momento, portando con sé tutto il proprio storico, le certificazioni e le statistiche di carriera.",
  },
  {
    q: "Quanto costa DIN?",
    a: "Il piano per gli istruttori parte da 9,90€ al mese e include profilo verificato, badge, certificazioni e statistiche avanzate. Il piano per le autoscuole parte da 99€ al mese fino a 5 istruttori, con dashboard completa, gestione istruttori, monitoraggio esami, reportistica ed export documentale.",
  },
  {
    q: "L'autoscuola può modificare i dati dell'istruttore?",
    a: "No. L'autoscuola accede in sola lettura ai dati operativi registrati dall'istruttore: vede allievi, guide, esami e statistiche aggregate, ma non può modificarli né cancellarli. I dati restano di proprietà dell'istruttore.",
  },
  {
    q: "I dati degli istruttori sono al sicuro?",
    a: "Sì. DIN tratta i dati in conformità al Regolamento UE 2016/679 (GDPR) e al Codice Privacy italiano. La proprietà dei dati operativi resta dell'istruttore, l'accesso dell'autoscuola è limitato e tracciato, e ogni profilo è legato a un ID DIN univoco a identità verificata.",
  },
  {
    q: "DIN sostituisce il gestionale dell'autoscuola?",
    a: "DIN copre il flusso professionale che oggi manca: registro istruttore, identità verificata e vista trasparente per l'autoscuola sul lavoro dei suoi istruttori collegati. Non sostituisce gli adempimenti amministrativi della scuola guida, ma li affianca con dati operativi reali ed esportabili.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DIN — Network professionale per istruttori di guida e autoscuole" },
      { name: "description", content: "DIN è il network professionale per istruttori di guida e autoscuole italiane: identità verificata, registro istruttore e gestionale autoscuola. Richiedi una demo." },
      { property: "og:title", content: "DIN — Network professionale per istruttori di guida e autoscuole" },
      { property: "og:description", content: "Identità professionale verificata per istruttori di guida e vista trasparente per le autoscuole. Due app, un ecosistema." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:title", content: "DIN — Network professionale per istruttori di guida e autoscuole" },
      { name: "twitter:description", content: "Identità professionale verificata per istruttori di guida e vista trasparente per le autoscuole." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "SoftwareApplication",
              name: "DIN — App Istruttori",
              applicationCategory: "BusinessApplication",
              operatingSystem: "iOS, Android",
              description: "Registro professionale per istruttori di guida: allievi, guide, esami, ID DIN verificato e certificazioni portabili.",
              offers: {
                "@type": "Offer",
                price: "9.90",
                priceCurrency: "EUR",
                priceSpecification: { "@type": "UnitPriceSpecification", price: "9.90", priceCurrency: "EUR", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
              },
            },
            {
              "@type": "SoftwareApplication",
              name: "DIN — App Autoscuole",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description: "Gestionale per autoscuole: dashboard aggregata, istruttori collegati verificati, monitoraggio esami ed export documentale.",
              offers: {
                "@type": "Offer",
                price: "99.00",
                priceCurrency: "EUR",
                priceSpecification: { "@type": "UnitPriceSpecification", price: "99.00", priceCurrency: "EUR", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } },
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
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
      <main id="main">

      {/* Hero */}
      <section id="top" className="relative overflow-hidden" aria-label="Introduzione">

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 50% at 75% 0%, rgba(46,123,255,0.18) 0%, rgba(46,123,255,0) 60%), radial-gradient(50% 40% at 10% 20%, rgba(46,123,255,0.10) 0%, rgba(46,123,255,0) 60%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" /> Ecosistema per istruttori e autoscuole
              </span>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-foreground">
                Il network professionale per <span className="text-primary">istruttori di guida</span> e <span className="text-primary">autoscuole</span>.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">
                DIN dà a ogni istruttore un'identità professionale verificata — ID, certificazioni e storico di carriera — e alle autoscuole una vista trasparente sui propri istruttori collegati. Un'unica piattaforma, due app connesse.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
                >
                  Richiedi una demo <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#come-funziona"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground hover:bg-card transition"
                >
                  Scopri come funziona
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> ID DIN verificato</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4 text-primary" /> Certificazioni tracciate</span>
                <span className="flex items-center gap-1.5"><LayoutDashboard className="h-4 w-4 text-primary" /> Due app: istruttori + autoscuole</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-3xl bg-surface-alt border border-border" />
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
            <div className="rounded-2xl bg-card border border-border p-6">
              <h3 className="font-bold text-foreground">Le autoscuole non vedono.</h3>
              <p className="mt-2 text-muted-foreground">Nessuna visibilità trasparente e in tempo reale sul lavoro dei propri istruttori: tutto passa da fogli sparsi e racconti.</p>
            </div>
            <div className="rounded-2xl bg-card border border-border p-6">
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
              <div key={s.n} className="rounded-2xl border border-border bg-card p-7 hover:border-primary/60 transition">
                <span className="text-sm font-bold text-primary">{s.n}</span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{s.t}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Per istruttori */}
      <section id="per-istruttori" className="border-t border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-accent border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
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
                    <span className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
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
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
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
      <section id="per-autoscuole" className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <DesktopMockup />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
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
                    <span className="shrink-0 grid h-10 w-10 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
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
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
              >
                Richiedi una demo <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibilità */}
      <section className="border-t border-border bg-surface-alt">
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
              <div key={f.t} className="rounded-2xl border border-border bg-card p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
                  <f.i className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{f.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prezzi */}
      <section id="prezzi" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Prezzi</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
              DIN per te e per la tua autoscuola.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Due piani pensati per i due lati dell'ecosistema. Pari dignità, stessa identità verificata.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-5">
            <PricingCard
              eyebrow={<>Per <span className="text-primary">ISTRUTTORI</span></>}
              subtitle="Fai crescere la tua carriera"
              price="a partire da 9,90€"
              period="/ mese"
              features={[
                "Badge e certificazioni",
                "Statistiche avanzate",
                "Profilo verificato",
                "Community esclusiva",
                "Tutti gli strumenti DIN",
              ]}
              ctaLabel="Richiedi una demo"
              onCta={() => openExternal(INSTRUCTOR_URL)}
            />
            <PricingCard
              eyebrow={<>Per <span className="text-primary">AUTOSCUOLE</span></>}
              subtitle="Gestisci, monitora, valorizza"
              price="a partire da 99€"
              period="/ mese"
              priceNote="fino a 5 istruttori"
              features={[
                "Dashboard completa",
                "Gestione istruttori",
                "Monitoraggio esami",
                "Reportistica avanzata",
                "Export documentale",
                "Supporto dedicato",
              ]}
              ctaLabel="Richiedi una demo"
              onCta={() => openExternal(SCHOOL_URL)}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-border bg-surface-alt">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20 lg:py-24">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Domande frequenti</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
              Tutto quello che vuoi sapere su DIN
            </h2>
          </div>
          <dl className="mt-10 space-y-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-card p-6 lg:p-7">
                <dt>
                  <h3 className="text-base lg:text-lg font-bold text-foreground">{f.q}</h3>
                </dt>
                <dd className="mt-2 text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA finale */}
      <section className="relative border-t border-border overflow-hidden" aria-label="Richiedi una demo">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 100%, rgba(46,123,255,0.35) 0%, rgba(46,123,255,0) 65%), linear-gradient(180deg, #0a0e1a 0%, #0c1430 100%)",
          }}
        />
        <div className="mx-auto max-w-5xl px-5 lg:px-8 py-20 lg:py-24 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight">
            Pronto a entrare nel network DIN?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Prenota una demo e scopri come l'identità professionale dei tuoi istruttori cambia il modo
            di lavorare della tua autoscuola.
          </p>
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
          >
            Richiedi una demo <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
      </main>

      <SiteFooter />


      <DemoModal open={modal} onClose={() => setModal(false)} />
    </div>
  );
}

interface PricingCardProps {
  eyebrow: React.ReactNode;
  subtitle: string;
  price: string;
  period: string;
  priceNote?: string;
  features: string[];
  ctaLabel: string;
  onCta: () => void;
}

function PricingCard({ eyebrow, subtitle, price, period, priceNote, features, ctaLabel, onCta }: PricingCardProps) {
  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-card p-8 lg:p-10 transition hover:border-primary/60">
      <p className="text-xs font-bold uppercase tracking-widest text-foreground">{eyebrow}</p>
      <p className="mt-2 text-muted-foreground">{subtitle}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-3xl sm:text-4xl font-extrabold text-foreground">{price}</span>
        <span className="text-sm text-muted-foreground">{period}</span>
      </div>
      {priceNote && <p className="mt-1 text-xs text-muted-foreground">{priceNote}</p>}
      <ul className="mt-7 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground">
            <span className="shrink-0 mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent border border-primary/30 text-primary">
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={onCta}
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
      >
        {ctaLabel} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
