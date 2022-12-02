import React from 'react'

export default function Star(props) {

// let starIcon = props.isFavorite ? require('../image/star.svg').default : require('../image/logo.svg').default
  
return (
    <div>
          <img 
                src = {props.bookIcon}
                className = "card-favorite"
                onClick={props.isFav}
                alt = 'logo'
             />
    </div>
  )
}
