import Key from "./components/Key";
import { KEYS } from "./const/Keys";

export default function Home() {
  return (
    <main className="flex container m-auto my-10">
      <div className="grid grid-cols-58 grid-rows-24 gap-2 p-1 w-full">
        {
          KEYS.map((key, index) => {
            const { symbols,colSpan, rowSpan, additionalClasses } = key;
            return (
              <div key={index}
                className={`
                  ${colSpan}
                  ${rowSpan}
                  ${additionalClasses}
                  // TODO: create the nudge for the enter key
                `}
              >
                <Key symbols={symbols} />
              </div>
            );
          })
        }
      </div>
    </main>
  );
}