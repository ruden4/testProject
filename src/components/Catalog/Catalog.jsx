import { fetchCars } from "../../redux/operations";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import PageTitle from "components/PageTitle/PageTitle";
import { CatalogWrap } from "./Catalog.styled";
import CarsList from "components/Catalog/CarsList/CarsList";

const CatalogPage = () => {

    const [page] = useState(1)
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCars(`/cars?limit=8&page=${page}`))
    }, [dispatch, page])

    return (
        <CatalogWrap>
            <PageTitle title="Catalog" />
            <CarsList/>
        </CatalogWrap>
    )
}

export default CatalogPage