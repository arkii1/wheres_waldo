import React, { useRef } from "react"
import propTypes from "prop-types"
import "./StartModal.css"
import theLocNar from "../../assets/the-loc-nar.jpg"
import bowser from "../../assets/bowser.png"
import stewie from "../../assets/stewie.jpg"
import knight from "../../assets/knight.webp"

function StartModal({ onClick }) {
  const myRef = useRef(null)
  const start = () => {
    myRef.current.classList.add("inactive")
    onClick()
  }

  return (
    <div
      className="start-modal d-flex align-items-center justify-content-center"
      ref={myRef}
    >
      <div className="m-2 d-flex justify-content-center align-items-center rounded ">
        <img
          className="start-modal__the-loc-nar h-100"
          src={theLocNar}
          alt="The Loc Nar"
        />
        <span className="d-flex flex-column align-items-center justify-content-center p-4 gap-3 ">
          <h2 className="text-dark">The Loc Nar</h2>
          <small className="text-dark">By Egor Kluchnyk</small>
          <StartModalElement
            difficulty="Easy"
            imgSrc={bowser}
            imgAlt="Bowser"
            name="Bowser"
            source="Super Mario Bros"
          />
          <StartModalElement
            difficulty="Medium"
            imgSrc={stewie}
            imgAlt="Stewie"
            name="Stewie"
            source="Family Guy"
          />
          <StartModalElement
            difficulty="Hard"
            imgSrc={knight}
            imgAlt="The Knight"
            name="The Knight"
            source="Hollow Knight"
          />
          <button
            className="start-modal__button text-light bg-dark rounded border-0 outline-0 px-4 py-2"
            type="button"
            onClick={start}
          >
            Start
          </button>
        </span>
      </div>
    </div>
  )
}

StartModal.propTypes = {
  onClick: propTypes.func,
}

function StartModalElement({ difficulty, imgSrc, imgAlt, name, source }) {
  const getDifficultyClass = () => {
    if (difficulty === "Easy") {
      return "text-success"
    }
    if (difficulty === "Medium") {
      return "text-warning"
    }
    return "text-danger"
  }
  return (
    <div className="start-modal__element w-100 d-flex flex-column align-items-end justify-content-center">
      <p className={getDifficultyClass()}>{difficulty}</p>
      <div className="w-100 d-flex align-items-center justify-content-between gap-3">
        <img className="start-modal__image" src={imgSrc} alt={imgAlt} />
        <div className="d-flex flex-column align-items-end justify-content-center">
          <h4 className="text-dark">{name}</h4>
          <small className="text-dark">{source}</small>
        </div>
      </div>
    </div>
  )
}

StartModalElement.propTypes = {
  difficulty: propTypes.string,
  imgSrc: propTypes.string,
  imgAlt: propTypes.string,
  name: propTypes.string,
  source: propTypes.string,
}

export default StartModal
