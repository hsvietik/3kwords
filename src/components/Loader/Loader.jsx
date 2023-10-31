import { useEffect, useState } from "react";
import { TypeWriter } from "../../hooks/TypeWriter";
import phrases from "../../data/phrases.json";
import { getRandom } from "../../helpers/getRandom";

export const Loader = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  useEffect(() => {
    const randomPhrase = phrases[getRandom(0, phrases.length)];
    setRandomPhrase(randomPhrase);
    console.log(randomPhrase.eng);
  }, []);

  return (
    <>
      <div>Loader</div>
      <TypeWriter content={randomPhrase} speed={100} />
    </>
  );
};
