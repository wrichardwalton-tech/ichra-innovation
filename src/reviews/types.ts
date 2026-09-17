export type CensusState = {
  code: string
  lives: number
}

export type CostBar = {
  id: string
  label: string
  annual: number
  note: string
  emphasis?: 'current' | 'modeled' | 'floor'
}

export type Review = {
  slug: string
  passphrase: string
  title: string
  kicker: string
  clientName: string
  preparedFor: string
  effectiveDateLabel: string
  enrolled: number
  census: CensusState[]
  currentPlan: string
  costBasis: string
  hero: string
  companySpend: {
    totalAnnual: number
    totalMonthly: number
    employerAnnual: number
    employerMonthly: number
  }
  bars: CostBar[]
  modeledNote: string
  foundation: {
    headline: string
    items: string[]
  }
  selfSelect: {
    headline: string
    healthyPath: { title: string; body: string }
    needsPath: { title: string; body: string }
  }
  hardLines: string[]
  employerContext: {
    currentEmployerAnnual: number
    minAffordableAnnual: number
    maxExposureAnnual: number
    adminSetup: number
    adminRenewal: number
    pepm: number
    pepmMonthlyAtCensus: number
    adminNote: string
  }
  close: {
    nextStep: string
    ask: string
  }
  footer: string
}
