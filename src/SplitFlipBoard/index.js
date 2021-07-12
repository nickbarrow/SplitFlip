import React from 'react'
import SplitFlip from '../SplitFlip'
import './SplitFlipBoard.scss'

export default function SplitFlipBoard(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {props.message.split('').map((character) => {
        return <SplitFlip character={character} play={props.play} />
      })}
    </div>
  )
}
