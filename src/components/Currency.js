import React from 'react'

export default function Currency() {
    return (
        <div>
            <input type="number" className="currency-input"></input>
            <select>
                <option value="EUR">EUR</option>
            </select>
        </div>
    )
}
