import { useSelector } from "react-redux";
import { getCars } from "../../../redux/selectors";

import CarsItem from "./CarsItem";
import { List } from "./CarsList.styled";

const CarsList = () => {

    const cars = useSelector(getCars)

    return (
        <List>
            {cars.map(car => <CarsItem key={car.id} car={car}/>)}
        </List>
    )
}

export default CarsList;