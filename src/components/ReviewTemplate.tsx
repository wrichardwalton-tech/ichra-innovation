import { ArrowRight } from 'lucide-react'
import { usd } from '../lib/money'
import type { Review } from '../reviews/types'
import { CostBars } from './CostBars'

type ReviewTemplateProps = {
  review: Review
}

export function ReviewTemplate({ review }: ReviewTemplateProps) {
  const census = review.census.map((row) => `${row.lives} ${row.code}`).join(', ')
  const { companySpend: spend, employerContext: er } = review

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f1ea]">
      <header className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="font-display font-bold text-lg tracking-tight">
            ICHRA<span className="text-[#d9783a]">Innovation</span>
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-[#d9783a] font-bold">
            {review.kicker}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 space-y-24">
        <section className="space-y-8">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 font-bold">
            {review.effectiveDateLabel} · {review.enrolled} enrolled · {census}
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-[1.05]">
            {review.title}
          </h1>
          <p className="text-2xl md:text-3xl text-[#f4f1ea]/75 leading-snug max-w-3xl">
            {review.hero}
          </p>
          <p className="text-[#f4f1ea]/55">
            Current plan: {review.currentPlan}. {review.costBasis}
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div className="border border-white/10 bg-white/3 p-8 space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40 font-bold">
              Total plan cost
            </div>
            <div className="font-display text-4xl font-bold">{usd(spend.totalAnnual)}/yr</div>
            <div className="text-[#f4f1ea]/50">{usd(spend.totalMonthly)}/mo</div>
          </div>
          <div className="border border-white/10 bg-white/3 p-8 space-y-2">
            <div className="text-xs uppercase tracking-[0.18em] text-white/40 font-bold">
              Employer contribution
            </div>
            <div className="font-display text-4xl font-bold">{usd(spend.employerAnnual)}/yr</div>
            <div className="text-[#f4f1ea]/50">{usd(spend.employerMonthly)}/mo</div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="space-y-3">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Five views of annual company spend
            </h2>
            <p className="text-[#f4f1ea]/60 max-w-2xl">{review.modeledNote}</p>
          </div>
          <CostBars bars={review.bars} />
        </section>

        <section className="space-y-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold">The choice mechanic</h2>
          <div className="border border-[#d9783a]/40 bg-[#d9783a]/10 p-8 space-y-4">
            <div className="text-xs uppercase tracking-[0.18em] text-[#d9783a] font-bold">
              {review.foundation.headline}
            </div>
            <ul className="space-y-2 text-lg">
              {review.foundation.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="text-xl text-[#f4f1ea]/70">{review.selfSelect.headline}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 p-8 space-y-3">
              <h3 className="font-display text-2xl font-bold">
                {review.selfSelect.healthyPath.title}
              </h3>
              <p className="text-[#f4f1ea]/65 text-lg">{review.selfSelect.healthyPath.body}</p>
            </div>
            <div className="border border-white/10 p-8 space-y-3">
              <h3 className="font-display text-2xl font-bold">
                {review.selfSelect.needsPath.title}
              </h3>
              <p className="text-[#f4f1ea]/65 text-lg">{review.selfSelect.needsPath.body}</p>
            </div>
          </div>
        </section>

        <section className="border-l-4 border-[#d9783a] pl-6 md:pl-8 space-y-4">
          <h2 className="font-display text-2xl font-bold">Hard line</h2>
          <ul className="space-y-3 text-lg text-[#f4f1ea]/80">
            {review.hardLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="border border-white/10 p-8 space-y-4 text-[#f4f1ea]/60 text-sm leading-relaxed">
          <h2 className="font-display text-foreground text-lg font-bold text-[#f4f1ea]">
            Employer context
          </h2>
          <p>
            Current employer contribution {usd(er.currentEmployerAnnual)}/yr. Minimum affordable{' '}
            {usd(er.minAffordableAnnual)}/yr. Maximum exposure {usd(er.maxExposureAnnual)}/yr.
          </p>
          <p>{er.adminNote}</p>
        </section>

        <section className="space-y-8 pb-8">
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            {review.close.nextStep}
          </h2>
          <p className="text-2xl text-[#f4f1ea]/70">Ask: {review.close.ask}</p>
          <p className="text-[#f4f1ea]/50">{review.preparedFor}</p>
          <a
            href="mailto:rwalton@sedera.com?subject=Working%20session"
            className="inline-flex items-center gap-3 bg-[#d9783a] text-[#0c0c0e] font-display font-bold text-lg px-8 py-5 hover:bg-[#e08950]"
          >
            Schedule the working session <ArrowRight className="w-5 h-5" />
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-10 text-sm text-white/40 leading-relaxed">
          {review.footer}
        </div>
      </footer>
    </div>
  )
}
