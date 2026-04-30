# Changelog

Todas as mudancas notaveis do projeto sao documentadas aqui.
Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---

## [Unreleased]

### Added
- Scaffold inicial do repo, espelhando padrao do `site-mentoring` (Vite + React + TS + Tailwind 3.4 + Framer Motion).
- `App.tsx` com landing single-page em PT-BR: Hero, How it Works (3 passos), What you see in the PDF (6 cards + mockup de metricas), Comparativo (PulseBase vs ler tudo manual), Trust (zero intrusao + dados isolados + reversivel), FAQ (6 perguntas: invasivo, LGPD, preco, tamanho do grupo, instalacao, varios grupos), Final CTA (Cal.com embed).
- Componentes UI: Button + Input (shadcn-like).
- Analytics no-op (`src/lib/analytics.ts`): GA4 + Meta Pixel via `VITE_GA4_ID` e `VITE_META_PIXEL_ID`.
- Workflow `deploy-pages.yml` com trigger `pulse-v*.*.*` -> Cloudflare Pages (project `pulsebase-landing`).
- SEO: meta tags + Open Graph + Twitter Card + Schema.org JSON-LD apontando pra `pulse.mentoringbase.com`.
- Public: `robots.txt`, `sitemap.xml`, `_redirects` (SPA fallback), `favicon.png` + `logo.png` placeholders herdados do site-mentoring (substituir pelo logo PulseBase oficial antes do v1.0.0).
- README + CLAUDE.md + este CHANGELOG.

### Pending (CEO + handoff)
- Configurar projeto `pulsebase-landing` no Cloudflare Pages (Git integration -> repo).
- Adicionar custom domain `pulse.mentoringbase.com` (DNS CNAME).
- Configurar secrets `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` no GitHub repo.
- Substituir `logo.png`/`favicon.png` placeholders pelos assets oficiais do PulseBase.
- Criar tag `pulse-v0.1.0` para disparar primeiro deploy.

### Planned — D5: Variacoes por ICP (BLOQUEADO em PB-LEADS + Stripe + post-purchase)
> Diretiva CEO via Telegram 2026-04-30 03:10 SP (Matrix task `89b9e78e`).
> Copy atual e boa pra mentoria, mas pulsebase tem ICPs mais amplos. Executar APOS finalizar PB-LEADS + Stripe checkout + post-purchase flow.

ICPs alvo (ordem de prioridade):
1. **Lancamentos** — "paga melhor" (CEO) — PRIMEIRA variante a ser feita.
2. **Comunidades**.
3. **Grupos de estudo**.

Plano de execucao:
1. Extrair sections do `App.tsx` (780 linhas, single-page) pra `components/` reusaveis: `Hero`, `HowItWorks`, `WhatYouSee`, `Comparativo`, `Trust`, `FAQ`, `FinalCTA`.
2. Criar variantes por rota (`/lancamentos`, `/comunidades`, `/estudos`) ou query string (`?icp=lancamento|comunidade|estudo`). Decisao a tomar com base em SEO vs simplicidade — provavelmente rotas dedicadas por SEO/ads.
3. Cada variante recebe: hero adaptado, dores especificas do ICP, casos de uso proprios, FAQ ajustada.
4. UTM tracking por ICP pra metricas (separar funil de cada nicho).
5. Coordenar copy de cada ICP com Melissa (Diretora) + MUSKITO (Head Mkt).

Esforco estimado: ~1d por variante. Comecar por **lancamentos**.
