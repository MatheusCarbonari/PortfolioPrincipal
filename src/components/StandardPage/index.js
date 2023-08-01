import Footer from '../Footer'
import Menu from "../Menu";
import { Outlet } from "react-router-dom";


const StandardPage = () => {
    return (
        <>
            <Menu/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default StandardPage;