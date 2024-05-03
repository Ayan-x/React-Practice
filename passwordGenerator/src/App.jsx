import { useState, useCallback, useEffect, useRef} from 'react'



function App() {
  const[length,setLength] = useState(8);
  const[numberAllowed,setNumberAllowed]  = useState("");
  const[charAllowed,setCharAllowed]  = useState("");
  const[password,setPassword]  = useState("");
  
  const PasswordGenerator = useCallback(
    () => {
      let pass=""
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy"
      if(numberAllowed) str+="0123456789"
      if(charAllowed)  str +="!@#$%&*~"

      for(let i=1; i<= length; i++){
        let char = Math.floor(Math.random()*str.length+1)
        pass+=str.charAt(char)
      }
      setPassword(pass);
    },
    [length,numberAllowed,charAllowed,setPassword],
  )
  // The main thing of useEffect that it will run methoc for 
  // first time when it get rendered then it there will be 
  // any changes in dependencies it will again call the 
  // function.

   useEffect(()=>{
    PasswordGenerator()
   },[length,numberAllowed,charAllowed,PasswordGenerator]) 
  //  useRef hook
  const passwordRef = useRef(null);
  const  copyPasswordToClipboard = useCallback(()=>{
    // This is used to select the content from the input field(password)
    passwordRef.current?.select() 
    // Through this we are going to select 
    passwordRef.current?.setSelectionRange(0,20)
    // This is used to copy the password(input field) 
    // to the clipboard
    window.navigator.clipboard.writeText(password)
  },[password])
  return (
    <>
    <div className='bg-black 
    w-screen min-h-screen flex flex-col '>
      <h1 className='text-4xl text-center
      text-white p-5'>
        Password Generator
      </h1>
      <div className='flex flex-col bg-gray-700'>
      <div className=' rounded-lg p-4  flex'>
        <input type="text"
        value={password}
        className='outline-none w-full py-2 px-10 rounded-lg'
        placeholder='Password'
        readOnly 
        ref={passwordRef}/>
        <button className='bg-blue-700 text-white px-3 py-1
         rounded-lg'
         onClick={copyPasswordToClipboard}
         >
          copy
        </button>
        </div>
        <div className='flex text-sm gap-x-2 text-yellow-400'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={6}
          max={20}
          value={length}
          className='cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label >Lenght:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={()=>{
            setNumberAllowed((prev)=> !prev)
           }}/>
           <label>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"  id="charAllowed"
           defaultChecked={charAllowed}
           onChange={()=>{
            setCharAllowed((prev)=>!prev)
           }}/>
           <label>Character</label>

        </div>
      </div>
      </div>
      

    </div>
    </>
  )
}

export default App
