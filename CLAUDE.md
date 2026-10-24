# DIN — Landing Page

## Cos'è questo progetto
Landing page pubblica di **DIN (Drive Instructor Network)**, il network professionale per istruttori di guida e autoscuole italiane. Il sito è in italiano.

- **Landing page:** `www.dinitalia.it` — **live su Vercel** (l'apex `dinitalia.it` fa redirect a `www`)
- **App istruttori:** `app.dinitalia.it` (progetto separato, web app installabile)
- **App autoscuole:** `autoscuola.dinitalia.it` (progetto separato)
- **Repo:** `github.com/DanieleBenzi/drivenetwork`, collegato anche all'editor Lovable

## Stack tecnico
- **Framework:** React 19 + TypeScript
- **Routing / SSR:** TanStack Router + TanStack Start (entry server `src/server.ts`)
- **Build:** Vite 8 + Nitro con `preset: "vercel"` (config via `@lovable.dev/vite-tanstack-config`, vedi commenti in `vite.config.ts` prima di aggiungere plugin)
- **Stili:** Tailwind CSS v4 + shadcn/ui (Radix primitives)
- **Analytics:** Vercel Analytics (`track(...)` sui click delle CTA)
- **Package manager:** Bun (nessun lockfile nel repo; in alternativa funziona `npm run <script>`)

## Comandi principali
```bash
bun dev          # dev server locale (http://localhost:8080)
bun run build    # build produzione
bun preview      # preview build locale
bun lint         # eslint
bun format       # prettier
```

## Struttura rilevante
```
src/
  lib/site.ts      # SITE_URL, EMAIL, FEEDBACK_MAILTO
  routes/
    index.tsx      # homepage: tutto il contenuto, FAQ e dati strutturati JSON-LD
    app.tsx        # pagina "Usa l'app" + istruzioni installazione su iPhone/Android
    chi-siamo.tsx  # pagina Chi siamo
    privacy.tsx    # informativa privacy
    cookie.tsx     # cookie policy
  components/din/
    SiteHeader.tsx   # navbar sticky, menu mobile, tasto "Invia feedback"
    SiteFooter.tsx   # footer
    DemoModal.tsx    # modale "Quale app ti serve?" → app istruttori / app autoscuole
    CookieBanner.tsx # banner consenso cookie
    SocialLinks.tsx  # link Facebook e TikTok
    DinLogo.tsx      # logo
    Mockups.tsx      # PhoneMockup e DesktopMockup (illustrazioni UI)
  components/ui/   # componenti shadcn/ui (non modificare direttamente)
public/
  llms.txt, robots.txt, sitemap.xml
```

## Costanti importanti
- `src/lib/site.ts` → `SITE_URL` (`https://www.dinitalia.it`), `EMAIL` (`info@dinitalia.it`), `FEEDBACK_MAILTO`
- `src/routes/index.tsx` → `SITE_URL` (duplicato locale), `OG_IMAGE` (immagine Open Graph su Cloudflare R2, non modificare senza caricarne una nuova)
- `src/components/din/DemoModal.tsx` → `INSTRUCTOR_URL` (`https://app.dinitalia.it/`), `SCHOOL_URL` (`https://autoscuola.dinitalia.it/`)

## Contenuto / sezioni della home
1. **Hero** — value prop principale + CTA "Accedi all'app" (apre la modale)
2. **Il Problema** — gap tra istruttori e autoscuole
3. **Come funziona** — 3 step (ID DIN → collegamento → sola lettura)
4. **Per Istruttori** — funzionalità app mobile, CTA verso `/app`
5. **Per Autoscuole** — funzionalità app desktop, CTA verso l'app autoscuole
6. **Credibilità** — GDPR, ownership dati, identità verificata
7. **Prezzi** — DIN è in **versione Beta gratuita**: entrambi i piani sono a 0€
8. **FAQ** — 7 domande frequenti (incluse nel JSON-LD `FAQPage`)
9. **CTA finale** — "Accedi all'app"

## Regole importanti — Lovable e lavoro in due
Il repo è condiviso e sincronizzato con [Lovable](https://lovable.dev): i commit fatti dall'editor Lovable arrivano su `main` da soli.
- Fare `git pull` prima di iniziare, commit piccoli e push rapido.
- **Non riscrivere la storia git pubblica**: niente `force push`, `rebase`, `amend` o `squash` su commit già pushati.

## Residui da ignorare
`public/CNAME` e `.github/workflows/deploy.yml` sono avanzi di una migrazione a GitHub Pages mai completata. Pages non è attivo: se su GitHub si vedono build rosse è quel workflow, non il deploy Vercel.

## To-do
- [ ] Footer: P.IVA ancora segnaposto (`00000000000`)
