import React from 'react'

export default function Forms() {
    const [fullName, setFullName] = React.useState(
    { firstName:"", 
      lastName: "",
      email: "",
      state: "",
      comment:"",
      isFriendly: true,
      employment: "",
      favColor: "",
    });
   
    function handleChange(event){
      const {name, value, type, checked} = event.target;

        setFullName(prev => {
           return {
            ...prev,
            [name] : type === "checkbox" ? checked : value
           // [event.target.name]: event.target.value        // [ dynamic string variable to use as property or key ] is in ES6 called computed properties.
           }
        })
    }
    function handleSubmit(event) {
      event.preventDefault() // prevents from page refresh and data set to its unfilled version.
     // submitToApi(fullName) 
     // console.log(fullName)
    }
  return (
    <form onSubmit = {handleSubmit}>
       <input type='text'
        placeholder = "first name" 
        onChange={handleChange}
        name="firstName"
        value={fullName.firstName}
        />
        <input type='text'
        placeholder = "last name" 
        onChange={handleChange}
        name="lastName"
        value = {fullName.lastName}
        />
        <input type="email"
        placeholder = "email"
        onChange={handleChange}
        name = "email"
        value = {fullName.email} 
        />
        <input type="text" 
        placeholder='state'
        onChange={handleChange}
        name = 'state'
        value={fullName.state}
        />

        <textarea onChange={handleChange}
                  value = {fullName.comment}
                  placeholder = "Comment"
                  name='comment'
                  
        />
        <br />
        <label htmlFor="isFriendly">Are you friendly?</label> 
        <input type="checkbox"
               id="isFriendly"
               checked={fullName.isFriendly}
               onChange= {handleChange }
               name = 'isFriendly'
        />
        <fieldset>
          <legend>Current employment status</legend>
         
          <input type="radio" 
                 id = "partTime"
                 onChange = {handleChange}
                 name = 'employment'
                 value='part-time'
                 checked = {fullName.employment === "part-time"}
                 />
          <label htmlFor='partTime'>Part-time</label> <br />

          <input type="radio" id = "fullTime"
                 onChange = {handleChange}
                 name = 'employment'
                 value= "full-time"
                 checked = {fullName.employment === "full-time"}
                 />
          <label htmlFor='fullTime'>Full-time</label> <br/>

          <input type="radio" id = "unemployed"
                 onChange = {handleChange}
                 name = 'employment'
                 value = "unemployed"
                 checked = {fullName.employment === "unemployed"}
                 />
          <label htmlFor='unemployed'>Unemployed</label> <br />
       </fieldset>
       <br />
       <select id="favColor"
              value= {fullName.favColor}
              onChange = {handleChange}
              name = "favColor"
       >   <option value="">-- Choose Color --</option>
           <option value="red">Red</option>
           <option value="orange">Orange</option>
           <option value="yellow">Yellow</option>
           <option value="green">Green</option>
           <option value="blue">Blue</option>
           <option value="indigo">Indigo</option>
           <option value="violet">Violet</option>
       </select>
       <button>Button</button>
   </form>
  )
}
