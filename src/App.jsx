import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from '../components/index.js'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('vnd')
  const [convertedAmount, setCovertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setCovertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setCovertedAmount(amount * currencyInfo[to])
    console.log(options);
    console.log(currencyInfo);
    
    
  }


  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/1200x/1f/66/63/1f6663f5b51454f2245bdeecef136d94.jpg")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className='bg-green-400 p-4 rounded-2xl text-2xl text-green-900'>
        <div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault()
              convert()
            }}
          >
            <div>
              <InputBox
                label="from"
                amount={amount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={from}
              />
            </div>
            <div>
              <button
                onClick={swap}
                type="button"
                className="w-full mt-4 bg-white text-green-800 font-semibold px-4 py-2 rounded-xl shadow hover:bg-green-200 transition"
              >
                Swap
              </button>
            </div>
            <div>
              <InputBox
                label="to"
                amount={convertedAmount}
                CurrencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                selectedCurrency={to}
                amountDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-700 text-white font-bold px-4 py-2 rounded-xl hover:bg-green-800 transition"
            >
              Convert
            </button>
          </form>
        </div>
      </div>
    </div>


  )
}

export default App
