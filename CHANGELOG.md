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
