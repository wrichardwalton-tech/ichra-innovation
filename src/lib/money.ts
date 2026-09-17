export function usd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function usdCompact(amount: number): string {
  if (amount >= 1_000) {
    return `$${Math.round(amount / 1_000)}k`
  }
  return usd(amount)
}
