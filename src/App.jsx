import { useState } from "react";
import UseCurrency from "./hooks/UseCurrency.js";
import InputBox from "./components/InputBox.jsx";

function App() {
  const [amt, setAmt] = useState();
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmt, setConvertedAmt] = useState();

  const currencies = UseCurrency(from);
  const option = Object.keys(currencies);

  const swap = () => {
    console.log("Before swap:");
    console.log("amt:", amt);
    console.log("convertedAmt:", convertedAmt);
    console.log("from:", from);
    console.log("to:", to);

    const tempAmt = amt;
    setAmt(convertedAmt);
    setConvertedAmt(tempAmt);
    setFrom(to);
    setTo(from);

    console.log("After swap:");
    console.log("amt:", convertedAmt); // This will be the new amt
    console.log("convertedAmt:", tempAmt); // This will be the new convertedAmt
    console.log("from:", to); // This will be the new from currency
    console.log("to:", from); // This will be the new to currency
  };

  const convert = () => {
    setConvertedAmt(amt * currencies[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amt={amt}
                onAmtChange={(amt) => setAmt(amt)}
                currOptions={option}
                onCurrChange={(curr) => setFrom(curr)}
                selectedCurr={from}
              ></InputBox>
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amt={convertedAmt}
                currOptions={option}
                onCurrChange={(curr) => setTo(curr)}
                selectedCurr={to}
                // amtDisabled
              ></InputBox>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
