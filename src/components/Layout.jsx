import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header/Header";


const Layout = () => {
    return (
        <>
            <Header/>
                <Suspense fallback={<h1>Loading....</h1>}>
                <Outlet />  
            </Suspense>
        </>
    )
}

export default Layout;