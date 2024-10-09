
import { useContext, useState } from 'react';
import './App.css';
import Popup from './Components/Popup';
import Playbtn from './Components/Playbtn';
import Hintpop from './Components/Hintpop';

import { myContext } from './Context';

function App() {

// for rendering button on animation end
  
  // for rendering popup movie on play click
  const {isButton,setIsButton,gamePopup,hintPopup} = useContext(myContext)
  
  return (
    <>
    
      <div className="App">
        <div className='overlay' onAnimationEnd={()=>setIsButton(true)}>
          {isButton?<Playbtn/>:""}
          {gamePopup?<Popup/>:""}
          {hintPopup?<Hintpop/>:""}
                                

        </div>



        <div className='container'></div>


      </div>
      

    </>
    

  );
}

export default App;
