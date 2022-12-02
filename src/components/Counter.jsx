import React  from 'react';
import { useState } from 'react';
import Count from './Count';
import './counter.css';

export default function Counter() {
    const [count, setCount] =  useState(0);
    const [isGoingOut, setIsGoingOut] = useState(true);
    function countMinus (){
         setCount(count - 1)
    }
  /**
   *  Note: if I ever need old value of state to determine the new value of state, I should pass a callback function to my state setter function instead of using state directly. The callback function recieves the old value of state as its parameter by default, so I can to determine new value of state.
   */
 
    function countPlus() {
        setCount(function(oldValue){
            return oldValue + 1
        });
    }
  return (
    <div className='counter'>
      <button onClick = {countMinus} className='counter--minus'>-</button>
      <div className='counter--count'>
        <h1>{count}</h1>
      </div>
      <Count number = {count } />
      <button onClick = {countPlus} className='counter--plus'>+</button>
      <h1>Is Going Out ?</h1>
      {/* Instead of arrow func or noName func I can declare func above return and put name inside onClick = {} */}
      <div className='counter--yes' onClick = {()=> {
        setIsGoingOut(prev => {setIsGoingOut(!prev)})
      }}> {isGoingOut ? "Yes" : "No"}</div>
    </div>
    
  )
}


