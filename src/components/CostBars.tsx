import { usd } from '../lib/money'
import type { CostBar } from '../reviews/types'

type CostBarsProps = {
  bars: CostBar[]
}

const tone: Record<NonNullable<CostBar['emphasis']>, string> = {
  current: 'bg-[#c4b8a4]',
  modeled: 'bg-[#d9783a]',
  floor: 'bg-[#7dcea0]',
}

export function CostBars({ bars }: CostBarsProps) {
  const max = Math.max(...bars.map((bar) => bar.annual))

  return (
    <div className="space-y-6">
      {bars.map((bar) => {
        const width = `${Math.max(8, (bar.annual / max) * 100)}%`
        const fill = bar.emphasis ? tone[bar.emphasis] : 'bg-white/35'
        return (
          <div key={bar.id} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1">
              <div>
                <div className="font-display font-bold text-xl">{bar.label}</div>
                <div className="text-sm text-[#f4f1ea]/50">{bar.note}</div>
              </div>
              <div className="font-display font-bold text-2xl tabular-nums">{usd(bar.annual)}</div>
            </div>
            <div className="h-3 bg-white/10">
              <div className={`h-full ${fill}`} style={{ width }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
