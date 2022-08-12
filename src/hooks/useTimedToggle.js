import { useState, useEffect } from "react"

function useTimedToggle(interval) {
  const [toggleValue, setToggleValue] = useState(false)

  const toggleTrue = () => {
    setToggleValue(true)
  }

  useEffect(() => {
    let timeout
    if (toggleValue && interval) {
      timeout = setTimeout(() => setToggleValue(false), interval)
    }
    return () => {
      clearTimeout(timeout)
    }
  }, [toggleValue, interval])

  return [toggleValue, toggleTrue]
}

export default useTimedToggle
