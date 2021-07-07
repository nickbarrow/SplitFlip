import React, { useEffect, useState } from 'react'
import './splitFlip.scss'

const characters = 'QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()1234567890'.split('')
const animationDuration = 120

export default function SplitFlip() {
  const [letter, setLetter] = useState('Q')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  const randomFlip = async (e) => {
    for (let i = 0; i < 25; i++) {
      await flipDown(e)
    }
  }

  const flipDown = async (e) => {
    let letter = characters[Math.floor(Math.random() * characters.length)]
    document.querySelector('.top > .new').innerHTML = letter
    e.classList.remove('flipDown')
    void e.offsetWidth
    e.classList.add('flipDown')

    await sleep(animationDuration) // Sleep until animation finished.
    e.innerHTML = letter
    document.querySelector('.bottom > .new').innerHTML = letter
  }

  return (
    <>
      <div className="split-flip">
        <div className="top">
          <div className="old">{letter}</div>
          <div className="new"></div>
        </div>
        {/* <hr /> */}
        <div className="bottom">
          <div className="old"></div>
          <div className="new"></div>
        </div>
      </div>
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          let e = document.querySelector('.top > .old')
          randomFlip(e)
        }}>
        Start
      </button>
    </>
  )
}
