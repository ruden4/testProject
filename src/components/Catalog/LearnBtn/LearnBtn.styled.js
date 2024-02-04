import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  background-color: #3470ff;
  color: white;
  transition-duration: 300ms;
  border: none;
  padding: 12px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;

export {Btn}