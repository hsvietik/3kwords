import { PropTypes } from "prop-types";

import { WordWrap, SignUnknown, SignKnown } from "./Word.styled";
export const Word = ({ word }) => {
  const { english, known } = word;
  //   const { id, english, ukrainian, part, level, description } = word;
  const wordIsKnown = known;
  return (
    <WordWrap>
      <p>{english}</p>
      <button type="button">
        {wordIsKnown && <SignKnown />} {!wordIsKnown && <SignUnknown />}
      </button>
    </WordWrap>
  );
};

Word.propTypes = {
  word: PropTypes.object,
};
