import styled from 'styled-components';

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(46, 47, 66, 0.4);
  width: 100%;
  height: 100%;
  transition: opacity 250ms linear, visibility 250ms linear;
  z-index: 30;
  & ul {
    margin-bottom: 0;
  }
`;

const ModalWindow = styled.div`
  max-width: 541px;
  min-height: 576px;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1) rotate(0deg);
  transition-duration: 550ms;
  transition-timing-function: ease-in;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 40px;
  z-index: 31;
`;

const CloseBtn = styled.button`
border: 6px solid transparent;
  background-color: transparent;
  position: absolute;
  top:0;
  right:0;
  padding-left:6px;
  cursor:pointer
`;

const CloseIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: black;
  stroke: black;
`;

const CarImg = styled.img`
  border-radius: 14px;
  width: 461px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
`;

const CallBtn = styled.a`
margin-top: auto;
  background-color: #3470ff;
  color: white;
  transition-duration: 300ms;
  border: none;
  padding: 12px 50px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42;
  border-radius: 12px;
  max-width: 168px;
  cursor: pointer;
  &:hover {
    background-color: #0b44cd;
  }
`;

const Description = styled.p`
margin-bottom:40px`

export { Description, ModalWrap, ModalWindow, CloseBtn, CloseIcon, CarImg, CallBtn };
