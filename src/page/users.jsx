import { Outlet } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
const UserPage = () =>{
    return(
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    )
}

export default UserPage