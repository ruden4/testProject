import styled from "styled-components"

const List = styled.ul`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px 29px;
    max-width: 1300px;
`

const Item = styled.li`
    max-width: 274px;
    display: flex;
    flex-direction: column;
    position: relative;
`
const Image = styled.img`
    border-radius: 14px;
    width: 274px;
    height:268px;
    object-fit: cover;
    margin-bottom: 14px;
`
const CarName = styled.h3`
font-size: 16px;
font-weight: 500;
line-height: 1.5;
`

const CarPrice = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

const TopWrap = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 8px;
`
const BottomWrap = styled.div`
`;

const DescrList = styled.ul`
    height: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 0 12px;
    overflow: hidden;
    margin-bottom: 28px;
`;

const DescrItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
`;

const FavoriteBtn = styled.svg`
width: 38px;
height: 38px;
position: absolute;
top:0;
right:0;
padding: 10px;
cursor:pointer;
fill: ${(props) => props.favorite ? '#fff' : 'none'};
`

export {
  List,
  FavoriteBtn,
  Item,
  Image,
  TopWrap,
  BottomWrap,
  CarName,
  CarPrice,
  DescrList,
  DescrItem,
};
