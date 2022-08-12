import React from "react"
import "./Game.css"
import Navbar from "../Navbar/Navbar"
import GameImage from "../GameImage/GameImage"
import TheLocNar from "../../assets/the-loc-nar.jpg"

function Game() {
  const toggleFound = () => {
    console.log("Toggle found()")
  }

  const handleWin = () => {
    console.log("Handle win()")
  }

  return (
    <div className="game w-100 h-100 d-flex flex-column justify-content-center align-items-center">
      <Navbar timeLeft="5:00" elementsLeft={3} />
      <main className="w-100 d-flex justify-content-center">
        <GameImage
          list={[
            { name: "Bowser", id: "bowser" },
            { id: "stewie", name: "Stewie" },
            { id: "the-knight", name: "The Knight" },
          ]}
          imageSrc={TheLocNar}
          imageAlt="The loc nar - a mash of pop culture."
          imageAuthor="Find out author later"
          toggleFound={toggleFound}
          handleWin={handleWin}
        />
      </main>
    </div>
  )
}

export default Game
