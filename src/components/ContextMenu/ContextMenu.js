import React from "react"
import propTypes from "prop-types"
import "./ContextMenu.css"

function ContextMenu({ list, xPos, yPos, handleMenuClick }) {
  const notFound = list
    .filter((item) => !item.found)
    .map((item) => (
      <li
        key={item.data.id}
        className="context-menu__item"
        onClick={(e) => {
          e.stopPropagation()
          handleMenuClick(item.data.name, item.data.id, xPos, yPos)
        }}
      >
        {item.data.name}
      </li>
    ))

  return (
    <div
      className="context-menu bg-light opacity-75 rounded p-2"
      style={{ top: `${yPos}px`, left: `${xPos}px` }}
    >
      <ul className="context-menu__ul p-0 m-0 d-flex flex-column justify-content-center align-items-center">
        {notFound}
      </ul>
    </div>
  )
}

export default ContextMenu

ContextMenu.propTypes = {
  list: propTypes.arrayOf(propTypes.shape),
  xPos: propTypes.number,
  yPos: propTypes.number,
  handleMenuClick: propTypes.func,
}
