import React, { useEffect, useState } from 'react'
import Currency from './components/Currency';
import './App.css';

const BASE_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}`;

function App() {
  // Requesting and retrieving API data the first time the app loads
  const [currencyOptions, setCurrencyOptions] = useState([]);

  // Setting initial currencies
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  // Setting initial amounts
  const [initialAmount, setInitialAmount] = useState(1);

  // Checks if amount in from currency field was changed
  const [exchangeRate, setExchangeRate] = useState()
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);
  
  // Currency conversion
  let toAmount, fromAmount
  if (amountFromCurrency) {
    fromAmount = initialAmount;
    toAmount = initialAmount * exchangeRate;
  }
  else {
    toAmount = initialAmount;
    fromAmount = initialAmount / exchangeRate;
  }
  
  // Called when the app first loads
  useEffect(() => {
    fetch(`${BASE_URL}/latest/EUR`)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([...Object.keys(data.conversion_rates)])
        setFromCurrency(data.base_code)
        setToCurrency("USD");
        setExchangeRate(data.conversion_rates["USD"])
    })
  }, []);

  // Called when fromCurrency or toCurrency changes
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.conversion_rate))
    }
  }, [fromCurrency, toCurrency])

  function handeFromAmountChange(e) {
    setInitialAmount(e.target.value);
    setAmountFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setInitialAmount(e.target.value);
    setAmountFromCurrency(false);
  }
  
    return (
      <div className="App">
        <h1> Currency Converter </h1>
        <Currency 
          currencyOptions={currencyOptions} 
          selectedCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          initialAmount={fromAmount}
          onChangeAmount={handeFromAmountChange}
        />
        <div className="equals-sign"> = </div>
        <Currency 
          currencyOptions={currencyOptions} 
          selectedCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          initialAmount={toAmount}
          onChangeAmount={handleToAmountChange}
        />
      </div>
    );
  }

export default App;
