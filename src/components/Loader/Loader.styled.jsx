import styled from "styled-components";

export const AnimatedComponent = styled.div`
  background: var(--color-pink);
  background: var(--background-gradient);
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
