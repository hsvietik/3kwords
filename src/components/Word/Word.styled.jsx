import styled from "styled-components";
import { FaHeart } from "react-icons/fa";

export const WordWrap = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const SignUnknown = styled.div`
  width: 15px;
  height: 8px;
  border-radius: 6px;
  background-color: var(--color-turquoise);
`;
export const SignKnown = styled(FaHeart)`
  color: var(--color-pink);
`;
