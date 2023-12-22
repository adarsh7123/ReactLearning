import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function message(value){

document.getElementById('thalaMessage').innerHTML = value;

}

function App() {

  let [Counter, SetCounter] = useState(0);
  // let Counter = 10;

  if(Counter === 7){
    message("THALA For a reason");
  }else{
    message('');
  }
  let reason= "THALA For a reason" ;
  const Increase = () => {
    
    if (Counter < 20) {
      SetCounter(Counter+1);
    }
   
  }
  const Decrease = () => {
  
      // alert('THALA For a reason')
     
    if (Counter > 0) {
      SetCounter(--Counter);
    }
  }


  return (
    <>
      <h1>Chai Or React Counter</h1>
      
      <div class='boxOuter'>
        <h2>Counter Value: {Counter}</h2>
        <h2 id="thalaMessage"></h2>
        <div class='box'>
        <button class='counter' onClick={Increase}> + </button>
        
        <button class='counter' onClick={Decrease}>- </button>
        </div>
      </div>
      {/* <p>footer {Counter}</p> */}
    </>
  )
}

export default App
