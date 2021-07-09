import React, { useState } from 'react'
// import './styles.scss'
import SplitFlip from './SplitFlip'

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
      <h1>Split Flip</h1>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SplitFlip character="W" play={play} />
        <SplitFlip character="T" play={play} />
        <SplitFlip character="F" play={play} />
      </div>
      <button onClick={() => setPlay(!play)}>Start</button>
    </div>
  )
}
