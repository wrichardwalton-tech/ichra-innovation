import { type FormEvent, useState } from 'react'
import { Lock } from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function AccessPage() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center py-16">
        <div className="bg-charcoal text-white py-20 px-6 md:px-12 w-full shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] pointer-events-none" />
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 relative z-10">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2 text-primary font-display font-bold uppercase tracking-widest text-xs">
                <Lock className="w-4 h-4" />
                Client Portal
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold">Access your proposal</h1>
              <p className="text-white/70 text-lg max-w-lg">
                Enter your secure access code to view your custom defined-contribution strategy and
                financial modeling.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex-1 w-full max-w-lg flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row w-full gap-2">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value)
                    if (error) setError(false)
                  }}
                  placeholder="Enter access code"
                  className="flex-1 bg-white/5 border border-white/20 text-white px-6 py-4 placeholder:text-white/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-mono text-lg"
                />
                <button
                  type="submit"
                  disabled={!code.trim()}
                  className="bg-primary text-primary-foreground px-8 py-4 font-display font-bold text-lg hover:bg-primary/90 disabled:opacity-50 min-w-[140px]"
                >
                  Access
                </button>
              </div>
              <div className="h-6">
                {error && (
                  <p className="text-red-400 text-sm font-medium">Code not recognized.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
