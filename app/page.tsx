"use client"

import { useWindowSize } from "@uidotdev/usehooks";
import Key from "./components/Key";
import { KEYS } from "./const/Keys";
import { Sizes } from "./const/Sizes";

export default function Home() {
  const { width } = useWindowSize()

  if (!width) return null;

  return (
    <main className="flex container m-auto my-10">
      <div className="
        w-full
        p-1
        grid
        grid-cols-40
        grid-rows-10
        gap-0.5
        sm:gap-1
        md:gap-2
        lg:grid-cols-58
        lg:grid-rows-12
      ">
         {
          KEYS.map((key, index) => {
            const { symbols,colSpan, rowSpan, additionalClasses, mobile, mobileOnly } = key;
            return (
              <div key={index}
                className={`
                  min-h-8.5
                  block
                  ${width >= Sizes.LG || !Boolean(mobile) ? colSpan : mobile.colSpan}
                  ${width >= Sizes.LG || !Boolean(mobile) ? rowSpan : mobile.rowSpan}
                  ${width >= Sizes.LG || !Boolean(mobile) ? additionalClasses : mobile.additionalClasses}
                  ${Boolean(mobile) ||  width >= Sizes.LG ? "block" : "hidden"}
                  ${mobileOnly ? "block lg:hidden" : ""}
                `}
              >
                <Key symbols={ width >= Sizes.LG || !Boolean(mobile) ? symbols : mobile.symbols} />
              </div>
            );
          })
        }
      </div>
    </main>
  );
}