import { fetchAllUser } from '../../service/api.service';
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserTable from '../user/user.table';
import UserForm from '../user/user.form';
import { useEffect, useState } from 'react';
const UserPage = () =>{
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() =>{
        loadUser()
      },[])
    
      const loadUser = async() =>{
        const dat = await fetchAllUser()
        setDataUsers(dat.data)
      }
    return(
        <>
            <Header></Header>
            <UserForm loadUser={loadUser}></UserForm>
            <UserTable loadUser={loadUser} dataUsers={dataUsers}></UserTable>
            <Footer></Footer>
        </>
    )
}

export default UserPage