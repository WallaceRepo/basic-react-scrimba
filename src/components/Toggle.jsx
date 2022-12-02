import React, {useState} from 'react'
import img from '../logo.svg';
import Star from './Star';

export default function Toggle() {
   const [contact, setContact ] = useState({
          firstName: "Harry",
          lastName: "Potter",
          phone: "204-454-6462",
          email: "harrypotter@gmail.com",
          isFavorite: true
   })
   const [book, setBook ] = useState({
    firstName: "Harry",
    lastName: "Potter",
    phone: "204-454-6462",
    email: "harrypotter@gmail.com",
    isFavorite: true
})
  
// when using hooks, changing obj prop is different. 
// in class component, chaning obj prop is easy, automatically this.set() replaces obj prop with new one without removing or changing other props of object.
  function toggleFavorite() {
       setContact( prev => {
        return {
            ...prev, // bring all object props and spread.
            isFavorite: !prev.isFavorite
         }
       })
  }
  function toggleFavorite2() {
    setBook( prev => ({
       ...prev,
       isFavorite: !prev.isFavorite
    }))
  }
  let starIcon = contact.isFavorite ? require('../image/star.svg').default : require('../image/logo.svg').default
  let bookIcon = book.isFavorite ? require('../image/star.svg').default : require('../image/logo.svg').default
  return (
  
    <main>
       <article className='card'>
         <img src = {img} className='card-image' alt='logo'/>
         <div className='card-info'>
            <img 
                src = {starIcon}
                className = "card-favorite"
                onClick={toggleFavorite}
                alt = 'logo'
             /> 
         <p>{contact.isFavorite ? "Favorite" : "Not favorite"}</p>
         <h2 className='card-name'>
            {contact.firstName} {contact.lastName }
         </h2>
         <p>{contact.phone}</p>
         <p>{contact.email}</p>
         </div>
         <Star favorite = { contact.isFavorite } isFav = { toggleFavorite2  }  bookIcon = {bookIcon} />
       </article>
    </main>
  )
}
