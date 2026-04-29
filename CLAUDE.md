# PULSEBASE-LANDING — Landing Marketing PulseBase

> "Visibilidade total do seu grupo de mentoria — sem ler uma mensagem sequer."

**Repo:** github.com/mentoringbase/pulsebase-landing
**Stack:** React 18 + Vite + TypeScript + Tailwind CSS 3.4 + Framer Motion
**Deploy:** Cloudflare Pages via tag `pulse-v*.*.*`
**Producao:** https://pulse.mentoringbase.com
**Reports to:** MARCOS (Head Tech) + MELISSA (Diretora)

---

## MEU PAPEL

Sou o repo da landing page do PulseBase. Minha postura:

- **Visao de melhoria continua** — cada commit deve mover a agulha (leads, demos agendadas)
- **Orientado a conversao** — toda mudanca tem que justificar impacto
- **Mobile-first** — 375px e a verdade
- **PT-BR nativo** — zero ingles visivel

## CONTEXTO

PulseBase e o segundo produto da familia MentoringBase. Enquanto o app principal (MRM) cobre o
relacionamento mentor-mentorado, o PulseBase cobre o **grupo** de mentoria — geralmente um grupo
de WhatsApp onde a mentoria acontece de forma continua.

Tese (1 frase): mentor nao precisa mais ler mensagem por mensagem. Bot observa, IA resume, PDF
chega na DM toda manha.

ICP: mentores com grupos de 50-300 membros, que perderam controle do que rola la dentro.

## TECH STACK

- React 18.3.1
- Vite 5.4.19
- TypeScript 5.8.3 (strict, zero any)
- Tailwind CSS 3.4.17 (brand colors compartilhadas com site-mentoring)
- Framer Motion (motion + viewport)
- Lucide React (icones)
- React Router DOM (preparado pra paginas legais futuras)
- @calcom/embed-react (modal de agendamento)

## VISUAL

- Tema: dark (bg-black, text-white)
- Brand: verde musgo `#3D6B42` (mesma cor do site-mentoring — familia visual)
- Accent: turquesa `#24D8B4`
- Cards: `glass` (bg-white/5 + backdrop-blur-lg)
- Tipografia: Inter (Google Fonts)

NAO introduzir nova paleta — manter consistencia com o site-mentoring.

## ESTRUTURA

```
src/
├── App.tsx              <- Landing inteira (Hero, How, PDF, Comparativo, Trust, FAQ, CTA, Footer)
├── components/ui/       <- Button + Input (shadcn-like)
├── lib/
│   ├── analytics.ts     <- GA4 + Meta Pixel (no-op sem env)
│   └── utils.ts
├── main.tsx             <- Entry com BrowserRouter
└── index.css            <- Tailwind + glass + text-gradient
public/                  <- favicon, logo, robots, sitemap, _redirects
```

## DEPLOY

```bash
# 1. Build local pra validar
npm run build

# 2. Push commit
git push origin main

# 3. Tag pra disparar deploy automatico
git tag pulse-v0.1.0
git push origin pulse-v0.1.0
# -> Cloudflare Pages deploya automaticamente em pulsebase-landing.pages.dev
# -> Apos custom domain: https://pulse.mentoringbase.com
```

Secrets necessarios no repo:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## VALORES

1. CONVERSAO PRIMEIRO — cada elemento ajuda a marcar demo
2. MOBILE-FIRST — 375px funciona ou nada funciona
3. PT-BR NATIVO — zero ingles pro usuario final
4. PERFORMANCE — Core Web Vitals verdes
5. FAMILIA VISUAL — mesma paleta do MentoringBase
6. PRODUCTION MINDSET — todo commit pode ir pra prod

## REGRAS INVIOLAVEIS

1. NUNCA criar tag sem CEO autorizar
2. NUNCA commitar com TypeScript errors
3. NUNCA hardcode secrets (usar VITE_* env)
4. NUNCA ingles visivel pro usuario final
5. SEMPRE validar `npm run build` antes de tag
6. SEMPRE registrar mudancas relevantes no CHANGELOG.md

## METRICAS TARGET

| Metrica | Target |
|---------|--------|
| Lighthouse Performance | > 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| Mobile funciona | 100% |
| Demo booking rate | > 3% (visitante -> demo agendada) |

---

**Last Updated:** 2026-04-29
**Owner:** MARCOS
**Sister repo:** site-mentoring (mesmo padrao, ja em prod)
