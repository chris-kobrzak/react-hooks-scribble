import { useState, useEffect } from 'react'

type ReturnObject = {
  apiValue: string
  timerValue: string | null
}

export const useObject = (): ReturnObject => {
  const [apiValue] = useState<string>('bar')
  const [timerValue, setTimerValue] = useState<string | null>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerValue(new Date().toISOString())
    }, 2000) // Update every 2 seconds

    return () => clearInterval(intervalId)
  }, [setTimerValue])

  return { apiValue, timerValue }
}
