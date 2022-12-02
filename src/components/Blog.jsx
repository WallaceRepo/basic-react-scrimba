import React, {useState } from 'react';

export default function Blog(props) {
    const [isShown, setIsShown] = useState(false) 
    const [messages, setMessages] =useState(['a','b'])
   function toggleShown (e){
     e.preventDefault();
      setIsShown(prev => !prev)
   }
    return (
        <div className='joke'>
            <h3>{props.title}</h3>
            <p className= {isShown ? "show":"hide"}>-{props.joke}</p>
            {isShown && <button onClick={ e=> toggleShown(e)}>Hide punchline</button>}
            {!isShown && <button onClick={ e=> toggleShown(e)}>Show punchline</button>}
             <div>
                { messages.length   === 0 ? 
                  <h1> You are all caught up! </h1> :
                  <h1>You have {messages.length} unread {messages.length > 1 ? "messages" :  "message"} </h1>
                  }
             </div>  
        </div>
     
    )
}