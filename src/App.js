// import React, { useEffect } from "react";
// import './styles.scss'
import SplitFlip from './SplitFlip'

export default function App() {
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

      <SplitFlip />
    </div>
  )
}
