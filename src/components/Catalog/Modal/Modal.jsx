import { ModalWrap,Description, ModalWindow, CloseBtn, CloseIcon, CarImg, CallBtn } from "./Modal.styled"
import sprite from '../../../icons/symbol-defs.svg';
import { TopWrap, BottomWrap, CarName, DescrItem, DescrList,  } from "../CarsList/CarsList.styled";

const Modal = ({ car, modal }) => {

     const carLocation = car.address
        .split(",")
        .map(item => item.trim()).slice(-2);

    return (
        <ModalWrap>
            <ModalWindow>
                <CloseBtn onClick={() => modal(false)}>
                    <CloseIcon>
                        <use xlinkHref={`${sprite}#icon-close`}></use>
                    </CloseIcon>
                </CloseBtn>
                <CarImg src={car.img} alt='Car' />
                <TopWrap>
                <CarName>{`${car.make} ${car.model}, ${car.year}`}</CarName>
            </TopWrap>
            <BottomWrap>
                <DescrList>
                    <DescrItem>{carLocation[0]}</DescrItem>
                    <DescrItem>{carLocation[1]}</DescrItem>
                    <DescrItem>{car.rentalCompany}</DescrItem>
                    <DescrItem>{car.type}</DescrItem>
                    <DescrItem>{car.model}</DescrItem>
                    <DescrItem>{car.mileage}</DescrItem>
                    <DescrItem>{car.functionalities[0]}</DescrItem>
                </DescrList>
                    <Description>{car.description}</Description>
                    <CallBtn href="tel:+74951111111">Rental car</CallBtn>
            </BottomWrap>
            </ModalWindow>
        </ModalWrap>
    )
}

export default Modal