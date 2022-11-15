import React, {useEffect, useState} from "react"
import "../assets/css/countdown.css"

export default function CountDown() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Set this deadline for the event. Currently it is set for new year 2023
  const deadline = "March 16 2023 "

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setSeconds(Math.floor(time / 1000) % 60)
    setMinutes(Math.floor(time / 1000 / 60) % 60)
    setHours(Math.floor(time / (1000 * 60 * 60)) % 24)
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-container">
      <div className="count-down-heading">
        <h1> Next Event in </h1>
        {/* <h1>in</h1> */}
      </div>
      <div className="timer-container">
        <div className="days">
          <h1>{days < 10 ? "0" + days : days}</h1>
          <h3>Days</h3>
        </div>
        <div className="hours">
          <h1>{hours < 10 ? "0" + hours : hours}</h1>
          <h3>Hours</h3>
        </div>
        <div className="minutes">
          <h1>{minutes < 10 ? "0" + minutes : minutes}</h1>
          <h3>Min</h3>
        </div>
        <div className="seconds">
          <h1>{seconds < 10 ? "0" + seconds : seconds}</h1>
          <h3>Sec</h3>
        </div>
      </div>
    </div>
  )
}
