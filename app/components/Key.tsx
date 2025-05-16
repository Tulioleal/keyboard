import { JSX } from "react";
import { KeyProps } from "../interfaces/Key";

function Key({
  symbols,
}:KeyProps): JSX.Element {

  return (
    <button className="
      w-full
      h-full
      bg-black
      border
      border-black
      rounded-md
      flex
      flex-col
      items-center
      justify-center-safe
      text-lg
      font-bold
      py-2
      text-gray-200
      cursor-pointer
      transition
      duration-200
      ease-in-out
      hover:bg-gray-900
      dark:bg-gray-200
      dark:border-gray-600
      dark:text-gray-800
      dark:hover:bg-gray-300
      dark:hover:border-gray-800
    ">
      {Boolean(symbols.symbol2) && symbols.symbol2 ? (
        <span className="
          text-sm
          text-gray-300
          dark:text-gray-700
        ">{
          typeof symbols.symbol2 === "string"
            ? symbols.symbol2
            : <symbols.symbol2 />
        }</span>
      ) : null}
      {
        typeof symbols.symbol1 === "string"
          ? symbols.symbol1
          : <symbols.symbol1 />
      }
    </button>
  );
}

export default Key;