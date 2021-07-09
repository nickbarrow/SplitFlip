import React, { useEffect } from 'react'
import './splitFlip.scss'

export default function SplitFlip(props) {
  const character = props.character || ' '
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?\'"-=!@#$%^&*()_+ '.split(
    ''
  )
  const animationDuration = 50

  // Assign each character a unique id.
  const getRandomID = () => {
    let s = 'char-'
    for (var i = 0; i < 4; i++) s += Math.floor(Math.random() * 10)
    return s
  }
  // Get ID for this character.
  const charID = props.charID || getRandomID()

  // Mimic sleep function so we can wait for animation to finish.
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  // Flip sequentially until we hit desired character.
  const sequentialFlip = async () => {
    let index = 0

    while (index !== characters.indexOf(character) + 1) {
      await flipDown(characters[index])
      index++
    }
  }

  var flipAudio = new Audio('click.wav')
  const flipDown = async (
    char = characters[Math.floor(Math.random() * characters.length)]
  ) => {
    let letter = char,
      topNew = document.querySelector(`#${charID} > .top > .new`),
      topOld = document.querySelector(`#${charID} > .top > .old`),
      bottomNew = document.querySelector(`#${charID} > .bottom > .new`),
      bottomOld = document.querySelector(`#${charID} > .bottom > .old`)

    // Reset bottom flip position before we change letter to avoid flickering.
    bottomNew.classList.remove('flipDownBottom')
    void bottomNew.offsetWidth

    // First set hidden letters
    topNew.innerHTML = letter
    bottomNew.innerHTML = letter

    topOld.classList.remove('flipDown')
    void topOld.offsetWidth
    topOld.classList.add('flipDown')
    await sleep(animationDuration)

    topOld.innerHTML = letter

    bottomNew.classList.add('flipDownBottom')
    await sleep(animationDuration)

    bottomOld.innerHTML = letter
    flipAudio.play()
  }

  useEffect(() => {
    if (props.play) sequentialFlip()
  }, [props.play])

  return (
    <>
      <div id={charID} className="split-flip">
        <div className="top">
          <div className="old"></div>
          <div className="new"></div>
        </div>
        <div className="bottom">
          <div className="old"></div>
          <div className="new"></div>
        </div>
      </div>
      {/* <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          sequentialFlip()
        }}>
        Start
      </button> */}
    </>
  )
}
