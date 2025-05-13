import { JSX } from "react";
import { KeyProps } from "../interfaces/Key";

function Key({
  symbols,
  doubleSymbol = false,
}:KeyProps): JSX.Element {

  return (
    <button className={`w-full h-full bg-gray-200 border border-gray-300 rounded-lg flex flex-col items-center justify-center text-xl font-bold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-200 ease-in-out`}>
      {doubleSymbol && symbols.symbol2 ? (
        <span className="text-sm text-gray-500">{symbols.symbol2}</span>
      ) : null}
      {symbols.symbol1}
    </button>
  );
}

export default Key;