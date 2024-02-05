import { Item, Image, TopWrap, BottomWrap, CarName, CarPrice, DescrItem, DescrList, FavoriteBtn } from "./CarsList.styled";
import LearnBtn from "../LearnBtn/LearnBtn";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import sprite from '../../../icons/symbol-defs.svg';
import { useDispatch, useSelector } from "react-redux";
import {addFavorites, removeFavorites} from '../../../redux/operations'
import { getFavorites } from "../../../redux/selectors";


const CarsItem = ({ car }) => {

    const dispatch = useDispatch();
    const favorites = useSelector(getFavorites);

    const [modal, toggleModal] = useState(false);
    const [favorite, addFavorite] = useState(false);

    useEffect(() => {
        if (favorites.some(({ id }) => id === car.id)) {
            addFavorite(true)
        } else {
            return
        }
    },[car.id, favorites])

const onClick = () => {
        if (!favorite) {
            dispatch(addFavorites(car))
            addFavorite(!favorite)
        } else { 
        dispatch(removeFavorites(car.id))
        addFavorite(!favorite)
        }
    }

    const carLocation = car.address
        .split(",")
        .map(item => item.trim()).slice(-2);

    return (
        <Item>
            <FavoriteBtn favorite={favorite} onClick={onClick}>
                <use xlinkHref={`${sprite}#icon-heart-no-added`}></use>
            </FavoriteBtn>
            <Image src={car.img} alt='Car' />
            <TopWrap>
                <CarName>{`${car.make} ${car.model}`}</CarName>
                <CarPrice>{car.rentalPrice}</CarPrice>
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
                <LearnBtn modal={toggleModal} />
            </BottomWrap>
                {modal && <Modal car={car} modal={toggleModal}/>}
        </Item>
    )
}

export default CarsItem;