import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/din/SiteHeader";
import { SiteFooter } from "@/components/din/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — DIN" },
      { name: "description", content: "Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) e del D.lgs. 196/2003." },
      { property: "og:title", content: "Privacy Policy — DIN" },
      { property: "og:description", content: "Informativa sul trattamento dei dati personali di DIN." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-[760px] px-5 lg:px-8 py-16 lg:py-20">
        <div className="rounded-xl border border-border bg-surface-alt p-4 text-sm text-muted-foreground">
          <strong className="text-foreground">Nota:</strong> questo documento è una bozza e deve essere
          verificato da un consulente legale prima della pubblicazione.
        </div>

        <h1 className="mt-8 text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground">
          Informativa resa ai sensi degli articoli 13 e 14 del Regolamento UE 2016/679 (GDPR) e del
          D.lgs. 30 giugno 2003, n. 196 (Codice Privacy) e successive modifiche.
        </p>

        <Article>
          <H2>1. Titolare del trattamento</H2>
          <P>
            Il Titolare del trattamento è <Ph>[Ragione sociale]</Ph>, con sede in{" "}
            <Ph>[indirizzo]</Ph>, P.IVA <Ph>[_____]</Ph>. Per qualsiasi richiesta è possibile
            contattare il Titolare all'indirizzo email{" "}
            <a href="mailto:info@din.it" className="text-primary hover:underline">info@din.it</a>.
          </P>

          <H2>2. Tipologie di dati raccolti</H2>
          <P>Il Titolare raccoglie le seguenti categorie di dati personali:</P>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>
              <strong className="text-foreground">Dati forniti volontariamente dall'utente</strong> attraverso il modulo di richiesta demo
              o tramite contatto diretto: nome, indirizzo email, nome dell'autoscuola e ruolo
              ricoperto.
            </li>
            <li>
              <strong className="text-foreground">Dati di navigazione</strong> raccolti automaticamente
              durante l'utilizzo del sito: indirizzo IP, tipo di browser, sistema operativo, pagine
              visitate, data e ora di accesso. Tali dati sono trattati tramite strumenti analitici
              indicati nella <a href="/cookie" className="text-primary hover:underline">Cookie Policy</a>.
            </li>
          </ul>

          <H2>3. Finalità del trattamento</H2>
          <P>I dati personali sono trattati per le seguenti finalità:</P>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>rispondere alle richieste di demo, informazioni o contatto inviate dall'utente;</li>
            <li>monitorare e migliorare il funzionamento e la qualità del sito;</li>
            <li>
              inviare comunicazioni informative o commerciali relative ai servizi DIN, esclusivamente
              previo consenso esplicito dell'interessato.
            </li>
          </ul>

          <H2>4. Base giuridica del trattamento</H2>
          <P>
            Il trattamento si fonda sul consenso liberamente prestato dall'interessato (art. 6,
            par. 1, lett. a GDPR) e sul legittimo interesse del Titolare (art. 6, par. 1, lett. f
            GDPR) a gestire le richieste ricevute e a garantire il corretto funzionamento del sito.
          </P>

          <H2>5. Modalità di trattamento e conservazione</H2>
          <P>
            I dati sono trattati con strumenti elettronici, adottando misure tecniche e
            organizzative adeguate a garantirne la sicurezza e la riservatezza. I dati sono
            conservati per il tempo strettamente necessario al perseguimento delle finalità per cui
            sono stati raccolti e, successivamente, cancellati o resi anonimi, salvo obblighi di
            legge che ne impongano una conservazione più estesa.
          </P>

          <H2>6. Comunicazione e trasferimento dei dati</H2>
          <P>
            I dati personali possono essere trattati da fornitori terzi, nominati Responsabili del
            trattamento ai sensi dell'art. 28 GDPR, che erogano servizi strumentali al funzionamento
            del sito e alla gestione delle richieste, quali in particolare: hosting,
            strumenti di prenotazione (es. Calendly) ed eventuali strumenti analitici{" "}
            <Ph>[elenco fornitori]</Ph>.
          </P>
          <P>
            Qualora il trattamento comporti il trasferimento di dati personali al di fuori dello
            Spazio Economico Europeo, il Titolare assicura che tale trasferimento avvenga nel
            rispetto delle garanzie adeguate previste dagli articoli 44 e seguenti del GDPR
            (es. clausole contrattuali standard approvate dalla Commissione europea).
          </P>

          <H2>7. Diritti dell'interessato</H2>
          <P>
            L'interessato può esercitare in qualsiasi momento i diritti previsti dagli articoli 15-22
            del GDPR, e in particolare:
          </P>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>diritto di accesso ai propri dati personali (art. 15);</li>
            <li>diritto di rettifica dei dati inesatti (art. 16);</li>
            <li>diritto alla cancellazione (art. 17);</li>
            <li>diritto di limitazione del trattamento (art. 18);</li>
            <li>diritto alla portabilità dei dati (art. 20);</li>
            <li>diritto di opposizione al trattamento (art. 21);</li>
            <li>diritto di revocare in ogni momento il consenso prestato;</li>
            <li>
              diritto di proporre reclamo al Garante per la protezione dei dati personali
              (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.garanteprivacy.it</a>).
            </li>
          </ul>

          <H2>8. Come esercitare i diritti</H2>
          <P>
            Per esercitare i diritti sopra elencati, l'interessato può inviare una richiesta scritta
            all'indirizzo email <Ph>[email]</Ph>, allegando copia di un documento di identità in
            corso di validità. Il Titolare fornirà riscontro entro i termini di legge.
          </P>

          <H2>9. Modifiche alla privacy policy</H2>
          <P>
            Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi
            momento, dandone comunicazione tramite pubblicazione sul sito. Si invita l'utente a
            consultare periodicamente la presente pagina.
          </P>

          <H2>10. Data di ultimo aggiornamento</H2>
          <P><Ph>[data]</Ph></P>
        </Article>
      </main>
      <SiteFooter />
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 text-xl sm:text-2xl font-extrabold text-foreground">{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-muted-foreground leading-relaxed">{children}</p>;
}
function Ph({ children }: { children: React.ReactNode }) {
  return <span className="rounded bg-accent px-1.5 py-0.5 text-sm font-mono text-primary">{children}</span>;
}
function Article({ children }: { children: React.ReactNode }) {
  return <article className="mt-4">{children}</article>;
}
