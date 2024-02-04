import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 375px) {
    width: 100%;
    padding: 0 10px;
    height: 100%;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1440px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 96px;
  }
`;

export { Wrapper }