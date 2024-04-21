import { useState } from 'react'

import './App.css'

function App() {
  const [bgColor,setbgColor] = useState('olive');
  function colorhandler(){
    setbgColor('black')
  }
  return (
    < >
    <div className={`min-h-screen w-screen`} 
    style={{backgroundColor:bgColor}}>
      <button className='bg-black text-white
      p-4 rounded-lg '
      onClick={colorhandler}>
        Black
      </button>
      <button className='bg-green-800 text-white
      p-4 rounded-lg '
      onClick={()=>setbgColor("green")}>
        green
      </button>
      <button className='bg-yellow-500 text-white
      p-4 rounded-lg '
      onClick={()=>setbgColor("olive")}>
        Olive
      </button>
    </div>
      
    </>
  )
}

export default App
