import React from 'react'

export default function Currency(props) {
    const {
        currencyOptions
     } = props

    return (
        <div>
            <input type="number" className="currency-input"></input>
            <select>
                {currencyOptions.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}
