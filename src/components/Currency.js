import React from 'react'

export default function Currency(props) {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        initialAmount,
        onChangeAmount
     } = props

    return (
        <div>
            <input type="number" className="currency-input" value={initialAmount} min="0" onChange={onChangeAmount}></input>
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
