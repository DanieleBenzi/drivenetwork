# DIN — Landing Page

## Cos'è questo progetto
Landing page pubblica di **DIN (Drive Instructor Network)**, il network professionale per istruttori di guida e autoscuole italiane. Il sito è in italiano.

- **Landing page:** `www.dinitalia.it` (dominio acquisito, da configurare in produzione)
- **App:** `app.dinitalia.it` (già in produzione, progetto separato)
- **Demo:** prenotazione via Calendly (`https://calendly.com/din-demo`)

## Stack tecnico
- **Framework:** React 19 + TypeScript
- **Routing / SSR:** TanStack Router + TanStack Start
- **Build:** Vite 8 + Nitro (target Cloudflare)
- **Stili:** Tailwind CSS v4 + shadcn/ui (Radix primitives)
- **Package manager:** Bun
- **Hosting attuale:** Lovable (`https://drivenetwork.lovable.app`)

## Comandi principali
```bash
bun dev          # dev server locale
bun build        # build produzione
bun preview      # preview build locale
bun lint         # eslint
bun format       # prettier
```

## Struttura rilevante
```
src/
  routes/
    index.tsx      # homepage (unica pagina con contenuto)
    privacy.tsx    # informativa privacy
    cookie.tsx     # cookie policy
  components/din/
    SiteHeader.tsx # navbar sticky con menu mobile
    SiteFooter.tsx # footer
    DemoModal.tsx  # modale selezione profilo → Calendly
    DinLogo.tsx    # logo SVG
    Mockups.tsx    # PhoneMockup e DesktopMockup (illustrazioni UI)
  components/ui/   # componenti shadcn/ui (non modificare direttamente)
```

## Costanti importanti
In [src/routes/index.tsx](src/routes/index.tsx):
- `SITE_URL` — attualmente `https://drivenetwork.lovable.app` → **aggiornare a `https://www.dinitalia.it`** prima del go-live
- `OG_IMAGE` — immagine Open Graph su Cloudflare R2 (non modificare senza caricare una nuova)

In [src/components/din/DemoModal.tsx](src/components/din/DemoModal.tsx):
- `INSTRUCTOR_URL` — Calendly per istruttori
- `SCHOOL_URL` — Calendly per autoscuole

## Contenuto / sezioni della landing
1. **Hero** — value prop principale + CTA demo
2. **Il Problema** — gap tra istruttori e autoscuole
3. **Come funziona** — 3 step (ID DIN → collegamento → sola lettura)
4. **Per Istruttori** — funzionalità app mobile
5. **Per Autoscuole** — funzionalità app desktop
6. **Credibilità** — GDPR, ownership dati, identità verificata
7. **Prezzi** — Istruttori da 9,90€/mese · Autoscuole da 99€/mese
8. **FAQ** — 7 domande frequenti
9. **CTA finale** — prenota demo

## Regole importanti — Lovable
Questo repo è collegato a [Lovable](https://lovable.dev). **Non riscrivere la storia git pubblica**: niente `force push`, `rebase`, `amend` o `squash` su commit già pushati. Ogni commit pushato si sincronizza nell'editor Lovable.

## To-do prima del go-live su www.dinitalia.it
- [ ] Aggiornare `SITE_URL` in `src/routes/index.tsx` a `https://www.dinitalia.it`
- [ ] Aggiornare il tag canonical e gli og:url di conseguenza
- [ ] Configurare il DNS del dominio per puntare all'hosting scelto
- [ ] Verificare che il deploy target Nitro/Cloudflare sia configurato correttamente
