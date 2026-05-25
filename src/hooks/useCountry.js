import { useState, useEffect } from 'react'

function useCountry(code) {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!code) {
      // defer state resets to avoid synchronous setState inside effect
      Promise.resolve().then(() => {
        setCountry(null)
        setLoading(false)
        setError(null)
      })
      return
    }

    let cancelled = false

    ;(async () => {
      // ensure this runs asynchronously to avoid sync setState in effect
      await Promise.resolve()
      if (cancelled) return

      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha/${encodeURIComponent(code)}`,
        )
        if (!res.ok) throw new Error('Country not found.')
        const data = await res.json()
        if (!cancelled) {
          setCountry(data[0] ?? null)
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setCountry(null)
          setError(err?.message || 'Failed to load country')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [code])

  return { country, loading, error }
}

export default useCountry
