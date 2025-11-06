
import { useState } from 'react'
import './App.css'

function App() {
  const [quote,setQuote] = useState("click below to generate quote!");
  const [author,setAuthor] = useState("");

  

  return (
    <>
    <div className=' h-screen  bg-[#414141] flex flex-col  items-center justify-center  text-center'>
          <h1 className='text-blue-500  font-semibold text-2xl mb-6'>
            RANDOM QUOTE GENERATOR</h1>
          <div className='w-[400px] min-h-[50px] bg-white rounded-lg shadow-md p-6 flex items-center justify-center mb-6 '>
            <p id="quote" className='text-sm '>{quote}</p>
            <p className='text-right text-gray-400 mt-4'>- {author}</p>
          </div>
          <button className='bg-green-400 text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 transition mb-3'>
            Click for a new quote
          </button>

          <button className='bg-green-400 text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 transition '>
            Speak again!
          </button>
          
        

    </div>

    </>
  )
}

export default App
