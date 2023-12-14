import { PropTypes } from "prop-types";
import { TbOvalVerticalFilled } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
export const Word = ({ word }) => {
  const { english, known } = word;
  //   const { id, english, ukrainian, part, level, description } = word;
  const wordIsKnown = known;
  return (
    <div>
      <p>{english}</p>
      <button type="button">
        {wordIsKnown && <FaHeart />} {!wordIsKnown && <TbOvalVerticalFilled />}
      </button>
    </div>
  );
};

Word.propTypes = {
  word: PropTypes.object,
};
