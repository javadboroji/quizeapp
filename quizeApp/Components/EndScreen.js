import React,{useContext,useState} from 'react'
import { QuizeContext } from '../Helper/Context'
import { QuizeBank } from '../Helper/QuizeBank'
import ImageEndscrren from '../asset/image/undraw_Dashboard_re_3b76.png'
export default function EndScreen() {
    const{score,setGameState,setScore}=useContext(QuizeContext) 
    const [modal, setModal] = useState(false)
    const RstartGame=()=>{
        setScore(0)
        setGameState("menu")
    }
    const showModal=()=>{
        setModal(!modal)
    }
    return (
        <div className='quision-box'>
            <h5 className="text-white">  شما ازتعداد <span className='text-red'>{QuizeBank.length}</span>
            سوال به <span>{score}</span>سوال
            پاسخ صحیح دادید
            
            </h5>
            <button className='mt-2  p-2 border-0 btn-next w-45 ' onClick={()=>RstartGame()}> باردیگر امتحان کند  </button>
            <button className='mt-2  mr-1 p-2 border-0 btn-next w-45' onClick={()=>showModal()}> مشاهده جواب ها  </button>
          
           
            <img className='image-end' src={ImageEndscrren} alt="image" />
            {modal===true&& <div className='modal-box'>
                 {QuizeBank.map((quize,i)=>
                 <div key={i}><h5 className='text-danger'>{quize.propmt}</h5>
                 <p> {quize.optionA}:A</p>
                 <p> {quize.optionB}:B</p>
                 <p>{quize.optionC}:C</p>
                 <p className='text-success'> {quize.answer} :جواب </p>
                 <button onClick={()=>showModal()} className='mt-2  mr-1 p-2 border-0 btn-close'> <i className="fa fa-times"></i> </button>
                 </div>)}
                
                </div>}
        </div>
        
    )
}
