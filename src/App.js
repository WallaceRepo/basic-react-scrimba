import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Form from './components/Form'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import Similar from './components/Similar';
import StarWar from './components/StarWar'
import ApiMeme from './components/ApiMeme'
import WindowTracker from './components/WindowTracker'

import './App.css'
function App() {
  const [mode, setMode ] = useState(false)
  function handleMode(){
     setMode( prevMode => !prevMode)

  }

  return (
    <div >
      <Navbar mode = {mode} toggleMode = {handleMode }/>
      <div className= {"App " + (mode ? "" : "dark")}>
      <Main />
      <Counter />
      <Form />
      <Toggle />
      <Similar />
      <StarWar />
      <ApiMeme />
      <WindowTracker />
      </div>
    </div>
  )
}

export default App
