import { Outlet } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserTable from '../user/user.table';
import UserForm from '../user/user.form';
const UserPage = () =>{
    return(
        <>
            <Header></Header>
            <UserForm></UserForm>
            <UserTable></UserTable>
            <Footer></Footer>
        </>
    )
}

export default UserPage