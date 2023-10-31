import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const TypeWriter = (props) => {
  const { content, speed } = props;
  const [displayedContent, setDisplayedContent] = useState("");
  const [index, setIndex] = useState(0);
  console.log(props);
  useEffect(() => {
    const animKey = setInterval(() => {
      setIndex((index) => {
        if (index >= content.length - 1) {
          clearInterval(animKey);
          return index;
        }
        return index + 1;
      });
    }, speed);
  }, []);

  useEffect(() => {
    console.log(displayedContent);
    console.log(content);
    setDisplayedContent(displayedContent + content[index]);
  }, [index]);

  return <p>{displayedContent}</p>;
};
TypeWriter.propTypes = {
  content: PropTypes.string,
  speed: PropTypes.number,
};
