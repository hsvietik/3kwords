import { useSpring, animated } from "@react-spring/web";
import PropTypes from "prop-types";

export const AnimatedComponent = ({ children }) => {
  const springs = useSpring({
    from: { y: 0 },
    to: { y: 100 },
  });

  return (
    <animated.div
      style={{
        padding: "20px",
        background: "var(--color-pink)",
        borderRadius: 8,
        ...springs,
      }}
    >
      {children}
    </animated.div>
  );
};
AnimatedComponent.propTypes = { children: PropTypes.object };
