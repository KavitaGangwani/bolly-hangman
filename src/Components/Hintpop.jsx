import React, { useContext } from 'react'
import { myContext } from '../Context'

function Hintpop() {
  const {movieDesc} = useContext(myContext)
  return (
    <>
    <div className='hintpopup'>
        <p>{movieDesc}</p>
    </div>
    <div className='arrow'></div>
    </>
    )
}

export default Hintpop