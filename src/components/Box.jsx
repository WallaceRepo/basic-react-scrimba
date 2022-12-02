import React from 'react'

export default function Box(props) {
    const styles = {
       backgroundColor: props.on ? "green" : "blue"
       }
 return (
    <div onClick = {() => props.toggle(props.id)} 
       className = {"box"}
      //  className= {"box " + (props.on ? "blue" : "yellow")}>{props.id }</div>
        style = {styles}>{props.id }</div>
    )
}

