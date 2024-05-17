import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../states/couterState/counterSlice'
const Counter = () => {
    const count = useSelector((state)=>{
        return state.counter.value
    })
    const dispatch = useDispatch()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => {dispatch(increment())}}>"Increment (+)"</button>
        <button onClick={() => {dispatch(decrement())}}>"Decrement (-)"</button>
    </div>
  )
}

export default Counter