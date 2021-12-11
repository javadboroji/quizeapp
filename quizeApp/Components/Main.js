import React,{useContext} from 'react'
import { QuizeContext } from '../Helper/Context'
import StartQuiz from '../asset/image/undraw_interaction_design_odgc.png'
export default function Main() {
    const{gameState,setGameState}=useContext(QuizeContext) 
    return (
        <div className="main">
            <button className='btn-start' onClick={()=>{setGameState("Quize")}}> Start Quize</button>
            <img className='image-end' src={StartQuiz} alt='image'/>
        </div>
    )
}
