import { useState } from "react"
import useToggle from "./useToggle"

function useItem(initalItem) {
  const [item, setItem] = useState(initalItem)
  const [found, toggleFound] = useToggle(false)

  return [item, found, setItem, toggleFound]
}

export default useItem
