import styled from "styled-components";

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);

  @media screen and (max-width: 375px) {
    width: 100%;
    padding: 0 10px;
    flex-direction: column;
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

export {HeaderWrap}