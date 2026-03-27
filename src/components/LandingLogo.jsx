import { useEffect, useRef } from "react"

export default function LandingLogo() {
  const letterBoxes = useRef([])
  const boxStartPoints = useRef([])

  useEffect(() => {
    if (letterBoxes.current.length > 0) return

    const titleContainer = document.querySelector('#title')
    const myName = ['A', 'd', 'a', 'm', ' ', 'R', 'a', 'f', 'f', 'e', 'r', 't', 'y']
    myName.forEach(letter => {
      const letterDiv = document.createElement('div')
      letterDiv.className = 'indLetterDiv'
      letterDiv.innerText = letter.toUpperCase()
      titleContainer.appendChild(letterDiv)
      letterBoxes.current.push(letterDiv)
    })

    startPoint()

    const releaseTimer = setTimeout(releaseLetters, 3 * 1000)
    return () => clearTimeout(releaseTimer)
  }, [])


  function startPoint() {
    letterBoxes.current.forEach(box => {
      // * takes the offset value and turn it into a percentage
      // * % = small number divided  by large number * 100
      // * (offset position / window size) * 100
      const top = ((box.offsetTop / window.innerHeight) * 100) + '%'
      const left = ((box.offsetLeft / window.innerWidth) * 100) + '%'
      box.style.position = 'absolute'
      box.style.top = top
      box.style.left = left
      boxStartPoints.current.push({ top, left })
      // * starts process again
      box.addEventListener('mouseover', assignOGPoint)
    })
  }


  function releaseLetters() {
    letterBoxes.current.forEach(box => {
      // * gets a new position to move to
      box.style.top = Math.floor(Math.random() * 100) + '%'
      box.style.left = Math.floor(Math.random() * 100) + '%'
      // * sets a random amount of degrees to spin, and whether plus or minus (clockwise or anti-clockwise)
      const spin = Math.floor(Math.random() * 360) + 'deg'
      const plusOrMinus = Math.random() < 0.5 ? '-' : ''
      box.style.transform = `rotate(${plusOrMinus}${spin})`
      box.style.transition = 'top 10s cubic-bezier(0.45, 0.13, 0.38, 0.41), left 10s cubic-bezier(0.45, 0.13, 0.38, 0.41), transform 10s cubic-bezier(0.45, 0.13, 0.38, 0.41)'
    })
  }


  function assignOGPoint() {
    for (let i = 0; i < letterBoxes.current.length; i++) {
      letterBoxes.current[i].style.transition = 'top 2s cubic-bezier(0.28, 0.08, 0.81, -0.11), left 2s cubic-bezier(0.28, 0.08, 0.81, -0.11), transform 2s cubic-bezier(0.28, 0.08, 0.81, -0.11)'
    }
    requestAnimationFrame(() => {
      for (let i = 0; i < letterBoxes.current.length; i++) {
        // * assigns original position from saved array values
        letterBoxes.current[i].style.top = boxStartPoints.current[i].top
        letterBoxes.current[i].style.left = boxStartPoints.current[i].left
        // * letters to original rotation
        letterBoxes.current[i].style.transform = 'rotate(0deg)'
      }
    })
    setTimeout(releaseLetters, 15 * 1000)
  }

  return (
    <>
      <header id="title"></header>
    </>
  )
}
