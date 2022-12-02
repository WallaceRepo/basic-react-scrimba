import React from 'react'

export default function Body(props) {
  return (
    <div style = { props.mode ? {backgroundColor:"burlywood"} : {backgroundColor: "purple"}}>
      <h1> Welcome : {props.user}</h1>
    </div>
  )
}


