import { ColSpanClass, Key, RowSpanClass } from "../interfaces/Key";
import * as ICONS from "@/app/icons/index"

export const KEYS = [
  // First Row
  {
    symbols: { symbol1: "esc" },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F1", symbol2: ICONS.sun_low },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F2", symbol2: ICONS.sun_high },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F3", symbol2: ICONS.layout },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F4", symbol2: ICONS.search },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F5", symbol2: ICONS.microphone },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F6", symbol2: ICONS.moon },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F7", symbol2: ICONS.rewind },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F8", symbol2: ICONS.play_pause },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F9", symbol2: ICONS.forward },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F10", symbol2: ICONS.mute },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F11", symbol2: ICONS.volume_down },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F12", symbol2: ICONS.volume_up },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  // Second Row
  {
    symbols: { symbol1: "|", symbol2: "°" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "1", symbol2: "!" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "2", symbol2: "@" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "3", symbol2: "#" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "4", symbol2: "$" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "5", symbol2: "%" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "6", symbol2: "&" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "7", symbol2: "/" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "8", symbol2: "(" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "9", symbol2: ")" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "0", symbol2: "=" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
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
    symbols: { symbol1: ICONS.delete_icon },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  // Third Row
  {
    symbols: { symbol1: ICONS.tab },
    colSpan: ColSpanClass.SIX,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "Q" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "W" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "E" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "R" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "T" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "Y" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "U" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "I" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "O" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "P" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
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
    symbols: { symbol1: "enter" },
    colSpan: ColSpanClass.THREE,
    rowSpan: RowSpanClass.FOUR,
    additionalClasses: "col-start-56",
  },
  // fourth row
  {
    symbols: { symbol1: ICONS.caps },
    colSpan: ColSpanClass.SEVEN,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "A" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "S" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "D" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "F" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "G" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "H" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "J" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "K" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "L" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "Ñ" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
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
  // Fifth row
  {
    symbols: { symbol1: ICONS.shift },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
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
  },
  {
    symbols: { symbol1: "X" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "C" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "V" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "B" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "N" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "M" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
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
    symbols: { symbol1: ICONS.shift },
    colSpan: ColSpanClass.NINE,
    rowSpan: RowSpanClass.TWO,
  },
  // Sixth row
  {
    symbols: { symbol1: ICONS.globe, symbol2: "fn" },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "control", symbol2: ICONS.control },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "option", symbol2: ICONS.option },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "command" },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: " " },
    colSpan: ColSpanClass.TWENTY,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "command" },
    colSpan: ColSpanClass.FIVE,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: "option", symbol2: ICONS.option },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.TWO,
  },
  {
    symbols: { symbol1: ICONS.left_key },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-47 col-end-51 row-start-12",
  },
  {
    symbols: { symbol1: ICONS.up_key },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-51",
  },
  {
    symbols: { symbol1: ICONS.down_key },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-51",
  },
  {
    symbols: { symbol1: ICONS.right_key },
    colSpan: ColSpanClass.FOUR,
    rowSpan: RowSpanClass.ONE,
    additionalClasses: "col-start-55",
  },
] as Key[]