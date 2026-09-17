import { ArrowUpRight, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const SIMULATOR = 'https://ichrasimulator.com/'

export function SiteHeader() {
  return (
    <header className="border-b border-border/50 bg-white/80 backdrop-blur-md sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl tracking-tight text-foreground">
          ICHRA<span className="text-primary">Innovation</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-8">
          <Link
            to="/access"
            className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            <Lock className="w-3.5 h-3.5" /> Proposal Access
          </Link>
          <a
            href={SIMULATOR}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
          >
            Cost Simulator <ArrowUpRight className="w-4 h-4" />
          </a>
        </nav>
      </div>
    </header>
  )
}
