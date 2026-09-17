import { type FormEvent, useState } from 'react'
import { Lock } from 'lucide-react'

type ReviewGateProps = {
  title: string
  kicker: string
  onUnlock: (passphrase: string) => boolean
}

export function ReviewGate({ title, kicker, onUnlock }: ReviewGateProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const ok = onUnlock(value)
    if (!ok) {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-[#f4f1ea] flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-[#d9783a] text-xs font-bold uppercase tracking-[0.2em]">
              <Lock className="w-3.5 h-3.5" />
              {kicker}
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
            <p className="text-[#f4f1ea]/60 text-lg">
              Enter the passphrase to open this confidential quote review.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="sr-only">Passphrase</span>
              <input
                type="password"
                autoComplete="off"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value)
                  if (error) setError(false)
                }}
                placeholder="Passphrase"
                className="w-full bg-white/5 border border-white/15 px-5 py-4 text-lg font-mono tracking-wider placeholder:text-white/30 focus:outline-none focus:border-[#d9783a] focus:ring-1 focus:ring-[#d9783a]"
              />
            </label>
            <button
              type="submit"
              className="w-full bg-[#d9783a] text-[#0c0c0e] font-display font-bold text-lg py-4 hover:bg-[#e08950] transition-colors"
            >
              Open Review
            </button>
            <div className="h-6">
              {error && (
                <p className="text-red-400 text-sm font-medium">
                  Incorrect passphrase — try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
      <p className="pb-8 text-center text-xs uppercase tracking-[0.2em] text-white/35">
        For internal use only.
      </p>
    </div>
  )
}
