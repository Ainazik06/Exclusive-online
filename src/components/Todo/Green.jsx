import React from 'react'

function Green({click}) {
  return (
    <div>
        <button onClick={() => click("green")}>Green</button>
    </div>
  )
}

export default Green
