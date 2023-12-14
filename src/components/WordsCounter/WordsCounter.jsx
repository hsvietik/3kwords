import { Word } from "../Word/Word";
import words from "../../data/words.json";
export const WordsCounter = () => {
  return (
    <>
      {words.map((word) => {
        return <Word word={word} key={word.id} />;
      })}
    </>
  );
};
