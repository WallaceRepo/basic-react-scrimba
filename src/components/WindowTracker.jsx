import React, {useState, useEffect } from 'react';

export default function WindowTracker() {
    const [show, setShow ] = useState(true);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
useEffect(()=> {
    function watchWidth() {
       setWindowWidth(window.innerWidth) 
    }
    window.addEventListener("resize", watchWidth)
    return function(){
        window.removeEventListener("resize", watchWidth)
    }
},[])  
function toggle () {
    setShow(prevShow => !prevShow)
}
  return (
    <div className='windowTrackerContainer'>
       <button onClick = {toggle }>Toggle Window tracker</button>
       { show && <h2>Window width: {window.innerWidth }</h2> }
       { show && <h2>Window width: {windowWidth }</h2> }
       <h2>{window.innerHeight }</h2>
       
    </div>
  )
}

