import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import { lazy} from "react";

const Home = lazy(() => import("../pages/Home"));
const Favorites = lazy(() => import("../pages/Favorites"));
const Catalog = lazy(() => import("../pages/Catalog"));

export const App = () => {  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="favorites" element={<Favorites/>} />
          <Route path="*" redirectTo="/" element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  );
};
