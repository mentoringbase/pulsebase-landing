# PulseBase Landing

> "Visibilidade total do seu grupo de mentoria — sem ler uma mensagem sequer."

Landing page de marketing do **PulseBase**, produto irmao do MentoringBase.
PulseBase e um bot que entra no grupo de WhatsApp do mentor, observa silenciosamente,
e entrega resumos inteligentes via PDF (Health Score, ghosts, temas, sentimento).

**Producao:** https://pulse.mentoringbase.com (apos configurar custom domain no Cloudflare Pages)
**Repo gateway/PDF:** https://github.com/mentoringbase/pulsebase (este repo so cuida da landing)
**Repo familia:** https://github.com/mentoringbase/site-mentoring (mesmo stack, mesmo padrao)

---

## Stack

- React 18 + Vite 5 + TypeScript 5
- Tailwind CSS 3.4 (cores brand verde-musgo `#3D6B42` compartilhadas com site-mentoring)
- Framer Motion (animacoes)
- Lucide React (icones)
- React Router DOM (caso adicione paginas legais futuramente)
- @calcom/embed-react (agendamento de demo)

## Scripts

```bash
npm install
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve dist/ localmente
npm run lint      # eslint
```

## Estrutura

```
pulsebase-landing/
├── index.html                 # Entrypoint + SEO meta + JSON-LD
├── public/
│   ├── _redirects             # SPA fallback CF Pages
│   ├── favicon.png
│   ├── logo.png               # placeholder (substituir pelo logo PulseBase oficial)
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.tsx                # Landing inteira (single-page)
│   ├── main.tsx               # Entry React
│   ├── index.css              # Tailwind + base styles
│   ├── components/ui/         # Button + Input (shadcn-like)
│   └── lib/
│       ├── analytics.ts       # GA4 + Meta Pixel (no-op se env nao definido)
│       └── utils.ts           # cn() helper
├── .github/workflows/
│   └── deploy-pages.yml       # Deploy via tag pulse-v*.*.*
└── tailwind.config.ts         # Brand colors compartilhadas
```

## Deploy

Tag-based deploy via GitHub Actions -> Cloudflare Pages.

```bash
# 1. Garantir que secrets do GitHub estao configurados:
#    CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID

# 2. Commitar mudancas no main
git add -A
git commit -m "feat: ..."
git push origin main

# 3. Criar tag pra deploy
git tag pulse-v0.1.0
git push origin pulse-v0.1.0

# 4. Action builda e publica em pulsebase-landing.pages.dev
#    Apos configurar custom domain: pulse.mentoringbase.com
```

## Variaveis de ambiente

Crie `.env` local com (todas opcionais):

```
VITE_GA4_ID=G-XXXXXXXXXX
VITE_META_PIXEL_ID=000000000000000
```

Sem essas vars, analytics nao roda (no-op).

## Convencao de versionamento

```
MESMO DIA    -> patch++:  pulse-v0.1.0 -> pulse-v0.1.1
NOVO DIA     -> minor++:  pulse-v0.1.x -> pulse-v0.2.0
ARQUITETURAL -> major++:  pulse-v0.x.y -> pulse-v1.0.0
```

NUNCA criar tag sem o CEO autorizar (mesma regra do MARCOS / site-mentoring).

## Quality Gates antes de tag

1. `npm run build` zero erros (TypeScript + Vite)
2. `npm run lint` sem warnings novos
3. PT-BR nativo em todo copy visivel
4. Mobile (375px) funciona
5. Cal.com embed abre corretamente

---

**Dono:** MARCOS (Head Tech MentoringBase)
**PO:** MELISSA (Diretora MentoringBase)
**Cluster:** Cloudflare Pages (mesma conta do site-mentoring)
