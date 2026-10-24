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
  llms.txt, robots.txt, sitemap.xml   # file SEO statici, aggiornati a mano
  din-logo.png                        # logo usato anche nello schema Organization
```

## Costanti importanti
- `src/lib/site.ts` → `SITE_URL` (`https://www.dinitalia.it`), `EMAIL` (`info@dinitalia.it`), `FEEDBACK_MAILTO`
- `src/routes/index.tsx` → `SITE_URL` (duplicato locale), `OG_IMAGE` (immagine Open Graph su Cloudflare R2, non modificare senza caricarne una nuova)
- `src/components/din/DemoModal.tsx` → `INSTRUCTOR_URL` (`https://app.dinitalia.it/`), `SCHOOL_URL` (`https://autoscuola.dinitalia.it/`)

## SEO — regole da seguire
- Canonical, `og:url` e URL nei JSON-LD si costruiscono sempre da `SITE_URL` (es. `SITE_URL + "/privacy"`), mai con un dominio scritto a mano.
- `src/routes/__root.tsx` contiene lo schema `Organization` (url + logo) comune a tutte le pagine.
- **Nuova pagina** → aggiungerla anche a `public/sitemap.xml` e `public/llms.txt`.
- **Cambio di prezzi o piani** → aggiornare insieme: sezione Prezzi, FAQ "Quanto costa DIN?", `offers` nel JSON-LD di `index.tsx` e `public/llms.txt`.

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
- Fare `git pull` prima di iniziare e fare commit piccoli.
- **Push solo su richiesta esplicita**: Claude fa commit, non push. Nota: i commit locali possono finire su GitHub anche senza un push manuale (sync automatico dall'editor), quindi un commit va considerato già pubblico.
- **Non riscrivere la storia git pubblica**: niente `force push`, `rebase`, `amend` o `squash` su commit già pushati.

## Residui da ignorare
`public/CNAME` e `.github/workflows/deploy.yml` sono avanzi di una migrazione a GitHub Pages mai completata. Pages non è attivo: se su GitHub si vedono build rosse è quel workflow, non il deploy Vercel.

## Verifica prima del commit
- `npx tsc --noEmit -p .` deve passare.
- `bun lint` riporta già centinaia di errori **solo Prettier** preesistenti: controllare che non compaiano errori di altre regole.
- Con il dev server acceso, controllare le pagine toccate (canonical, `og:url`, testi).

## To-do
- [ ] Footer: P.IVA ancora segnaposto (`00000000000`)
