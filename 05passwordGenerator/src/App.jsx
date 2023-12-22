import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setPassword(password);


  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])


  return (
    <>


      <div className="flex items-center justify-center h-screen" >
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-gray-800 bg-orange-500">


          <h1 className="text-3xl text-center font-semibold">Password Generator</h1>


          <div className="flex shadow rounded-lg overflow-hidden mt-8 mb-4">
            <input type="text" value={password} className="outline-none w-full py-1 px-3 " placeholder='Password Generate' readOnly ref={passwordRef} />
            <button className="bg-gray-800 hover:bg-gray-600 px-3 py-1 text-white font-semibold"
              onClick={copyPasswordToClipboard}>Copy</button>

          </div>
          <div className='flex text-sm gap-x-2'>
            <div className="flex text-sm gap-x-1">
              <input type='range' min={6} max={50} value={length} className="cursor-pointer" onChange={(e) => { setLength(e.target.value) }} />
              <label className="text-white">Length: {length}</label>
            </div>
            <div className="flex text-sm gap-x-1">
              <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
              <label htmlFor="numberInput" className="text-white">Number</label>
            </div>
            <div className="flex text-sm gap-x-1">
              <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
              <label htmlFor="characterInput" className="text-white">Special-Character</label>
            </div>

          </div>
          
          <h3 className="text-gray-950 shadow-2xl mt-3 text-end ">:-made by Adarsh Verma </h3>
        </div>


      </div>
    </>
  )
}

export default App
