import React, { useContext } from 'react'
import { myContext } from '../Context'

function Playbtn() {
  const {playGame} = useContext(myContext)
  
  return (
    <>
    <button className='playBtn' onClick={playGame}>PLAY</button>
    </>
  )
}

export default Playbtn