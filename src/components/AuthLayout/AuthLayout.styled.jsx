import styled from "styled-components";
import backgroundImage from "../../assets/letters.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100vh;
  position: relative;
`;
