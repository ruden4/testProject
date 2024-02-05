import styled from 'styled-components';

const HeroWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 96px;
`;

const HeroTitle = styled.strong`
  cursor: default;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 45px;
  padding-top: 120px;
  font-weight: 600;
  width: 400px;
  color: #fff;
  background-color: #00000090;
  min-height: 90.5vh;
  position: relative;
  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 30px;
  }
`;

const HeroImg = styled.img`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  z-index: -1;
  max-height: 90.5vh;
  min-height: 90.5vh;
  object-fit: cover;
`;

const CallBtn = styled.a`
  text-align: center;
  color: white;
  transition-duration: 300ms;
  border: none;
  padding: 12px 20px 12px 20px;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.42;
  border-radius: 12px;
  max-width: 250px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: 1px solid white;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: #00000090;
    border-color: black;
  }
`;

const TopWrap = styled.div`
  display: flex;
  align-items: center;
`;

export { HeroWrap, HeroTitle, HeroImg, TopWrap, CallBtn };
