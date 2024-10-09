import React, { useContext } from 'react'
import './../App.css'
import { myContext } from '../Context';




function Keyboard() {

    const alphabets = ()=>{
        let result = [];
        let alphabet;
        for( let i=65; i<(65+26); i++){
            alphabet = String.fromCharCode(i);
            result.push(alphabet)    
        }
        return result
    }

    const letters = alphabets();
    // console.log(letters)
    // calling the alphabet function it returns alphabets that will be stored in letters

    const {onGuess,corrects,fails,movieTitle} = useContext(myContext)

    
  return (
    <>
    <div className="keyboard">
        {letters.map((v,i)=>{
            return(
                <button  className='button' disabled ={corrects.includes(v)||fails.includes(v)|| movieTitle.includes(v)} key={i} value={v} onClick={(e)=>{
                    onGuess(e)
                }} >{v}</button>
            )
        })}

    </div>
    </>
  )
}

export default Keyboard