import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NotFound } from '../components/NotFound'
import { ReviewGate } from '../components/ReviewGate'
import { ReviewTemplate } from '../components/ReviewTemplate'
import { isReviewUnlocked, unlockReview } from '../lib/session'
import { getReview, type Review } from '../reviews'

export function ReviewPage() {
  const { slug } = useParams()
  const [review, setReview] = useState<Review | null | undefined>(undefined)
  const [unlocked, setUnlocked] = useState(() => (slug ? isReviewUnlocked(slug) : false))

  useEffect(() => {
    let cancelled = false
    if (!slug) {
      setReview(null)
      return
    }
    setReview(undefined)
    getReview(slug).then((found) => {
      if (!cancelled) setReview(found ?? null)
    })
    return () => {
      cancelled = true
    }
  }, [slug])

  useEffect(() => {
    if (review === undefined) return
    if (!review) {
      document.title = 'Page not found'
      return
    }
    document.title = unlocked ? review.title : 'Confidential Review'
  }, [review, unlocked])

  if (!slug || review === null) {
    return <NotFound />
  }

  if (review === undefined) {
    return <div className="min-h-screen bg-[#0c0c0e]" />
  }

  if (!unlocked) {
    return (
      <ReviewGate
        title={review.title}
        kicker={review.kicker}
        onUnlock={(passphrase) => {
          if (passphrase.trim() === review.passphrase) {
            unlockReview(slug)
            setUnlocked(true)
            return true
          }
          return false
        }}
      />
    )
  }

  return <ReviewTemplate review={review} />
}
