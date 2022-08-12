import React, { useEffect, useState } from "react"
import "./App.css"
import { doc, setDoc } from "firebase/firestore"
import uniqid from "uniqid"
import { firestore } from "./firebase/config"
import StartModal from "./components/StartModal/StartModal"
import GameImage from "./components/GameImage/GameImage"
import Timer from "./components/Timer/Timer"
import ItemsLeft from "./components/ItemsLeft/ItemsLeft"
import EndModal from "./components/EndModal/EndModal"
import TheLocNar from "./assets/the-loc-nar.jpg"
import useItem from "./hooks/useItem"
import useToggle from "./hooks/useToggle"

function App() {
  const [bowserData, bowserFound, setBowser, toggleBowser] = useItem({
    id: "ZsycwJWWBa3CLzGOCnXN",
    name: "Bowser",
  })

  const [stewieData, stewieFound, setStewie, toggleStewie] = useItem({
    id: "xCAZwcY5F0wSOHhgBwiS",
    name: "Stewie",
  })

  const [knightData, knightFound, setKnight, toggleKnight] = useItem({
    id: "gMbYnyGjSM3tbu82mBQ8",
    name: "The Knight",
  })

  const itemArr = [
    {
      data: bowserData,
      found: bowserFound,
      setItem: setBowser,
      toggleFound: toggleBowser,
    },
    {
      data: stewieData,
      found: stewieFound,
      setItem: setStewie,
      toggleFound: toggleStewie,
    },
    {
      data: knightData,
      found: knightFound,
      setItem: setKnight,
      toggleFound: toggleKnight,
    },
  ]

  const [itemsLeft, setItemsLeft] = useState(3)

  const updateItemsLeft = (newItemsLeft) => {
    setItemsLeft(newItemsLeft)
  }

  const toggleFound = (itemId) => {
    try {
      const item = itemArr.find((i) => i.data.id === itemId)
      if (!item.found) {
        item.toggleFound()
        updateItemsLeft(itemsLeft - 1)
      }
    } catch (error) {
      console.log(`No item found. Error: ${error}`)
    }
  }

  const [seconds, setSeconds] = useState(0)

  const [playGame, togglePlayGame] = useToggle(false)

  const startGame = () => {
    togglePlayGame()
  }

  const [endGame, toggleEndGame] = useToggle(false)

  const handleWin = () => {
    toggleEndGame()
    togglePlayGame()
    console.log("handling win")
  }

  useEffect(() => {
    if (itemsLeft <= 0 && !endGame) {
      handleWin()
    }
  }, [itemsLeft, handleWin])

  const db = firestore

  const getLeaderboard = async () => {
    const snapshot = await firestore.collection("leaderboard").get()
    return snapshot.docs.map((d) => d.data())
  }

  const submitForm = async () => {
    const form = document.getElementById("end-modal__form")
    await setDoc(doc(db, "leaderboard", uniqid()), {
      name: form.firstChild.lastChild.value,
      seconds,
    })
    document.location.reload()
  }

  return (
    <div className="App bg-dark d-flex flex-column justify-content-start align-items-center">
      <StartModal onClick={startGame} />
      <header className="d-flex py-3 justify-content-around align-items-center w-100 position-fixed fixed-top bg-dark">
        <Timer isActive={playGame} seconds={seconds} setSeconds={setSeconds} />
        <ItemsLeft itemsLeft={itemsLeft} />
      </header>
      <GameImage
        list={itemArr}
        imageSrc={TheLocNar}
        imageAlt="The loc nar - a mash of pop culture."
        imageAuthor="Find out author later"
        toggleFound={toggleFound}
        handleWin={handleWin}
      />
      {endGame && (
        <EndModal
          time={seconds}
          submit={submitForm}
          getLeaderboard={getLeaderboard}
        />
      )}
    </div>
  )
}

export default App
