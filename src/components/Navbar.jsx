import React from 'react';
import img from '../logo.svg';

export default function Navbar(props) {
  return (
    <nav>
      <div className='site-name'>
        <img className= 'App-logo' src={img} alt="logo" />
        <h1>React Facts</h1>
      </div>
      <h4>Course Project 1</h4>
      <div className='btn-cont'>
        <span className='light'>Light</span>
          <div className= 'label' onClick={props.toggleMode}>
            <div className= {"ball " + (props.mode ? "clicked" : " ")}></div>
          </div>
         <span className='dark'>Dark</span>
       </div>
     </nav>
  )
}
