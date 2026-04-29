import { useState, useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { motion } from 'framer-motion'
import {
  Activity,
  Users,
  Ghost,
  MessageSquare,
  Heart,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Eye,
  EyeOff,
  FileText,
  Shield,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

// PulseBase landing — adapt do /home/agent/workspace/pulsebase/web/src/app/page.tsx
// Visual: dark theme + brand verde musgo (#3D6B42), mesmo do site-mentoring.
// Tese: visibilidade total do grupo de mentoria sem ler uma mensagem.

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        className="w-full py-6 flex items-center justify-between text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white pr-8">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="pb-6"
        >
          <p className="text-muted leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

function App() {
  // Cal.com inicializa via getCalApi (Promise — nunca falha com "not defined")
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: 'demo' })
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#3D6B42' } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  const howSteps = [
    {
      step: '1',
      icon: Users,
      title: 'Bot entra no grupo',
      desc: 'Voce adiciona o numero do PulseBase como membro comum do grupo. Em segundos, ele mapeia todos os participantes e comeca a observar.',
    },
    {
      step: '2',
      icon: EyeOff,
      title: 'Observa silenciosamente',
      desc: 'O bot nunca envia mensagem no grupo. Nunca interage com seus membros. Apenas escuta — texto, audio (transcrito), reacoes — e organiza tudo.',
    },
    {
      step: '3',
      icon: FileText,
      title: 'PDF na sua DM toda manha',
      desc: 'As 7h, um PDF chega no seu WhatsApp. Voce abre, le em 30 segundos, e sabe tudo que aconteceu no grupo no dia anterior.',
    },
  ]

  const pdfItems = [
    {
      icon: Activity,
      title: 'Health Score do grupo',
      desc: 'Um numero de 0 a 100 que resume como o grupo esta. Subindo? Caindo? Voce ve a tendencia em segundos.',
    },
    {
      icon: Users,
      title: 'Ranking de engajamento',
      desc: 'Top 10 mais ativos. Quem puxa a conversa, quem participa, quem so observa. Conheca seus embaixadores.',
    },
    {
      icon: Ghost,
      title: 'Ghosts (quem sumiu)',
      desc: 'Lista de inativos ha 7, 14 e 30 dias. Pronta pra mandar aquela mensagem de reativacao antes de virar churn.',
    },
    {
      icon: MessageSquare,
      title: 'Temas dominantes',
      desc: 'O que o grupo mais discutiu? IA agrupa as conversas em temas e mostra o que esta na mente da galera.',
    },
    {
      icon: Heart,
      title: 'Sentimento geral',
      desc: 'O grupo esta animado, frustrado, curioso? Sentiment analysis automatico — saiba o clima sem ler nada.',
    },
    {
      icon: AlertTriangle,
      title: 'Pontos de atencao',
      desc: 'Conflitos, duvidas recorrentes, oportunidades de conteudo. A IA destaca o que merece sua acao agora.',
    },
  ]

  const comparisonRows = [
    {
      task: 'Saber o que aconteceu no grupo ontem',
      manual: 'Ler 200+ mensagens (30-60 min)',
      pulse: 'Abrir PDF (30 segundos)',
    },
    {
      task: 'Identificar quem sumiu',
      manual: 'Quase impossivel — voce esquece',
      pulse: 'Lista pronta no PDF',
    },
    {
      task: 'Entender o clima do grupo',
      manual: 'Sensacao subjetiva',
      pulse: 'Sentiment + health score objetivos',
    },
    {
      task: 'Mapear temas que engajam',
      manual: 'Achismo — voce lembra do que viu',
      pulse: 'Temas dominantes destacados pela IA',
    },
    {
      task: 'Manter consistencia',
      manual: 'Cai quando a semana aperta',
      pulse: 'Chega no WhatsApp todo dia as 7h',
    },
  ]

  const faqs = [
    {
      question: 'O bot e invasivo? Ele responde no grupo?',
      answer:
        'Nao. O PulseBase e silencioso por design — ele nunca envia mensagem dentro do grupo, nunca interage com seus membros, nunca aparece. Ele apenas le as mensagens publicas do grupo (igual qualquer membro le) e gera o resumo. Voce pode revogar o acesso a qualquer momento removendo o bot do grupo.',
    },
    {
      question: 'E a LGPD? Como voces tratam os dados?',
      answer:
        'Os dados ficam isolados por grupo (multi-tenant). So voce, como mentor admin, recebe os PDFs. Nao compartilhamos, nao revendemos, nao usamos pra treinar IA externa. Voce pode pedir delecao completa a qualquer momento. Recomendamos informar seus mentorados que o grupo e monitorado para fins de gestao — boa pratica e exigencia da LGPD.',
    },
    {
      question: 'Quanto custa?',
      answer:
        'O PulseBase esta em fase beta com mentores selecionados. O preco-alvo e simples: assinatura mensal por grupo monitorado, com periodo de teste gratuito. Agende uma demo de 15 minutos pra entender se faz sentido pro seu caso — e qual o valor pro seu cenario.',
    },
    {
      question: 'Funciona em grupos de quantos membros?',
      answer:
        'De 10 a 1.000+ membros. Quanto maior o grupo, mais valor o PulseBase entrega — porque ler manualmente vira impossivel. Grupos de 50 a 300 membros sao o sweet spot: volume suficiente pra gerar ghosts e temas relevantes, sem complexidade extra.',
    },
    {
      question: 'Preciso instalar alguma coisa? Configurar tecnico?',
      answer:
        'Nao. Voce so adiciona o numero do bot no grupo (igual adiciona qualquer membro novo). Em menos de 5 minutos esta funcionando. Sem app, sem integracao, sem TI envolvida.',
    },
    {
      question: 'E se eu tiver varios grupos?',
      answer:
        'Sem problema — adiciona o bot em quantos grupos quiser. Cada grupo gera seu PDF proprio, com branding configuravel (logo, cor, nome). Ideal pra mentores com programas multiplos ou turmas paralelas.',
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold text-white">PulseBase</span>
          </div>
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#como-funciona"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#pdf"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              O que voce ve
            </a>
            <a
              href="#comparativo"
              className="text-sm text-muted hover:text-white transition-colors"
            >
              Comparativo
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-white transition-colors">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button size="sm" asChild>
              <a href="#demo">Agendar demo</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/20 via-transparent to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <motion.div className="max-w-3xl" initial="initial" animate="animate" variants={stagger}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6"
              variants={fadeInUp}
            >
              <Sparkles className="h-4 w-4 text-brand" />
              <span className="text-sm text-brand font-medium">
                Powered by MentoringBase
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              variants={fadeInUp}
            >
              Visibilidade total do seu grupo de mentoria{' '}
              <span className="text-gradient">sem ler uma mensagem sequer.</span>
            </motion.h1>

            <motion.p className="text-xl text-muted mb-4 max-w-2xl" variants={fadeInUp}>
              O <strong className="text-white">PulseBase</strong> entra no seu grupo de WhatsApp,
              observa silenciosamente, e toda manha entrega um PDF com tudo que voce precisa saber:
              quem participou, quem sumiu, o que rolou, e o que fazer.
            </motion.p>

            <motion.p className="text-lg text-white/80 mb-8" variants={fadeInUp}>
              <span className="text-brand font-semibold">
                Voce acorda. Abre o PDF. Sabe tudo em 30 segundos.
              </span>
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" variants={fadeInUp}>
              <Button size="lg" asChild>
                <a href="#demo">
                  Agendar demo de 15 min
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6 text-sm text-muted"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Setup em 5 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Bot 100% silencioso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Revogavel a qualquer momento</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como funciona — em 3 passos
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Voce nao instala nada. Nao configura tecnico. Em menos de 5 minutos esta rodando.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {howSteps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  className="glass rounded-2xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-full bg-brand text-white flex items-center justify-center font-bold text-lg shrink-0">
                      {step.step}
                    </div>
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What you see in the PDF */}
      <section id="pdf" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <FileText className="h-4 w-4 text-brand" />
              <span className="text-sm text-brand font-medium">O PDF que chega na sua DM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Tudo que importa do seu grupo, em uma pagina
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Nada de dashboard pra ficar abrindo. PDF chega no WhatsApp, voce abre no celular,
              entende em 30 segundos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pdfItems.map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="bg-surface border border-border rounded-2xl p-6 hover:border-brand/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="h-12 w-12 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Mockup do PDF — preview de metricas */}
          <motion.div
            className="mt-16 max-w-3xl mx-auto glass rounded-2xl p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-brand font-bold uppercase tracking-wider">
                  Resumo do dia · 28/04/2026
                </p>
                <p className="text-white font-semibold mt-1">Mentoria Coach Ana — Turma 14</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-extrabold text-white">87</p>
                <p className="text-xs text-muted">Health Score</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-surface-light rounded-xl p-4">
                <p className="text-2xl font-extrabold text-white">147</p>
                <p className="text-xs text-muted mt-1">Mensagens</p>
                <p className="text-xs text-brand mt-0.5">+23 vs ontem</p>
              </div>
              <div className="bg-surface-light rounded-xl p-4">
                <p className="text-2xl font-extrabold text-white">
                  24<span className="text-base text-muted">/38</span>
                </p>
                <p className="text-xs text-muted mt-1">Ativos</p>
                <p className="text-xs text-brand mt-0.5">63% participacao</p>
              </div>
              <div className="bg-surface-light rounded-xl p-4">
                <p className="text-2xl font-extrabold text-white">8</p>
                <p className="text-xs text-muted mt-1">Ghosts (7d+)</p>
                <p className="text-xs text-yellow-400 mt-0.5">Lista no PDF</p>
              </div>
            </div>

            <div className="bg-surface-light rounded-xl p-4">
              <p className="text-xs text-brand font-bold uppercase tracking-wider mb-2">
                Resumo da IA
              </p>
              <ul className="space-y-1.5 text-sm text-muted">
                <li>▸ Tema dominante: preparacao pra masterclass de quinta-feira.</li>
                <li>▸ Ana compartilhou framework de prospeccao — 31 respostas.</li>
                <li>▸ 3 novos membros essa semana. 8 inativos ha mais de 7 dias.</li>
                <li>▸ Sentimento: animado · Pico de atividade: 20h-22h.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparativo" className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ler tudo manualmente <span className="text-muted">vs.</span>{' '}
              <span className="text-gradient">PulseBase</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A pergunta nao e "vale a pena automatizar?". E "quanto tempo voce ja perdeu?".
            </p>
          </motion.div>

          <motion.div
            className="overflow-x-auto rounded-2xl border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-black/40">
                  <th className="text-left p-5 text-sm font-semibold text-muted uppercase tracking-wider">
                    Tarefa
                  </th>
                  <th className="text-left p-5 text-sm font-semibold text-muted uppercase tracking-wider">
                    <span className="inline-flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      Lendo tudo
                    </span>
                  </th>
                  <th className="text-left p-5 text-sm font-semibold text-brand uppercase tracking-wider">
                    <span className="inline-flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      Com PulseBase
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, idx) => (
                  <tr
                    key={row.task}
                    className={idx % 2 === 0 ? 'bg-black/20' : 'bg-transparent'}
                  >
                    <td className="p-5 text-white font-medium">{row.task}</td>
                    <td className="p-5 text-muted">{row.manual}</td>
                    <td className="p-5 text-white">
                      <span className="inline-flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                        {row.pulse}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted">
              <Clock className="inline h-4 w-4 mr-1 text-brand" />
              Mentor que abandona o grupo perde retencao. Mentor que ve o grupo todo dia, renova.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust / Privacy */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <EyeOff className="h-7 w-7 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Zero intrusao</h3>
              <p className="text-muted text-sm">
                Bot nunca envia mensagem no grupo. Nunca interage. So escuta e te avisa por DM.
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Dados isolados</h3>
              <p className="text-muted text-sm">
                Multi-tenant por grupo. Nao revendemos, nao treinamos IA externa com seus dados.
              </p>
            </div>
            <div className="text-center">
              <div className="h-14 w-14 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <ChevronRight className="h-7 w-7 text-brand" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Reversivel</h3>
              <p className="text-muted text-sm">
                Quer parar? Remove o bot do grupo. Pede delecao dos dados. Em segundos.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Perguntas frequentes</h2>
            <p className="text-muted text-lg">As duvidas mais comuns dos mentores que avaliam o PulseBase.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-muted mb-4">Ainda tem duvidas?</p>
            <Button variant="outline" asChild>
              <a href="#demo">Fale com a gente</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="demo" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 mb-6">
              <Sparkles className="h-4 w-4 text-brand" />
              <span className="text-sm text-brand font-medium">Demo de 15 minutos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pronto pra ver o que acontece no seu grupo?
            </h2>
            <p className="text-muted text-lg mb-8">
              Configure em 5 minutos. Primeiro PDF amanha as 7h. Sem compromisso, sem cartao.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                data-cal-namespace="demo"
                data-cal-link="mentoringbase/demo"
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-lg bg-brand text-white text-base font-medium hover:bg-brand-light transition-colors"
              >
                Agendar demo agora
                <ArrowRight className="h-5 w-5" />
              </button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://cal.com/mentoringbase/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir agenda em nova aba
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>15 minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand" />
                <span>Demo ao vivo do PDF</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-brand to-accent flex items-center justify-center">
                  <Activity className="h-5 w-5 text-white" />
                </div>
                <span className="font-semibold text-white">PulseBase</span>
              </div>
              <p className="text-sm text-muted">
                Visibilidade total do seu grupo de mentoria — sem ler uma mensagem sequer.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a href="#como-funciona" className="hover:text-white transition-colors">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#pdf" className="hover:text-white transition-colors">
                    O que voce ve
                  </a>
                </li>
                <li>
                  <a href="#comparativo" className="hover:text-white transition-colors">
                    Comparativo
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Familia MentoringBase</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a
                    href="https://mentoringbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    MentoringBase (MRM)
                  </a>
                </li>
                <li>
                  <a
                    href="https://app.mentoringbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Plataforma (login)
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <a
                    href="mailto:suporte@mentoringbase.com"
                    className="hover:text-white transition-colors"
                  >
                    suporte@mentoringbase.com
                  </a>
                </li>
                <li>
                  <a href="#demo" className="hover:text-white transition-colors">
                    Agendar demo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} PulseBase · Powered by MentoringBase. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <a
                href="https://mentoringbase.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                MentoringBase
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
