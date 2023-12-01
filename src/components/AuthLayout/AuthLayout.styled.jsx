import styled from "styled-components";
import backgroundImageMobile from "../../assets/multiple-colored-letters-mobile.jpg";
import backgroundImageTablet from "../../assets/multiple-colored-letters-tablet.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  background-image: url(${backgroundImageMobile});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100vw 100vh;
  /* background-size: 100vh; */
  position: relative;
  @media screen and (min-width: 768px) {
    background-image: url(${backgroundImageTablet});
    background-size: 100% 100vh;
  }
`;
