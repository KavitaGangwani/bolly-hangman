import React, { useContext } from 'react'
import './../App.css'
import { myContext } from '../Context'

function Title() {

  const { fails } = useContext(myContext)
  const title = ['B', 'O', 'L', 'L', 'Y', 'W', 'O', 'O', 'D']

  // console.log(fails)
  if (fails.length) {
    console.log(title[fails.length - 1])
  }


  return (
    <>
      <div className="title">
        <ul>
          {title.map((v, i) => {

            const className = i < fails.length ? 'wrong' : 'right';
            return (

              <li className={className} >{v}</li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default Title