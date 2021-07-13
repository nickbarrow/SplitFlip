import React, { useEffect } from 'react'
import './splitFlip.scss'

export default function SplitFlip(props: { character: string; play: string }) {
  const character = props.character || ' '
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?!\'"-=@#$%^&*()_+ '.split('')
  const animationDuration = 50

  // Assign each character a unique id.
  const getRandomID = () => {
    let s = 'char-'
    for (var i = 0; i < 5; i++) s += Math.floor(Math.random() * 10)
    return s
  }
  // Generate unique ID to access this character.
  const charID = getRandomID()

  // Mimic sleep function so we can wait for animation to finish.
  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  // Flip sequentially until we hit desired character.
  const sequentialFlip = async () => {
    if (character === ' ') return

    let index = 0

    while (index !== characters.indexOf(character) + 1) {
      let result = await flipDown(characters[index])
      // If something failed in flipping we don't increment index and try again.
      if (result) index++
    }
  }

  // Flips to character passed in.
  const flipDown = async (char: string) => {
    let // letter = char,
      topNew = document.querySelector<HTMLElement>(`#${charID} > .top > .new`),
      topOld = document.querySelector<HTMLElement>(`#${charID} > .top > .old`),
      bottomNew = document.querySelector<HTMLElement>(`#${charID} > .bottom > .new`),
      bottomOld = document.querySelector<HTMLElement>(`#${charID} > .bottom > .old`)

    // This is probably bad but gets CSB to shut up.
    if (!topNew || !topOld || !bottomNew || !bottomOld) return false

    // Reset bottom flip position before we change letter to avoid flickering.
    bottomNew.classList.remove('flipDownBottom')
    void bottomNew.offsetWidth

    // First, set incoming (currently hidden) letters.
    topNew.innerHTML = char
    bottomNew.innerHTML = char

    topOld.classList.remove('flipDown')
    void topOld.offsetWidth
    topOld.classList.add('flipDown')
    await sleep(animationDuration)

    topOld.innerHTML = char

    bottomNew.classList.add('flipDownBottom')
    await sleep(animationDuration)

    bottomOld.innerHTML = char
    return true
  }

  useEffect(() => {
    if (props.play) sequentialFlip()
  })

  return (
    <div id={charID} className="split-flip-character">
      <div className="top">
        <div className="old"></div>
        <div className="new"></div>
      </div>
      <div className="guide left"></div>
      <div className="guide right"></div>
      <div className="bottom">
        <div className="old"></div>
        <div className="new"></div>
      </div>
    </div>
  )
}
