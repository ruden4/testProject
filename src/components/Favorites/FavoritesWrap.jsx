import PageTitle from "components/PageTitle/PageTitle"
import { Wrap } from './FavoritesWrap.styled'
import { getFavorites } from "../../redux/selectors"
import { useSelector } from "react-redux"
import { List } from "components/Catalog/CarsList/CarsList.styled";
import CarsItem from "components/Catalog/CarsList/CarsItem";

const FavoritesWrap = () => {

    const favorites = useSelector(getFavorites)

    return (
        <Wrap>
            <PageTitle title={"Favorites"} />
            <List>
                {favorites.map(car => <CarsItem key={car.id} car={car}/>)}
            </List>
        </Wrap>
    )
}

export default FavoritesWrap