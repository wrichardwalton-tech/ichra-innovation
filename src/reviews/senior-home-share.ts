import type { Review } from './types'

/**
 * Senior Home Share LLC — light ICHRA opt-out review.
 * Numbers from 2026-09-17 packet (68 VA + NC 1 + MS 1). No Sedera tier selected.
 * Hero savings use VA Quote 68-EE Sentara $6250 HSA totals, not the 64-EE Word rounding.
 */
export const review: Review = {
  slug: 'senior-home-share',
  passphrase: 'SHSREVIEW2026',
  title: 'Senior Home Share ICHRA Quote Review',
  kicker: 'Confidential Review',
  clientName: 'Senior Home Share LLC',
  preparedFor: 'Prepared for leadership of Senior Home Share LLC',
  effectiveDateLabel: 'Target effective 10/1/2026',
  enrolled: 70,
  census: [
    { code: 'VA', lives: 68 },
    { code: 'NC', lives: 1 },
    { code: 'MS', lives: 1 },
  ],
  currentPlan: 'Cigna HSA 8050',
  costBasis:
    'Current costs model every enrolled employee on Cigna HSA 8050 at $611.08/month ($455 employer / $156.08 employee). VA census is 68 lives; NC and MS are 1 each.',
  hero: 'Most of your people sit in Virginia, where a similar individual HSA plan prices well below the group. North Carolina has room too. Mississippi does not — so we do not pretend every state saves money. The move is still one monthly allowance and a real choice.',
  companySpend: {
    totalAnnual: 513_307,
    totalMonthly: 42_776,
    employerAnnual: 382_200,
    employerMonthly: 31_850,
  },
  bars: [
    {
      id: 'current-cigna',
      label: 'Current Cigna HSA 8050',
      annual: 513_307,
      note: '70 lives · before any ICHRA move',
      emphasis: 'current',
    },
    {
      id: 'sentara-6250',
      label: 'VA on Sentara $6250 HSA',
      annual: 401_118,
      note: 'VA 68 on Sentara Bronze 6250 HSA; NC + MS held at current premium (modeled)',
      emphasis: 'modeled',
    },
    {
      id: 'sentara-9800',
      label: 'VA on Sentara $9800 Bronze',
      annual: 385_412,
      note: 'VA 68 on lower Bronze; NC + MS held at current (modeled floor)',
      emphasis: 'floor',
    },
  ],
  modeledNote:
    'The middle bar is not a promise that everyone buys Sentara. It shows what happens if Virginia moves to a similar $6,250 HSA while NC and MS stay at today’s premium. Mississippi’s listed individual plans sit above $611 — so that state is about choice and portability, not a premium cut.',
  foundation: {
    headline: 'Foundation for every enrolled employee',
    items: [
      'A defined monthly ICHRA allowance — you write the check, they pick the plan',
      'One enrollment experience across VA, NC, and MS',
    ],
  },
  selfSelect: {
    headline: 'Then people self-select the tool that fits their risk',
    healthyPath: {
      title: 'No major pre-existing condition',
      body: 'Medical cost sharing (Sedera) for large unexpected needs under guidelines — not insurance. Everyday care stays direct and cash-pay, not the group plan.',
    },
    needsPath: {
      title: 'Significant or ongoing needs',
      body: 'An individual ACA plan, reimbursed tax-free through the ICHRA allowance.',
    },
  },
  hardLines: [
    'ICHRA dollars do not buy Sedera.',
    'After a waiver, Sedera is post-tax payroll, voluntary, discretionary sharing.',
    'Medical cost sharing is not insurance.',
    'One enrollment — no two-site handoff.',
    'Mississippi is not a savings story on the quotes we have; do not oversell it.',
  ],
  employerContext: {
    currentEmployerAnnual: 382_200,
    minAffordableAnnual: 333_837,
    maxExposureAnnual: 513_307,
    adminSetup: 750,
    adminRenewal: 750,
    pepm: 65,
    pepmMonthlyAtCensus: 4_550,
    adminNote:
      'Administration is $750 setup, $750 renewal, and $65 PEPM ($4,550/month at 70 lives). Admin is shown separately from the premium bars.',
  },
  close: {
    nextStep:
      'Walk this model with leadership, confirm the 10/1/2026 census, and lock the allowance by state. That is enough to turn this into a close.',
    ask: 'A follow-up meeting to close.',
  },
  footer:
    'Confidential working draft. Confirm with counsel/TPA. Richard Walton, CEBS · rwalton@sedera.com · (806) 679-0816',
}
