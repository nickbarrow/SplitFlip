import React, { useState } from 'react'
import SplitFlipBoard from './SplitFlipBoard'

const message0 = ['          ', '  HELLO,  ', '  WORLD!  ', '          ']

export default function App() {
  const [play, setPlay] = useState(false)

  const handlePlay = () => {
    setPlay(!play)
  }

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
      {/* <div className="split-flip-board" style={{ transform: 'scale(1)' }}>
        <SplitFlipBoard message="          " play={play} />
        <SplitFlipBoard message="  HELLO,  " play={play} />
        <SplitFlipBoard message="  WORLD!  " play={play} />
        <SplitFlipBoard message="          " play={play} />
      </div> */}
      <SplitFlipBoard message={message0} play={play} />
      <button onClick={handlePlay}>Start</button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          margin: '50px 0 0'
        }}>
        <b>MADE</b>{' '}
        <img style={{ maxWidth: '50px', margin: '0 10px' }} src="corn.png" alt="3D Corn" /> in
        Indiana
      </div>
    </div>
  )
}
