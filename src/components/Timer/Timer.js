import React, { useEffect, useState } from "react"
import propTypes from "prop-types"
import convertSecsToMins from "../../utility/convertSecondsToMins"

function Timer({ isActive, seconds, setSeconds }) {
  const [secondsInMins, setSecsInMins] = useState(
    convertSecsToMins(seconds - 1)
  )

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1)
        setSecsInMins(convertSecsToMins(seconds))
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isActive, seconds, setSeconds, setSecsInMins])

  return (
    <h2 className="timer text-dark rounded bg-light px-3 py-1">
      {secondsInMins}
    </h2>
  )
}

export default Timer

Timer.propTypes = {
  isActive: propTypes.bool,
  seconds: propTypes.number,
  setSeconds: propTypes.func,
}
