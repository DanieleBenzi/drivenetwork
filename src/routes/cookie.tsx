import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — DIN" },
      { name: "description", content: "Informativa sull'uso dei cookie ai sensi del Provvedimento del Garante Privacy del 10 giugno 2021." },
      { property: "og:title", content: "Cookie Policy — DIN" },
      { property: "og:description", content: "Informativa sull'uso dei cookie del sito DIN." },
    ],
  }),
  component: CookiePage,
});

function CookiePage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[760px] px-5 lg:px-8 py-16 lg:py-20">
        <div className="rounded-xl border border-border bg-surface-alt p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Nota:</strong> questo documento è una bozza e deve essere
          verificato da un consulente legale prima della pubblicazione.
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
          Cookie Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          La presente informativa è resa ai sensi del Regolamento UE 2016/679 (GDPR) e delle Linee
          guida del Garante per la protezione dei dati personali sull'uso dei cookie e di altri
          strumenti di tracciamento (Provvedimento del 10 giugno 2021).
        </p>

        <H2>1. Cosa sono i cookie</H2>
        <P>
          I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo
          dell'utente, dove vengono memorizzati per essere ritrasmessi al sito alla visita
          successiva. Possono essere utilizzati per il funzionamento del sito, per analisi
          statistiche o per fornire funzionalità di terze parti.
        </P>

        <H2>2. Tipologie di cookie utilizzati</H2>

        <H3>2.1 Cookie tecnici / necessari</H3>
        <P>
          Indispensabili per il corretto funzionamento del sito. Non richiedono il consenso
          dell'utente, ai sensi dell'art. 122 del Codice Privacy.
        </P>
        <CookieTable
          rows={[
            { name: "din-cookie-consent-v1", purpose: "Memorizza le preferenze sui cookie espresse dall'utente.", duration: "12 mesi", provider: "din.it (prima parte)" },
            { name: <Ph>[nome cookie]</Ph>, purpose: "Sessione tecnica di navigazione.", duration: <Ph>[durata]</Ph>, provider: "din.it (prima parte)" },
          ]}
        />

        <H3>2.2 Cookie analitici</H3>
        <P>
          Utilizzati per raccogliere informazioni in forma aggregata sul numero di visitatori e su
          come il sito viene utilizzato. Richiedono il consenso dell'utente, salvo che siano
          assimilabili a cookie tecnici (es. analytics anonimizzati di prima parte).
        </P>
        <P>
          Strumento utilizzato: <Ph>[es. Google Analytics / Plausible / nessuno]</Ph>.
        </P>
        <CookieTable
          rows={[
            { name: <Ph>[nome cookie]</Ph>, purpose: "Misurazione del traffico e statistiche di utilizzo.", duration: <Ph>[durata]</Ph>, provider: <Ph>[fornitore]</Ph> },
          ]}
        />

        <H3>2.3 Cookie di terze parti</H3>
        <P>
          Installati da soggetti diversi dal Titolare del sito al fine di fornire funzionalità
          specifiche, come la prenotazione di una demo. Richiedono il consenso dell'utente.
        </P>
        <CookieTable
          rows={[
            { name: <Ph>[nome cookie]</Ph>, purpose: "Prenotazione appuntamenti demo.", duration: <Ph>[durata]</Ph>, provider: "Calendly LLC" },
            { name: <Ph>[nome cookie]</Ph>, purpose: <Ph>[finalità]</Ph>, duration: <Ph>[durata]</Ph>, provider: <Ph>[fornitore]</Ph> },
          ]}
        />

        <H2>3. Gestione del consenso</H2>
        <P>
          Al primo accesso al sito viene mostrato un banner che consente all'utente di accettare
          tutti i cookie, rifiutarli o personalizzare le proprie scelte. Nessun cookie diverso da
          quelli tecnici viene installato prima dell'acquisizione del consenso. L'utente può in
          qualsiasi momento modificare le proprie preferenze eliminando il cookie di consenso dal
          proprio browser: al successivo accesso, il banner sarà nuovamente mostrato.
        </P>

        <H2>4. Come disabilitare i cookie dal browser</H2>
        <P>
          L'utente può configurare il proprio browser per bloccare, accettare o cancellare i
          cookie. Si segnala che la disabilitazione dei cookie tecnici può compromettere il
          corretto funzionamento del sito. Di seguito i link alle istruzioni dei principali
          browser:
        </P>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><a className="text-primary hover:underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a className="text-primary hover:underline" href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a className="text-primary hover:underline" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a className="text-primary hover:underline" href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <H2>5. Privacy Policy</H2>
        <P>
          Per il trattamento dei dati personali raccolti tramite i cookie e per i diritti
          esercitabili dall'interessato si rinvia alla{" "}
          <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
        </P>

        <H2>6. Data di ultimo aggiornamento</H2>
        <P><Ph>[data]</Ph></P>
      </main>
      <SiteFooter />
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl sm:text-2xl font-extrabold text-foreground">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 text-lg font-bold text-foreground">{children}</h3>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-muted-foreground leading-relaxed">{children}</p>;
}
function Ph({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-accent px-1.5 py-0.5 text-sm font-mono text-primary">{children}</span>;
}

type Row = { name: React.ReactNode; purpose: React.ReactNode; duration: React.ReactNode; provider: React.ReactNode };
function CookieTable({ rows }: { rows: Row[] }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-surface-alt text-foreground">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Nome</th>
            <th className="px-3 py-2 text-left font-semibold">Finalità</th>
            <th className="px-3 py-2 text-left font-semibold">Durata</th>
            <th className="px-3 py-2 text-left font-semibold">Fornitore</th>
          </tr>
        </thead>
        <tbody className="text-muted-foreground">
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border align-top">
              <td className="px-3 py-2">{r.name}</td>
              <td className="px-3 py-2">{r.purpose}</td>
              <td className="px-3 py-2">{r.duration}</td>
              <td className="px-3 py-2">{r.provider}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
