import { useState } from 'react'
import './App.css'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd")
  const[to,setTo] = useState("inr")
  const[convertedAmount,setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const swap = ()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <>
      <div>
        <div
        className="w-full h-screen bg-cover bg-no-repeat justify-center 
        flex flex-wrap items-center fixed"
        style={{backgroundImage:`url('https://g.foolcdn.com/editorial/images/472790/gettyimages-611992448.jpg')`}}>
            <div>
              <div className='bg-white p-5 text-center flex flex-col'>
                <form 
                      onSubmit={(e)=>{
                        // event.preventDefault is used to 
                        e.preventDefault();
                        convert()
                      }}>
                        <div className='bg-white p-5 text-center flex flex-col'>
                          <InputBox
                          label="from"
                          amount={amount}
                          currencyOption={options}
                          onCurrencyChange={(currency)=>{
                            setAmount(currency)
                            
                          }}
                          selectCurrency={from}
                          >
                          </InputBox>
                        </div>
                        <div >
                          <button
                          onClick={swap}>
                            swap
                          </button>
                        </div>
                        <div>
                          <InputBox
                          label="from"
                          amount={convertedAmount}
                          currencyOption={options}
                          onCurrencyChange={(currency)=>{
                            setTo(currency)
                            
                          }}
                          selectCurrency={to}>
                          </InputBox>
                        </div>
                        <button>
                          Convert {from.toUpperCase()} to
                          {to.toUpperCase()}
                        </button>

                      </form>
              </div>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
