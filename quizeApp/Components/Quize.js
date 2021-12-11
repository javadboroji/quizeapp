import React,{useState,useContext} from 'react'
import { QuizeContext } from '../Helper/Context'
import { QuizeBank } from '../Helper/QuizeBank'
export default function Quize() {
    const [currentQuesion, setCurrentQuesion] = useState(0)
    const{score,setScore,setGameState}=useContext(QuizeContext) 
    const [optionChosen, setOptionChosen] = useState("")

    const nextQuizsion=()=>{
        if(QuizeBank[currentQuesion].answer== optionChosen){
            setScore(score+1)
        }
        setCurrentQuesion(currentQuesion+1)
    }
    const finshHandler=()=>{
        if(QuizeBank[currentQuesion].answer== optionChosen){
            setScore(score+1)
        } 
        setGameState("EndScreen");
    }
    return (
        <div className='quision-box'>
            <h1 className='text-white'> {QuizeBank[currentQuesion].propmt} </h1>
            <div className='d-flex flex-column p-3  '>
            <button className='mt-2 p-2 border-0 btn-item' onClick={()=>setOptionChosen("A")}> {QuizeBank[currentQuesion].optionA}</button>
            <button className='mt-2 p-2 border-0 btn-item'  onClick={()=>setOptionChosen("B")}> {QuizeBank[currentQuesion].optionB}</button>
            <button className='mt-2 p-2 border-0 btn-item'  onClick={()=>setOptionChosen("C")}> {QuizeBank[currentQuesion].optionC}</button>
            { currentQuesion == QuizeBank.length-1?(
                <button className='mt-2 p-2 border-0 btn-next w-50 ' onClick={()=> finshHandler()}> پایان</button>
            ):(
                <button className='mt-2 p-2 border-0 btn-next w-50 'onClick={()=>nextQuizsion()}> بعدی</button>
            )}
          
            </div>
        </div>
    )
}
