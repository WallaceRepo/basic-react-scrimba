import React from 'react';
import { useState } from 'react';
import memeData from "../image/memeData.js"

export default function Form() {
     const arr = ["Thing1", "Thing2", "Thing3"]
     const [result, setResult] = React.useState("Hello");
     const [arrays, setArrays] = useState(['Cat1', 'cat2', 'cat3'])
     
     const [meme, setMeme] = useState({
             topText : '',
             bottomText: '',
             randomImage: "https://via.placeholder.com/150/92c952"
         
     })
     const [allMemeImages, setAllmemeImages] = useState(memeData)
    function addItem(e) {
        e.preventDefault();
        setArrays((prev) => [...prev, `cat ${prev.length + 1 }`] )
       // console.log(arrays)
    }
    
    function getMemeImage () {
      const memeArray = allMemeImages.data;
      console.log(memeArray.length)
      const randomNumber = Math.floor(Math.random() * memeArray.length)
       console.log(randomNumber)
      const url = memeArray[randomNumber].url;
      setMeme(prevMeme => ({
         ...prevMeme,
         randomImage: url
      }))
    }
   
     function getImage(e, name = "Sophia") {
        e.preventDefault();
       getMemeImage();

       arr.push("Thing" + (arr.length + 1))
             const date = new Date()
             const hours = date.getHours();
      let timeOfDay;
        if( hours < 11 && hours >= 4){
            timeOfDay = "morning"
        }
        else if( hours < 12 && hours > 5){
             timeOfDay = "evening"
        }
        else if( hours < 7 && hours > 5){
            timeOfDay = "afternoon"
       } else {
        timeOfDay = "night"
       }
       setResult(timeOfDay)
       return `Good ${result}` 
    }
 
  return (
   <main>
    <form>
     <div className='form1' >
      <input type="text" 
      name='name' 
      placeholder='add text'
      />
      <input type="text"
       name='second'
       placeholder='result'
       />
   </div>
    <img src = {meme.randomImage} alt=" here is" />
   <div className='form1'>
     
      <button onClick={(e)=>{getImage(e)}}>Get new meme image</button>
      <button onClick={(e)=>{addItem(e)}}>Add Item</button>
   
    <ul>
    { arr.map(ar => { 
        return  (
           <li key = {ar }>{ ar }</li>
         )
        })
     }
     <h1 > {result } </h1>
    </ul>
    <ul>
       { arrays.map(cat => <li key = {cat}>{cat}</li>) }
    </ul>
    </div> 
    </form>
    </main>
  )
}

