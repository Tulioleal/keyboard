// Import necessary types and icons
import { ColSpanClass, Key, RowSpanClass } from "../interfaces/Key";
import * as Icons from "react-icons/lu";
import { PiPlayPauseBold, PiControlBold } from "react-icons/pi";
import { BiSolidLeftArrow, BiSolidRightArrow, BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineEnter } from "react-icons/ai";

// Define the keyboard layout configuration
export const KEYS = [
  // First Row: Function keys and escape key
  {
    symbols: { symbol1: "esc" },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F1", symbol2: Icons.LuSunDim },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F2", symbol2: Icons.LuSun },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F3", symbol2: Icons.LuLayoutTemplate },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F4", symbol2: Icons.LuSearch },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F5", symbol2: Icons.LuMic },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F6", symbol2: Icons.LuMoon },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F7", symbol2: Icons.LuRewind },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F8", symbol2: PiPlayPauseBold },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F9", symbol2: Icons.LuFastForward },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F10", symbol2: Icons.LuVolume },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F11", symbol2: Icons.LuVolume1 },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F12", symbol2: Icons.LuVolume2 },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  // Second Row: Numbers and special characters
  {
    symbols: { symbol1: "|", symbol2: "°" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "1", symbol2: "!" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "1" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "2", symbol2: "@" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "2" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "3", symbol2: "#" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "3" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "4", symbol2: "$" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "4" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "5", symbol2: "%" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "5" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "6", symbol2: "&" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "6" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "7", symbol2: "/" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "7" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "8", symbol2: "(" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "8" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "9", symbol2: ")" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "9" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "0", symbol2: "=" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "0" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "'", symbol2: "?" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "¿", symbol2: "¡" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: Icons.LuDelete },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  // Third Row: Letters and Enter key
  {
    symbols: { symbol1: Icons.LuArrowRightToLine },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "Q" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "Q" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "W" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "W" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "E" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "E" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "R" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "R" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "T" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "T" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "Y" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "Y" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "U" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "U" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "I" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "I" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "O" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "O" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "P" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "P" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "´", symbol2: "¨" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "+", symbol2: "*" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: AiOutlineEnter },
    colSpan: ColSpanClass.THREE,
    rowSpan: RowSpanClass.FOUR,
    additionalClasses: "col-start-56",
  },
  // Fourth Row: Letters and special characters
  {
    symbols: { symbol1: Icons.LuArrowBigUpDash },
    colSpan: ColSpanClass.SEVEN,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "A" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "A" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "S" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "S" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "D" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "D" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "F" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "F" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "G" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "G" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "H" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "H" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "J" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "J" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "K" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "K" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "L" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "L" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "Ñ" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "Ñ" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "{", symbol2: "[" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "}", symbol2: "]" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  // Fifth Row: Letters and special characters
  {
    symbols: { symbol1: Icons.LuArrowBigUp },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: Icons.LuArrowBigUp },
      colSpan: ColSpanClass.SIX,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "<", symbol2: ">" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "Z" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "Z" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "X" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "X" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "C" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "C" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "V" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "V" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "B" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "B" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "N" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "N" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: "M" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "M" },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: Icons.LuDelete },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: Icons.LuDelete },
      colSpan: ColSpanClass.SIX,
      rowSpan: RowSpanClass.TWO,
    },
    mobileOnly: true,
  },
  {
    symbols: { symbol1: ",", symbol2: ";" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: ".", symbol2: ":" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "-", symbol2: "_" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: Icons.LuArrowBigUp },
    colSpan: ColSpanClass.NINE,
    rowSpan: RowSpanClass.TWO,
  },
  // Sixth Row: Control keys and space bar
  {
    symbols: { symbol1: Icons.LuBolt },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: Icons.LuBolt },
      colSpan: ColSpanClass.SIX,
      rowSpan: RowSpanClass.TWO,
    },
    mobileOnly: true,
  },
  {
    symbols: { symbol1: Icons.LuBolt },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: ",", symbol2: Icons.LuSmilePlus },
      colSpan: ColSpanClass.SIX,
      rowSpan: RowSpanClass.TWO,
    },
    mobileOnly: true,
  },
  {
    symbols: { symbol1: Icons.LuGlobe },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: Icons.LuGlobe },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: PiControlBold },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: Icons.LuOption },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: Icons.LuCommand },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: " " },
    colSpan: ColSpanClass.TWENTY,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: " " },
      colSpan: ColSpanClass.FOURTEEN,
      rowSpan: RowSpanClass.TWO,
    },
  },
  {
    symbols: { symbol1: Icons.LuCommand },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: Icons.LuOption },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: BiSolidLeftArrow },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-47 col-end-51 row-start-12",
  },
  {
    symbols: { symbol1: BiSolidUpArrow },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-51",
  },
  {
    symbols: { symbol1: BiSolidDownArrow },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-51",
  },
  {
    symbols: { symbol1: BiSolidRightArrow },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-55",
  },
  {
    symbols: { symbol1: " " },
    colSpan: ColSpanClass.TWENTY,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: "." },
      colSpan: ColSpanClass.FOUR,
      rowSpan: RowSpanClass.TWO,
    },
    mobileOnly: true,
  },
  {
    symbols: { symbol1: " " },
    colSpan: ColSpanClass.TWENTY,
    rowSpan: RowSpanClass.TWO,
    mobile: {
      symbols: { symbol1: Icons.LuSearch },
      colSpan: ColSpanClass.SIX,
      rowSpan: RowSpanClass.TWO,
    },
    mobileOnly: true,
  },
] as Key[];