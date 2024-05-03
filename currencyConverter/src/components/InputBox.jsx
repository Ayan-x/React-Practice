import React ,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    className=""
}) {
    const amountInputId = useId();
  return (
    <div className={`${className} `}>
        <div>
            <label htmlFor={amountInputId}>
                {label }
            </label>
            <input type="number"
            id={amountInputId} 
            placeholder='Amount'
            disabled={amountDisable}
            value={amount}
            onChange={(e)=>onAmountChange && 
                onAmountChange(Number(e.target.value))}
             />
            <div className='w-1/2 flex flex-wrap'>
                <p>
                    Currency Type
                </p>
                <select  id="currrencyType"
                value={selectCurrency}
                onChange={(e)=>onCurrencyChange &&
                onCurrencyChange(e.target.value)}
                disabled={currencyDisable}>
                    {currencyOption.map((index,currency)=>{
                        <option key={index} value={currency}>
                        {currency}
                    </option>
                    })}
                </select>
            </div>
        </div>
    </div>
  )
}

export default InputBox; 