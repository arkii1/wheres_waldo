/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef } from "react"
import propTypes from "prop-types"
import { firestore } from "../../firebase/config"
import useSnackbar from "../../hooks/useSnackbar"
import useToggle from "../../hooks/useToggle"
import "./GameImage.css"
import Snackbar from "../Snackbar/Snackbar"
import ContextMenu from "../ContextMenu/ContextMenu"
import MadeBy from "../MadeBy/MadeBy"

function GameImage({ list, imageSrc, imageAlt, imageAuthor, toggleFound }) {
  const [menuOpen, toggleMenuOpen] = useToggle(false)
  const [menuCoords, setMenuCoords] = useState({ x: 0, y: 0 })
  const [snackbar, openSnackbar, setSnackbar, toggleSnackbar] = useSnackbar(
    { text: "", bg: "red" },
    3000
  )

  const imgRef = useRef()

  const handleImageClick = (event) => {
    event.preventDefault()
    const { pageX: x, pageY: y } = event
    setMenuCoords({ x, y })
    toggleMenuOpen()
  }

  const handleMenuClick = async (itemName, itemId, x, y) => {
    try {
      const width = imgRef.current.offsetWidth
      const height = imgRef.current.offsetHeight

      const relX = x / width
      const relY = y / height

      const itemRef = firestore.collection("items").doc(itemId)
      const item = await itemRef.get().then((doc) => {
        if (doc) {
          return doc.data()
        }
      })

      const testX = Math.abs(relX - item.relPos[0]) < 0.042
      const testY = Math.abs(relY - item.relPos[1]) < 0.1

      if (testX && testY) {
        setSnackbar({
          text: `You found ${itemName}`,
          bg: "green",
        })
        toggleSnackbar()
        toggleMenuOpen()
        toggleFound(itemId)
      } else {
        setSnackbar({
          text: "Keep looking!",
          bg: "red",
        })
        toggleSnackbar()
        toggleMenuOpen()
      }
    } catch (error) {
      console.log(`Handle menu click error: ${error}`)
    }
  }

  return (
    <div className="game-image" onClick={handleImageClick} ref={imgRef}>
      {openSnackbar && <Snackbar bg={snackbar.bg} text={snackbar.text} />}
      {menuOpen && (
        <ContextMenu
          list={list}
          xPos={menuCoords.x}
          yPos={menuCoords.y}
          handleMenuClick={handleMenuClick}
        />
      )}
      <img src={imageSrc} alt={imageAlt} />
      <MadeBy
        position="left"
        text="by"
        author="Lucio"
        link="https://github.com/JCarlosLucio/where-is-waldo"
      />

      <MadeBy
        position="right"
        text="Image by"
        author={imageAuthor}
        link="https://www.instagram.com/ad.2.222/"
      />
    </div>
  )
}

export default GameImage

GameImage.propTypes = {
  list: propTypes.arrayOf(propTypes.shape),
  imageSrc: propTypes.node,
  imageAlt: propTypes.string,
  imageAuthor: propTypes.string,
  toggleFound: propTypes.func,
}
