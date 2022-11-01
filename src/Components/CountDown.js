import React from "react"
import "../assets/css/countdown.css"

export default function CountDown() {
  // JS Date Format: MM/DD/YYYY
  const futureDate = new Date("11/4/2022")
  console.log(futureDate.getFullYear())
  console.log(futureDate.getMonth())
  console.log(futureDate.getDate())
  const currentDate = new Date()
  console.log(currentDate)

  return (
    <div className="countdown-container">
      <div className="count-down-heading">
        <h1> Next Event </h1>
        <h1>in</h1>
      </div>
      <div className="timer-container">
        <div className="days">
          <h1>14</h1>
          <h3>Days</h3>
        </div>
        <div className="hours">
          <h1>13</h1>
          <h3>Hours</h3>
        </div>
        <div className="minutes">
          <h1>24</h1>
          <h3>Min</h3>
        </div>
        <div className="seconds">
          <h1>33</h1>
          <h3>Sec</h3>
        </div>
      </div>
    </div>
  )
}
