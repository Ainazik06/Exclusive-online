import React from 'react'
import { useDispatch } from 'react-redux'
import { addTimer } from '../../redux/countSlice'


function Count({clicked, decrement}) {
    const dispatch = useDispatch ()
  return (
    <div>
      <button onClick={clicked}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => dispatch(addTimer())}>click Redux</button>
      
    </div>
  )
}

export default Count
