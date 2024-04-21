import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCounter(){
    if(count>=20){
      setCount(20);
    }
    else{
      setCount(prevCount=>prevCount+1);
      setCount(prevCount=>prevCount+1);
      setCount(prevCount=>prevCount+1);
      
    }
  }
  function decreaseCounter(){
    if(count<=0){
      setCount(0);
    }else{
      setCount(count-1);
    }
    
  }

  return (
    <>
      <p>count is {count}</p>
      <button onClick={increaseCounter}>Add</button>
      <br />
      <button onClick={decreaseCounter}>Sub</button>
    </>
  )
}

export default App
