import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

const STORAGE_KEY = "din-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  thirdParty: boolean;
  ts: number;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [thirdParty, setThirdParty] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  const save = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {
      // ignore
    }
    setVisible(false);
    setCustomize(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, thirdParty: true, ts: Date.now() });
  const rejectAll = () =>
    save({ necessary: true, analytics: false, thirdParty: false, ts: Date.now() });
  const savePrefs = () =>
    save({ necessary: true, analytics, thirdParty, ts: Date.now() });

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card shadow-card p-5 sm:p-6">
        {!customize ? (
          <>
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-base font-bold text-foreground">
                Rispettiamo la tua privacy
              </h2>
              <button
                onClick={rejectAll}
                aria-label="Chiudi e rifiuta"
                className="grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-muted transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Utilizziamo cookie tecnici necessari al funzionamento del sito e, previo tuo consenso,
              cookie analitici e di terze parti. Puoi accettare, rifiutare o personalizzare. Maggiori
              informazioni nella nostra{" "}
              <Link to="/cookie" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition"
              >
                Accetta tutti
              </button>
              <button
                onClick={rejectAll}
                className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-alt transition"
              >
                Rifiuta
              </button>
              <button
                onClick={() => setCustomize(true)}
                className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-alt transition"
              >
                Personalizza
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-base font-bold text-foreground">Preferenze cookie</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Scegli quali categorie di cookie autorizzare. I cookie tecnici sono sempre attivi.
            </p>
            <div className="mt-4 space-y-3">
              <label className="flex items-start gap-3 rounded-lg border border-border bg-background p-3">
                <input type="checkbox" checked disabled className="mt-1" />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Necessari</span>
                  <span className="block text-xs text-muted-foreground">
                    Indispensabili al funzionamento del sito. Sempre attivi.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-border bg-background p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Analitici</span>
                  <span className="block text-xs text-muted-foreground">
                    Statistiche aggregate sull'uso del sito.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3 rounded-lg border border-border bg-background p-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={thirdParty}
                  onChange={(e) => setThirdParty(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-semibold text-foreground">Terze parti</span>
                  <span className="block text-xs text-muted-foreground">
                    Strumenti esterni come la prenotazione demo (Calendly).
                  </span>
                </span>
              </label>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <button
                onClick={savePrefs}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition"
              >
                Salva preferenze
              </button>
              <button
                onClick={() => setCustomize(false)}
                className="inline-flex items-center rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-alt transition"
              >
                Indietro
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
