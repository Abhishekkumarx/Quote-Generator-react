import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState("click below to generate quote!");
  const [author, setAuthor] = useState("");

  const apiKey = 'gTxk6uvNmVbR25DKZI4MAw==d7sDT6L7XGEK6c4j';

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
        headers: {
          'X-Api-Key': apiKey
        }
      });
      const data = await response.json();

      // Extract quote and author
      const newQuote = data[0].quote;
      const newAuthor = data[0].author;

      setQuote(newQuote);
      setAuthor(newAuthor);

      // 🔊 Automatically speak the fetched quote
      speechSynthesis.cancel(); // stop any previous speech
      const utterance = new SpeechSynthesisUtterance(newQuote);
      speechSynthesis.speak(utterance);

    } catch (error) {
      console.error("Error fetching quote: ", error);
      setQuote("Oops! Could not fetch a quote.");
      setAuthor("");
    }
  };

  return (
    <>
      <div className='h-screen bg-[#414141] flex flex-col items-center justify-center text-center'>
        <h1 className='text-blue-500 font-semibold text-2xl mb-6'>
          RANDOM QUOTE GENERATOR
        </h1>

        <div className='w-[400px] flex flex-col min-h-[50px] bg-white rounded-lg shadow-md p-6 items-center justify-center mb-6'>
          <p id="quote" className='text-sm'>{quote}</p>
          <p className='text-right text-gray-400 mt-4'>- {author}</p>
        </div>

        <button
          onClick={fetchQuote}
          className='bg-green-400 text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 cursor-pointer transition mb-3'>
          Click for a new quote
        </button>

        <button
          onClick={() => {
            speechSynthesis.cancel();
            speechSynthesis.speak(new SpeechSynthesisUtterance(quote));
          }}
          className='bg-green-400 text-black font-medium px-4 py-2 rounded-md hover:bg-green-500 cursor-pointer transition'>
          Speak again!
        </button>
      </div>
    </>
  )
}

export default App
