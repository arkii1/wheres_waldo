import React, { useEffect, useState } from "react"
import "./EndModal.css"
import propTypes from "prop-types"
import convertSecsToMins from "../../utility/convertSecondsToMins"

function EndModal({ time, getLeaderboard, submit }) {
  const [leaderboardJSX, setLeaderboardJSX] = useState()

  useEffect(() => {
    const updateJSX = async () => {
      getLeaderboard().then((result) => {
        const newJSX = result
          .sort((a, b) => a.seconds - b.seconds)
          .slice(0, 10)
          .map((element, index) => (
            <li key={element.name}>{`${index + 1}: ${convertSecsToMins(
              element.seconds
            )} - ${element.name} `}</li>
          ))
        setLeaderboardJSX(newJSX)
      })
    }
    updateJSX()
  })

  return (
    <div className="end-modal ">
      <div className="rounded p-3 d-flex flex-column justify-content-center align-items-center gap-3">
        Congratulations! Your Completed it in: {convertSecsToMins(time)}!
        <h3>Leaderboard</h3>
        <ul className="m-0 p-0">{leaderboardJSX}</ul>
        <form
          id="end-modal__form"
          className="d-inline-flex flex-column align-items-center gap-1"
        >
          <label
            htmlFor="name"
            className="d-inline-flex flex-column align-items-center"
          >
            Input your name to add to the leaderboard:
            <input
              type="text"
              maxLength={3}
              minLength={3}
              name="name"
              className="w-25"
            />
          </label>
          <input
            className="rounded p-1 border-0 outline-0 bg-dark text-light "
            type="button"
            value="Submit"
            onClick={submit}
          />
        </form>
      </div>
    </div>
  )
}

export default EndModal

EndModal.propTypes = {
  time: propTypes.number.isRequired,
  getLeaderboard: propTypes.func,
  submit: propTypes.func.isRequired,
}
