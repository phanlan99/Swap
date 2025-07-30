import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  CurrencyOptions = [],
  selectedCurrency = 'usd',
  amountDisabled = false,
  currencyDisable = false,
  className = '',
}) {
  const id = useId();

  return (
    <div className={`flex flex-col md:flex-row gap-4 items-center ${className}`}>
      <div className="flex flex-col flex-1">
        <label htmlFor={id} className="mb-1 text-sm font-medium text-green-900">
          {label}
        </label>
        <input
          id={id}
          type="number"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          onFocus={(e) => e.target.value === "0" && (e.target.value = "")}
          placeholder="Amount"
          className="px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-green-100"
        />
      </div>
      <div className="flex flex-col w-full md:w-48">
        <p className="mb-1 text-sm font-medium text-green-900">Currency</p>
        <select
          value={selectedCurrency}
          disabled={currencyDisable}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-green-100"
        >
          {CurrencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
