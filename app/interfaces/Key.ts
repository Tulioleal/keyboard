import Key from "../components/Key";
import { IconType } from "react-icons";

// Interface for Key component
export interface Key {
  symbols: {
    symbol1: string | IconType;
    symbol2?: string | IconType;
  };
  colSpan: ColSpanClass;
  rowSpan: RowSpanClass;
  additionalClasses?: string;
  mobile: Pick<Key, "symbols" | "colSpan" | "rowSpan" | "additionalClasses">;
  mobileOnly?: boolean;
}

// Type for Key component props
export type KeyProps = Pick<Key, "symbols">;

// Enum for column and row span classes
// These classes are used to define the number of columns and rows a key should span in the grid layout
// The classes are based on Tailwind CSS grid system
export enum ColSpanClass {
  ONE = "col-span-1",
  TWO = "col-span-2",
  THREE = "col-span-3",
  FOUR = "col-span-4",
  FIVE = "col-span-5",
  SIX = "col-span-6",
  SEVEN = "col-span-7",
  EIGHT = "col-span-8",
  NINE = "col-span-9",
  TEN = "col-span-10",
  ELEVEN = "col-span-11",
  TWELVE = "col-span-12",
  THIRTEEN = "col-span-13",
  FOURTEEN = "col-span-14",
  FIFTEEN = "col-span-15",
  SIXTEEN = "col-span-16",
  SEVENTEEN = "col-span-17",
  EIGHTEEN = "col-span-18",
  NINETEEN = "col-span-19",
  TWENTY = "col-span-20",
}

export enum RowSpanClass {
  ONE = "row-span-1",
  TWO = "row-span-2",
  THREE = "row-span-3",
  FOUR = "row-span-4",
  FIVE = "row-span-5",
  SIX = "row-span-6",
  SEVEN = "row-span-7",
  EIGHT = "row-span-8",
  NINE = "row-span-9",
  TEN = "row-span-10",
  ELEVEN = "row-span-11",
  TWELVE = "row-span-12",
  THIRTEEN = "row-span-13",
  FOURTEEN = "row-span-14",
  FIFTEEN = "row-span-15",
  SIXTEEN = "row-span-16",
  SEVENTEEN = "row-span-17",
  EIGHTEEN = "row-span-18",
  NINETEEN = "row-span-19",
  TWENTY = "row-span-20",
}