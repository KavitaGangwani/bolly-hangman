import React, { useContext } from 'react'
import './../App.css'
import Title from './Title'
import MovieName from './MovieName'
import Keyboard from './Keyboard'

import hintimg from './../images/3176298.png'
import { myContext } from '../Context'

function Popup() {

  // to rebder hintpopup 
  const {setHintPopup,hintPopup,status,isGamerunning,playGame} = useContext(myContext)

  
    return (
      <>
      <div className='popup'>
        {isGamerunning?
        <div>
          <Title/>
          <MovieName/>
          <Keyboard/>
          <img className='hintimg' width={40} height={40} src={hintimg} alt="" onClick={()=>{setHintPopup(!hintPopup)}} />
          <button className='reset' onClick={playGame}>reset</button>
          </div> : 
          <div className='over'>
            <h1>Game Over!!</h1>
            <p>You {status}</p>
            <button className='reset' onClick={playGame}>reset</button>
            
            </div>  }
          
          
  
      </div>
      </>
    )

  
  
}

export default Popup