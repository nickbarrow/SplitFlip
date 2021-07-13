import React from 'react'
import SplitFlip from '../SplitFlip'
import './SplitFlipBoard.scss'

export default function SplitFlipBoard(props: { message: string[]; play: string }) {
  return (
    <div className="split-flip-board" style={{ transform: 'scale(1)' }}>
      {props.message.map((line) => {
        return (
          <div className="split-flip-row">
            {line.split('').map((character, index) => {
              return <SplitFlip key={index} character={character} play={props.play} />
            })}
          </div>
        )
      })}
    </div>
  )
}
