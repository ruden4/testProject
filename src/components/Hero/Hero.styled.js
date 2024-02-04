import styled from 'styled-components';

const HeroWrap = styled.div`
 display: flex;
 flex-direction: column;
 position: relative;
 padding-left: 96px;
 `;

const HeroTitle = styled.strong`
  font-size: 38px;
  padding-top: 120px;
  font-weight: 700;
  width:400px;
`;

const HeroImg = styled.img`
position: absolute;
border-left: 1px solid black;
top:0;
z-index: -1;
right: 0;
`

export { HeroWrap, HeroTitle, HeroImg };
