import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Smartphone, Share, MoreVertical, Plus, Monitor, Apple, Chrome } from "lucide-react";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";

const APP_URL = "https://app.dinitalia.it";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "Usa l'app DIN — accedi dal browser o installala sul telefono" },
      { name: "description", content: "L'app DIN è una web app: si usa subito dal browser, senza store, e si può installare sul telefono in pochi secondi. Istruzioni per iPhone e Android." },
      { property: "og:title", content: "Usa l'app DIN" },
      { property: "og:description", content: "Accedi all'app DIN dal browser o installala sul telefono in pochi secondi." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(46,123,255,0.18), transparent 60%)",
            }}
          />
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20 lg:py-28 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent border border-primary/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <Smartphone className="h-3.5 w-3.5" /> Per gli istruttori
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
              L'app DIN, <span className="text-primary">sempre con te</span>.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              Accedi da qualsiasi dispositivo via web — telefono, tablet o computer — e, se vuoi,
              installala sul telefono in pochi secondi come una normale app.
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-4 text-base font-semibold text-primary-foreground hover:bg-primary-hover transition shadow-glow"
              >
                Apri l'app <ExternalLink className="h-4 w-4" />
              </a>
              <p className="text-sm text-muted-foreground">
                Funziona da subito nel browser. Nessun download dagli store.
              </p>
            </div>
          </div>
        </section>

        {/* Install */}
        <section className="border-b border-border bg-surface-alt">
          <div className="mx-auto max-w-6xl px-5 lg:px-8 py-20 lg:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Opzionale</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground">
                Installala sul telefono
              </h2>
              <p className="mt-4 text-muted-foreground">
                In meno di un minuto avrai l'icona DIN nella schermata Home, come una normale app.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5">
              <InstallCard
                icon={<Apple className="h-6 w-6" />}
                platform="iPhone / iPad"
                browser="Safari"
                steps={[
                  { icon: <ExternalLink className="h-4 w-4" />, text: <>Apri <strong className="text-foreground">app.dinitalia.it</strong> in Safari.</> },
                  { icon: <Share className="h-4 w-4" />, text: <>Tocca il pulsante <strong className="text-foreground">Condividi</strong> (icona quadrato con freccia verso l'alto).</> },
                  { icon: <Plus className="h-4 w-4" />, text: <>Scorri il menu e tocca <strong className="text-foreground">"Aggiungi alla schermata Home"</strong>.</> },
                  { icon: <Smartphone className="h-4 w-4" />, text: <>Conferma: l'icona DIN comparirà tra le tue app.</> },
                ]}
              />
              <InstallCard
                icon={<Chrome className="h-6 w-6" />}
                platform="Android"
                browser="Chrome"
                steps={[
                  { icon: <ExternalLink className="h-4 w-4" />, text: <>Apri <strong className="text-foreground">app.dinitalia.it</strong> in Chrome.</> },
                  { icon: <MoreVertical className="h-4 w-4" />, text: <>Tocca il <strong className="text-foreground">menu</strong> (tre puntini in alto a destra).</> },
                  { icon: <Plus className="h-4 w-4" />, text: <>Tocca <strong className="text-foreground">"Installa app"</strong> o <strong className="text-foreground">"Aggiungi a schermata Home"</strong>.</> },
                  { icon: <Smartphone className="h-4 w-4" />, text: <>Conferma: l'icona DIN comparirà tra le tue app.</> },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Preferisci il web */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-20 lg:py-24">
            <div className="rounded-2xl border border-border bg-card p-8 sm:p-10">
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
                <Monitor className="h-5 w-5" />
              </span>
              <h2 className="mt-5 text-2xl sm:text-3xl font-extrabold text-foreground">
                Preferisci il web?
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Nessun problema. Puoi usare l'app DIN comodamente anche da computer o tablet
                direttamente dal browser, senza installare nulla. Basta andare su{" "}
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-semibold"
                >
                  app.dinitalia.it
                </a>{" "}
                e accedere con le tue credenziali.
              </p>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:border-primary/40 transition"
              >
                Apri nel browser <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Nota autoscuole */}
        <section className="border-b border-border bg-surface-alt">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 py-14 text-center">
            <p className="text-muted-foreground">
              Sei un'autoscuola?{" "}
              <Link to="/" hash="contatti" className="inline-flex items-center gap-1 text-primary font-semibold hover:underline">
                Richiedi una demo <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

interface Step {
  icon: React.ReactNode;
  text: React.ReactNode;
}

function InstallCard({
  icon,
  platform,
  browser,
  steps,
}: {
  icon: React.ReactNode;
  platform: string;
  browser: string;
  steps: Step[];
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7 sm:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent border border-primary/30 text-primary">
          {icon}
        </span>
        <div>
          <h3 className="font-extrabold text-foreground text-lg leading-tight">{platform}</h3>
          <p className="text-sm text-muted-foreground">Browser: {browser}</p>
        </div>
      </div>

      <ol className="mt-6 space-y-4">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <span className="shrink-0 grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
              {i + 1}
            </span>
            <div className="flex-1 pt-1">
              <p className="text-muted-foreground leading-relaxed flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">{s.icon}</span>
                <span>{s.text}</span>
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
