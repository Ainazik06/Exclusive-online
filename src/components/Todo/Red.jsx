import React from 'react'

function Red(click) {
  return (
    <div>
      <button onClick={() => click("red")}>Red</button>
    </div>
  )
}

export default Red
