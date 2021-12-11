import React,{useState,useContext} from 'react'
import './App.css'
import Main from './Components/Main'
import Quize from './Components/Quize'
import EndScreen from './Components/EndScreen'
import { QuizeContext } from './Helper/Context'

export default function App() {

const [gameState, setGameState] = useState('menu')
const [score, setScore] = useState(0)

  return (
    <div className="app">
      <h1 className='text-white'> Quize App</h1>
      <QuizeContext.Provider value={{gameState,setGameState,score,setScore}}>
      {gameState==="menu"&&<div> <Main /></div>}
      {gameState==="Quize"&&<div> <Quize /></div>}
      {gameState==="EndScreen"&&<div> <EndScreen /></div>}
      </QuizeContext.Provider>

      

    </div>


  )
}
