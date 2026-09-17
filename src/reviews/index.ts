import type { Review } from './types'

const modules = import.meta.glob<{ review: Review }>(['./*.ts', '!./types.ts', '!./index.ts'])

function modulePath(slug: string): string | undefined {
  const exact = `./${slug}.ts`
  if (exact in modules) return exact
  return undefined
}

export async function getReview(slug: string): Promise<Review | undefined> {
  const path = modulePath(slug)
  if (!path) return undefined
  const mod = await modules[path]()
  if (!mod.review || mod.review.slug !== slug) return undefined
  return mod.review
}

export type { Review } from './types'
