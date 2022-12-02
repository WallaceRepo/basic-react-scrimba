import React, { useState } from 'react'

export default function SignForm() {
    const [userData, setUserData] = useState({
               email: "",
               password: "",
               confirmPassword:"",
               newsletter: false,
               match:false,
    });
    
    function handleChange(event) {
         const { name, value, type, checked } = event.target; // target is the modified element or target ele
         
         setUserData( prev => {
             return  {...prev, 
             [name] : type === "checkbox" ? checked : value
             }
            })
    }
   function handleSubmit (e){
         e.preventDefault();
        if(userData.password === userData.confirmPassword) {
            console.log("successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="email" 
               name = "email"
               placeholder = "email"
               onChange = {handleChange}
               value = {userData.email}
          />
        <input type ="password" 
               name = "password"
               onChange={handleChange}
               value = {userData.password}
        />
        <input type ="password" 
               name = "confirmPassword"
               onChange={handleChange}
               placeholder = "Confirm password"
               value={userData.confirmPassword }
        /><br/>
        <input type = "checkbox" 
               id = "newsletter"
               name = "newsletter"
               checked = {userData.newsletter}
               onChange = {handleChange}
        />
        <label htmlFor = "newsletter">I want to join the newsletter</label>
        {/* <p className={ userData.newsletter ? "show" : "hide" }>Thanks for signing up for our newsletter! </p>  */}
        { userData.newsletter && <p>I want to join the newsletter</p>}
        
       <button>Sign up</button>
    </form>
  )
}
