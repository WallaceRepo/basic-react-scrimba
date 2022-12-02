import React from 'react'

export default function StarWar() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    // 1. GET the data (fetch)
    // 2. Save the data to state
 
   
    // side effects
    // useEffect's inside callback function runs after every render method run.
    // dependency array limits the cb to run. It runs only once when empty array
    // 
    function handleChange(){
      setCount(count + 1)
    }
    React.useEffect(function() {
      
       fetch(`https://swapi.dev/api/people/${count}/`)
          .then(res => res.json())
          .then(data => setStarWarsData(data))
    }, [count])
  
  return (
    <div>
      <button type='button' onClick={handleChange}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2) }</pre>
    </div> 
  )
}
