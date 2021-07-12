import React, { useState } from 'react'
import SplitFlipBoard from './SplitFlipBoard'

export default function App() {
  const [play, setPlay] = useState(false)
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'sans-serif'
      }}>
      <h1>Split-Flip Board</h1>
      <div className="split-flip-board" style={{ transform: 'scale(1)' }}>
        <SplitFlipBoard message="          " play={play} />
        <SplitFlipBoard message="  HELLO,  " play={play} />
        <SplitFlipBoard message="  WORLD!  " play={play} />
        <SplitFlipBoard message="          " play={play} />
      </div>
      <button onClick={() => setPlay(!play)}>Start</button>
    </div>
  )
}
