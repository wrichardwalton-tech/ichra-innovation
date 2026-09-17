const keyFor = (slug: string) => `ichra-review:${slug}`

export function isReviewUnlocked(slug: string): boolean {
  try {
    return sessionStorage.getItem(keyFor(slug)) === '1'
  } catch {
    return false
  }
}

export function unlockReview(slug: string): void {
  try {
    sessionStorage.setItem(keyFor(slug), '1')
  } catch {
    // sessionStorage can be blocked; the in-memory unlock still works for this visit.
  }
}
