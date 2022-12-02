import React, {useState} from 'react'
import Body from "./Body";
import Header from "./Header";
import boxes from '../image/boxes';
import Box from '../components/Box';
import Blog from "../components/Blog";
import jokes from '../image/jokes';
import Forms from '../components/Forms';
import SignForm from './SignForm';
import Meme from './Meme';

export default function Similar() {

const [user, setUser] = useState("Mila");
const [myBoxes, setBox] = useState(boxes);

const darkMode = true;
 function toggle(id) {
    setBox(prevBox => {
       return prevBox.map((square)=> {
        return square.id === id ? {...square, on: !square.on} : square
       
      })
     })
 }

  return (
    
    <div className='container'>
       <Header user = { user } />
       <Body user =  { user } mode = {darkMode } />
       <div className='box-container'>
          { 
            myBoxes.map(box => (
                <Box on = {box.on}
                     id = {box.id} 
                     key = {box.id}
                     toggle = { toggle } />
              ))
          }
          {
            jokes.map( joke => (
               < Blog title = {joke.title}
                      joke = {joke.joke }
                      key = {joke.id}
                    
               />
            ) )
          }
         <Forms />
         <SignForm />
         <Meme />
       </div>

    </div>
  )
}
