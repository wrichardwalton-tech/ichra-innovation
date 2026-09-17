import {
  AlertTriangle,
  ArrowRight,
  Car,
  CircleCheck,
  ShieldCheck,
  Wallet,
  Zap,
} from 'lucide-react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const SIMULATOR = 'https://ichrasimulator.com/'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const oldWay = [
  '1-3 rigid plan options for the entire company',
  'Single carrier dictating network and terms',
  'Employer bears full fiduciary and cost risk',
  'Unpredictable annual renewals and premium spikes',
]

const newWay = [
  'Dozens of carriers competing for employees',
  '30-50+ plan options per market for true personalization',
  'Employer cost is 100% predictable and capped',
  'Full employee choice and portable benefits',
]

const steps = [
  {
    step: '01',
    title: 'Define the Budget',
    desc: 'Employer sets and funds a fixed monthly allowance, varying by employee tier (e.g., family size, age, role). Cost is instantly predictable.',
  },
  {
    step: '02',
    title: 'Admin & Compliance',
    desc: 'A specialized ICHRA administrator handles all compliance and manages the tax treatment of every dollar.',
  },
  {
    step: '03',
    title: 'Employee Choice',
    desc: 'Employees shop the individual market using their allowance — PPO, HMO, HSA-eligible — or waive the ICHRA entirely and put those dollars toward Direct Primary Care and medical cost sharing instead.',
  },
]

const hardLines = [
  'Medical cost sharing is not insurance.',
  'ICHRA dollars do not buy a share.',
  'After a waiver, the share is post-tax.',
  'One enrollment.',
]

export function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteHeader />
      <main>
        <section className="pt-24 pb-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/20 bg-peach text-primary text-sm font-bold uppercase tracking-widest mb-4">
                <Zap className="w-4 h-4 fill-primary" /> A First-Principles Redesign
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-[6rem] font-display font-bold tracking-tight leading-[1.05] animate-slide-up-delay-1">
              The{' '}
              <span className="italic font-display font-medium text-muted-foreground">
                pension-to-401(k)
              </span>{' '}
              moment for health benefits.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up-delay-2">
              Stop optimizing a broken group insurance model. Move to a defined-contribution
              strategy using ICHRA and eliminate hidden risk forever.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
              <a
                href={SIMULATOR}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground font-display font-bold text-lg px-8 py-5 flex items-center gap-2 hover:bg-primary/90 transition-transform hover:-translate-y-1 w-full sm:w-auto justify-center shadow-xl shadow-primary/20"
              >
                Model Your Spend <ArrowRight className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => scrollTo('thesis')}
                className="bg-white border border-foreground/20 text-foreground font-display font-bold text-lg px-8 py-5 flex items-center gap-2 hover:bg-foreground/5 transition-colors w-full sm:w-auto justify-center"
              >
                Read the Thesis
              </button>
            </div>
          </div>
        </section>

        <section id="thesis" className="py-32 px-6 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Optimization has its limits.
              </h2>
              <div className="h-1.5 w-24 bg-primary" />
            </div>
            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                Even a perfectly optimized traditional group plan carries hidden risk. One
                high-cost claimant can undo years of favorable rates with a laser or a stop-loss
                exclusion.
              </p>
              <p className="font-medium text-foreground text-2xl border-l-4 border-primary pl-6">
                The risk was always latent. You were just paying to defer it.
              </p>
              <p>
                HR and finance leaders have spent decades tweaking a fundamentally flawed model.
                It&apos;s time to stop optimizing and start redesigning.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <div className="text-primary font-bold uppercase tracking-widest text-xs">
                Picture It This Way
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                A car for every employee.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                That&apos;s what a traditional group plan actually is — and you signed up to cover
                every repair bill.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="border border-border bg-card p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-300" />
                <div className="space-y-2">
                  <div className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Car className="w-4 h-4" /> Buy Everyone a Car
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold">The Group Plan</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You pick one make and model for the whole company, hand over the keys, and
                  promise to cover every repair — for as long as they work for you. A single blown
                  transmission and the bill lands squarely on your desk.
                </p>
              </div>
              <div className="border-2 border-primary bg-peach p-8 md:p-12 space-y-8 relative overflow-hidden shadow-2xl shadow-primary/10">
                <div className="space-y-2">
                  <div className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <Wallet className="w-4 h-4" /> Give a Monthly Allowance
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold">The ICHRA Model</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  You hand each employee a fixed monthly car allowance instead. They choose the
                  car that fits their life, and they own the maintenance. Your cost is set the day
                  you write the check — and it never moves again.
                </p>
              </div>
            </div>
            <p className="text-center text-2xl md:text-3xl font-display font-bold max-w-3xl mx-auto">
              You&apos;re not in the business of fixing cars. Stop underwriting one for every
              employee you hire.
            </p>
          </div>
        </section>

        <section className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                A Structural Shift
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Moving from a defined benefit to a defined contribution model.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="border border-border bg-card p-8 md:p-12 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-rose-300" />
                <div className="space-y-2">
                  <div className="text-[#e24b3b] font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> The Old Way
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold">
                    Traditional Group Plans
                  </h3>
                </div>
                <ul className="space-y-6">
                  {oldWay.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-muted-foreground text-lg">
                      <div className="mt-1 min-w-[24px] text-rose-400 font-bold">✕</div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-2 border-primary bg-peach p-8 md:p-12 space-y-8 relative overflow-hidden shadow-2xl shadow-primary/10">
                <div className="space-y-2">
                  <div className="text-primary font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> The New Way
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-display font-bold">ICHRA + Individual</h3>
                </div>
                <ul className="space-y-6">
                  {newWay.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-muted-foreground text-lg">
                      <CircleCheck className="mt-1 min-w-[24px] w-6 h-6 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto space-y-20">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                How ICHRA Works in Practice
              </h2>
              <p className="text-xl md:text-2xl text-white/70">
                A streamlined, compliant architecture that removes the administrative burden from
                HR while empowering the employee.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((item) => (
                <div key={item.step} className="bg-white/5 border border-white/10 p-10 space-y-6">
                  <div className="text-6xl font-display font-bold text-primary">{item.step}</div>
                  <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-background">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="max-w-3xl space-y-6">
              <div className="text-primary font-bold uppercase tracking-widest text-xs">
                Strategic Allocation
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
                The right tool for the right risk.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Predictable, known costs run a fraction of the price of large, unexpected ones.
                Separate the two, and each can be handled by the tool actually built for it.
              </p>
            </div>

            <div className="border-2 border-primary bg-peach p-8 md:p-12 space-y-6 relative overflow-hidden shadow-2xl shadow-primary/10">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">
                Foundation — Every Employee
              </span>
              <h3 className="text-3xl font-display font-bold">Direct Primary Care + Rx Card</h3>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl">
                Handles everyday medical needs for nearly everyone at a low, fixed cost. Infinite
                access to a doctor, wholesale labs, and cheap prescriptions without touching an
                insurance claim.
              </p>
              <div className="flex items-baseline gap-3 pt-2 border-t border-primary/20 max-w-3xl">
                <span className="text-4xl font-display font-bold text-primary shrink-0">3%</span>
                <p className="text-muted-foreground text-base leading-snug pt-2">
                  of total healthcare spend is all the bottom 50% of claimants generate — per MEPS
                  data, that&apos;s about <strong className="text-foreground">$433 a year</strong>.
                  Insurance was never the right tool for this half of the risk pool.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs whitespace-nowrap">
                Then, For Large & Unexpected Events
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              <div className="border border-border bg-card p-8 md:p-10 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">
                  Best for Generally Healthy Employees
                </span>
                <h3 className="text-2xl font-display font-bold">Medical Cost Sharing</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Employees confident in their health can share large, unexpected medical costs
                  with the community — highly cost-effective and free of network restrictions.
                </p>
              </div>
              <div className="border border-border bg-card p-8 md:p-10 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-primary" />
                <span className="text-muted-foreground font-bold uppercase tracking-widest text-xs">
                  Best for Employees with Ongoing Health Needs
                </span>
                <h3 className="text-2xl font-display font-bold">Individual ACA Plan</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Employees managing ongoing conditions can self-select an ACA plan that fits
                  their needs, reimbursed tax-free through the ICHRA — guaranteed acceptance
                  regardless of health history.
                </p>
              </div>
            </div>

            <div className="bg-peach border-l-8 border-primary p-8 md:p-12 space-y-4">
              <h4 className="text-2xl font-display font-bold text-primary">The Bottom Line</h4>
              <p className="text-xl md:text-2xl text-foreground font-medium max-w-4xl">
                No matter which path an employee takes, the employer&apos;s cost stays defined,
                capped, and completely predictable.
              </p>
            </div>

            <div className="bg-peach border-l-8 border-primary p-8 md:p-12 space-y-6">
              <div className="text-primary font-bold uppercase tracking-widest text-xs">
                Hard lines
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {hardLines.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-lg text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-charcoal text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-primary font-bold uppercase tracking-widest text-xs">
                A First-Principles Bet
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                Insurance was never going to innovate healthcare.
              </h2>
              <div className="h-1.5 w-24 bg-primary" />
            </div>
            <div className="space-y-6 text-xl text-white/70 leading-relaxed">
              <p>
                An insurance plan is a financial instrument. It pools risk and pays claims after
                the fact — it was never built to reinvent how care is delivered, priced, or
                accessed.
              </p>
              <p className="font-medium text-white text-2xl border-l-4 border-primary pl-6">
                Real innovation in healthcare has always happened outside the insurance chassis,
                never inside it.
              </p>
              <p>
                That&apos;s why Direct Primary Care lives outside the claims system entirely. A
                better doctor relationship, transparent pricing, and real access couldn&apos;t be
                built by the entity whose business model depends on adjudicating claims — they had
                to be built somewhere insurance couldn&apos;t touch them.
              </p>
            </div>
          </div>
        </section>

        <section className="py-32 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
              Ready to exit the renewal treadmill?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Model your current spend against a defined-contribution approach. Decide on
              non-insurance additions. Launch your new strategy.
            </p>
            <div className="pt-8">
              <a
                href={SIMULATOR}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-primary-foreground font-display font-bold text-xl px-12 py-6 items-center gap-3 hover:bg-primary/90 transition-transform hover:-translate-y-1 shadow-xl shadow-primary/20"
              >
                Run the Simulator <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
