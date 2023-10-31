import { useEffect, useState } from "react";

import phrases from "../../data/phrases.json";
import { getRandom } from "../../helpers/getRandom";
import { AnimatedComponent } from "../AnimatedComponent/AnimatedComponent";

export const Loader = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  useEffect(() => {
    const randomPhrase = phrases[getRandom(0, phrases.length)];
    setRandomPhrase(randomPhrase);
  }, []);

  return (
    <>
      <AnimatedComponent>
        <p>{randomPhrase.eng}</p>
        <p>{randomPhrase.ukr}</p>
      </AnimatedComponent>
    </>
  );
};
