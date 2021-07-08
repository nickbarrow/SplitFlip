import React from 'react'
import './splitFlip.scss'

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.?\'"-=!@#$%^&*()_+'.split(
  ''
)
const animationDuration = 50

export default function SplitFlip() {
  // const [letter, setLetter] = useState('Q')

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  const sequentialFlip = async () => {
    let char = 'T',
      index = 0

    while (index !== characters.indexOf(char) + 1) {
      await flipDown(characters[index])
      index++
    }
  }

  const flipDown = async (
    char = characters[Math.floor(Math.random() * characters.length)]
  ) => {
    let letter = char,
      topNew = document.querySelector('.top > .new'),
      topOld = document.querySelector('.top > .old'),
      bottomNew = document.querySelector('.bottom > .new'),
      bottomOld = document.querySelector('.bottom > .old')

    // First set hidden letters
    topNew.innerHTML = letter
    bottomNew.innerHTML = letter

    topOld.classList.remove('flipDown')
    void topOld.offsetWidth
    topOld.classList.add('flipDown')
    await sleep(animationDuration)

    topOld.innerHTML = letter

    bottomNew.classList.remove('flipDownBottom')
    void bottomNew.offsetWidth
    bottomNew.classList.add('flipDownBottom')
    await sleep(animationDuration)

    bottomOld.innerHTML = letter
  }

  return (
    <>
      <div className="split-flip">
        <div className="top">
          <div className="old"></div>
          <div className="new"></div>
        </div>
        <div className="bottom">
          <div className="old"></div>
          <div className="new"></div>
        </div>
      </div>
      <button
        style={{ marginTop: '10px' }}
        onClick={() => {
          sequentialFlip()
        }}>
        Start
      </button>
    </>
  )
}
