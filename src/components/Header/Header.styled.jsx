import styled from "styled-components";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  color: var(--color-black);
  background-color: var(--color-white);
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const Logo = styled.img`
  width: 50px;
`;
export const LogoText = styled.p`
  font-size: 32px;
  font-weight: 900;
  /* text-transform: uppercase; */
  color: var(--color-purple);
`;
