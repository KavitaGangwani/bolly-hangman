import React, { useEffect, useState } from 'react'
import { myContext } from './Context'
import Movie from './data'

function ContextProvider(props) {
// STATE 1 to render play button
 const [isButton , setIsButton] = useState(false)
//  STATE 2 to render game popup
 const [gamePopup,setGamePopup] = useState(false)
// STATE 3 to render hint popup
const [ hintPopup , setHintPopup] = useState(false)

// STATES for movie data
const [movieTitle,setMovietitle] =  useState([])
const [movieUnmasked,setMovieUnmasked] =  useState([])
const [movieDesc,setMoviedesc] =  useState('')
let array

// STATES for corrects and fails
const [corrects,setCorrects] = useState([])
const [fails,setFails] = useState([])

// STATES to check weather game is running
const [status,setStatus] = useState('')
const [isGamerunning,setGamerunning] = useState(true)



 
// FUNCTION 1 for rendering popup and getting a random movie
 const playGame = ()=>{
    setGamePopup(true)
    setIsButton(false)
    getRandom();
    setCorrects([]);
    setFails([])
    setGamerunning(true)
    setStatus('')
    
 }

//  FUNCTION 2 for getting data of a random movie 
const getRandom = ()=>{
    
    let randomMoviedata =   Movie[Math.floor(Math.random()*Movie.length)]
   
    // console.log(randomMoviedata)
    let moviename = randomMoviedata.title
    let movie = Array.from(moviename.toUpperCase())
    setMovieUnmasked(movie)
    let vowels = ['A','E','I','O','U']
    // console.log(movie)
  
     array =[]
     movie.map((v,i)=>{
      // console.log(v)
  
      if(vowels.includes(v)){
        // console.log(v ,'vowels')
        array[i] = v
      }
      else if(v === ' ' ){
        array[i] = ' '
         
      }
      else{
        array[i] = '__'
      }
  
    
  
    })
    setMovietitle(array)
    setMoviedesc(randomMoviedata.description)
   
  
}   

// FUNCTION 2 that runs on guess on click from keyboard
const onGuess = (e)=>{
  
  let letter = e.target.value
  // console.log(letter)
  if(movieUnmasked.includes(letter)){
    setCorrects([...corrects,letter])
    // console.log(corrects)
    movieUnmasked.map((v,i)=>{
      if(v===letter){
        movieTitle[i] = v
        
      }
    })
  }
  else{
    setFails([...fails,letter])
  }

}





useEffect(()=>{
  if(corrects.length && movieUnmasked.every((value, index) => value === movieTitle[index])){
    console.log('win')
    setStatus('win')
    setGamerunning(false)

  }
},[corrects])

useEffect(()=>{
  if(fails.length===9){
    console.log('lost')
    setStatus('lost')
    setGamerunning(false)
  }
},[fails])
  return (
    <myContext.Provider value={{playGame,isButton,setIsButton,gamePopup,hintPopup,setHintPopup,movieTitle,movieDesc,onGuess, corrects,fails,status,isGamerunning}}>
        {props.children}
    </myContext.Provider>
    
  )
}

export default ContextProvider