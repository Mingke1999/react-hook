import React from 'react'
import MousePosition from './MousePosition'

export default function Mouse() {
    const positon = MousePosition();
  return (
    <div>
      <h1>self define Hook</h1>
      <p>x={positon.x}</p>
      <p>y={positon.y}</p>
    </div>
  )
}
