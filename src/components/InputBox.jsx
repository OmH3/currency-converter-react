import React, { useId } from "react";

function InputBox({
  label,
  amt,
  onAmtChange,
  onCurrChange,
  currOptions = [],
  selectedCurr = "USD",
  className = "",
}) {
  const id = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1-2'>
      <label htmlFor={id} className='text-black/40 mb-2 inline-block'>{label}</label>
      <input
        id={id}
        className='outline-none w-full bg-transparent py-1.5'
        type="number"
        value={amt}
        placeholder="Please Enter Amount...."
        onChange={(e) => {
          onAmtChange && onAmtChange(Number(e.target.value));
        }}
      />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
      <p className="text-black/40 mb-2 w-full">Currency Type</p>
      <select
        value={selectedCurr}
        onChange={(e) => {
          onCurrChange && onCurrChange(e.target.value);
        }}
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
      >
        {currOptions.map((curr) => (
          <option key={curr} value={curr}>
            {curr}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
}

export default InputBox;
