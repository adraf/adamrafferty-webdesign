import { useEffect } from "react"

export default function LandingLogo() {
  const letterBoxes = []
  const boxStartPoints = []

  useEffect(() => {
    async function getName() {
      const titleContainer = document.querySelector('#title')
      const myName = ['A', 'd', 'a', 'm', ' ', 'R', 'a', 'f', 'f', 'e', 'r', 't', 'y']
      myName.forEach(letter => {
        const letterDiv = document.createElement('div')
        letterDiv.className = 'indLetterDiv'
        letterDiv.innerText = letter.toUpperCase()
        titleContainer.appendChild(letterDiv)
        letterBoxes.push(letterDiv)
      })
      startPoint()
    }
    getName()
  }) 

  async function startPoint() {

    letterBoxes.forEach(box => {
      // * takes the offset value and turn it into a percentage
      // * % = small number divided  by large number * 100
      // * (offset position / window size) * 100
      box.style.top = ((box.offsetTop / window.innerHeight) * 100) + '%'
      box.style.left = ((box.offsetLeft / window.innerWidth) * 100) + '%'
      boxStartPoints.push({ 'box.style.top': box.style.top, 'box.style.left': box.style.left })      
      // * starts process again
      box.addEventListener('mouseover', assignOGPoint)
    })
  }
  startPoint()


  function releaseLetters() {
    letterBoxes.forEach(box => {
      // * gets a new position to move to
      box.style.position = 'absolute'
      box.style.top = Math.floor(Math.random() * 100) + '%'
      box.style.left = Math.floor(Math.random() * 100) + '%'
      // * sets a random amount of degrees to spin, and whether plus or minus (clockwise or anti-clockwise)
      const spin = Math.floor(Math.random() * 360) + 'deg'
      const getPlusOrMinus = Math.random() < 0.5
      const plusOrMinus = getPlusOrMinus ? '-' : ''
      box.style.transform = `rotate(${plusOrMinus}${spin})`
      box.style.transition = '10s cubic-bezier(0.45, 0.13, 0.38, 0.41)'
    })
  }
  setTimeout(releaseLetters, 3 * 1000)


  function assignOGPoint() {
    for (let i = 0; i < letterBoxes.length; i++) {
      // * assigns original position from saved array values
      letterBoxes[i].style.top = Object.entries(boxStartPoints[i])[0][1]
      letterBoxes[i].style.left = Object.entries(boxStartPoints[i])[1][1]
      // * letters to original rotation
      letterBoxes[i].style.transform = 'rotate(0)'
      letterBoxes[i].style.transition = '2s cubic-bezier(0.28, 0.08, 0.81,-0.11)'
      setTimeout(releaseLetters, 15 * 1000)
    }
  }

  return (
    <>
      <header id="title"></header>
    </>
  )
}