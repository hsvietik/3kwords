import styled from "styled-components";

export const AnimatedComponent = styled.div`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  height: 100vh;
  width: 100vw;
  /* background: var(--color-pink);
  background: var(--background-gradient); */
  background: linear-gradient(
    -45deg,
    var(--color-purple),
    var(--color-pink),
    var(--color-blue),
    var(--color-turquoise)
  );
  animation: gradient 5s ease infinite;
  background-size: 200% 200%;
  padding: 20px;
  border-radius: 6px;
  font-weight: 800;
  font-size: 20px;
  &.loader-appear {
    opacity: 0;
  }
  &.loader-appear-active {
    opacity: 1;
    transition: opacity 3000ms ease;
  }
  &.loader-appear-done {
    opacity: 1;
  }
`;
