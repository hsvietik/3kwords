import styled from "styled-components";
import backgroundImage from "../../assets/english.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage}), var(--color-blue);
  background-repeat: no-repeat;
  /* background-position: 0px 0px; */
  background-size: 100vw;
`;
