import React, { useEffect, useState } from 'react'
import Currency from './components/Currency';
import './App.css';

function App() {
  // Gets current date for retrieving updated API data
  // var today = new Date();
  // var day = today.getDate() <= 9 ? "0" + today.getDate() : today.getDate();
  // var month = today.getMonth() <= 9 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1;
  // var year = today.getFullYear();

  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions);

  // Used for calling data the first time the app loads
  useEffect(() => {
    
    fetch(`https://freecurrencyapi.net/api/v1/rates?apikey=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(json => {
        setCurrencyOptions([...Object.keys(json.data['2021-08-06'])])
    })
  }, []);
  
    return (
      <div className="App">
        <h1> Currency Converter </h1>
        <Currency currencyOptions={currencyOptions} />
        <div className="equals-sign"> = </div>
        <Currency currencyOptions={currencyOptions} />
      </div>
    );
  }

export default App;
