import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import phrases from "../../data/phrases.json";
import { getRandom } from "../../helpers/getRandom";
import { AnimatedComponent } from "./Loader.styled";

export const Loader = () => {
  const [randomPhrase, setRandomPhrase] = useState("");
  useEffect(() => {
    const randomPhrase = phrases[getRandom(0, phrases.length)];
    setRandomPhrase(randomPhrase);
  }, []);

  return (
    <CSSTransition in={false} appear={true} timeout={3000} classNames="loader">
      <AnimatedComponent>
        <p>{randomPhrase.eng}</p>
        <p>{randomPhrase.ukr}</p>
      </AnimatedComponent>
    </CSSTransition>
  );
};
