import React, { useContext } from 'react'
import './../App.css'
import { myContext } from '../Context'

function MovieName() {
  const {movieTitle} = useContext(myContext)
 
  // console.log(movieTitle)

  return (
    <>
    <div className="movieName">
        <ul className='displayUL'>
            {movieTitle.map((v,i)=>{
              return(
                <li>{v}</li>
              )
            })}
        </ul>
    </div>
    </>
  )
}

export default MovieName