import React, { useState, useEffect } from 'react'

export default function ApiMeme() {
   
    const [apiMeme, setApiMeme ] = useState({
        topText :"",
        bottomText: "",
        url: "https://i.imgflip.com/1bij.jpg"
    });
    const [ allMemes, setAllMemes] = useState([])

  useEffect(()=> {
      fetch('https://api.imgflip.com/get_memes')
         .then(res => res.json())
         .then(data=> setAllMemes(data.data.memes))
  },[])
  /**
   useEffect takes a function as its parameter. If that function
   returns something, it needs to be a cleanup function./which is used when component unmount and some eventlistener 
   tighed of window or outside element tighed with it. Otherwise, 
   it should return nothing. If we make it an async function, it 
   automatically returns a promise instead of a function or nothing. 
   Therefore, if you want to use async operation inside of useEffect, 
   you need to define the function separately inside of the callback
   function, as seen below:
   */
  // Async way above 
//   useEffect(()=> {
//     async function getMemes() {
//       const res = await fetch('https://api.imgflip.com/get_memes')
//       const data = await res.json()
//       setAllMemes(data.data.memes)
//     }
//     getMemes()
// },[])
  function handleChange(event) {
      const { name, value } = event.target;
      setApiMeme( prevMeme => ({
        ...prevMeme,
        [name] : value
      }))
  }
  function getMemeImage(){
    const memeArray = allMemes;
        //console.log(memeArray.length)
        const randomNumber = Math.floor(Math.random() * memeArray.length)
         //console.log(randomNumber)
        const url = memeArray[randomNumber].url;
        setApiMeme( prev => ({
            ...prev,
            url: url
        }))
  }
  return (
   <main>
    <div className='form'>
       <input type="text"
              className='form-input' 
              placeholder = "Top text"
              name = "topText"
              onChange = {handleChange}
              value = {apiMeme.topText}
              />
       <input type="text" 
              className='form-input'
              placeholder = "Bottom text"
              name = "bottomText"
              onChange = {handleChange}
              value = {apiMeme.bottomText}
              />
       <button className='form--button'
               onClick = {getMemeImage} >Get a new Meme Image</button>
    </div>
    <div className='meme'>
        <img src={apiMeme.url} alt= "meme" />
        <h2 className='meme--text top'>{apiMeme.topText}</h2>
        <h2 className='meme--text bottom'>{apiMeme.bottomText}</h2>
    </div>
    </main>
  )
}
