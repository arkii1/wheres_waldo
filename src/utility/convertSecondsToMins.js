const convertSecsToMins = (s) => {
  const mins = Math.floor((s + 1) / 60)
  let secs = (s + 1) % 60
  if (secs < 10) {
    secs = `0${secs}`
  }
  return `${mins}:${secs}`
}

export default convertSecsToMins
