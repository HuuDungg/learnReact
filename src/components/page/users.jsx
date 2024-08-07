import { fetchAllUser } from '../../service/api.service';
import Header from '../layout/header';
import Footer from '../layout/footer';
import UserTable from '../user/user.table';
import UserForm from '../user/user.form';
import { useEffect, useState } from 'react';
const UserPage = () =>{
    const [dataUsers, setDataUsers] = useState([])
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(8)
    const [total, setTotal] = useState(0)
    
    useEffect(() =>{
        loadUser()
      },[current])
    
      const loadUser = async() =>{
        const dat = await fetchAllUser(current, pageSize)
        if(dat.data){
          setCurrent(dat.data.meta.current)
          setPageSize(dat.data.meta.pageSize)
          setTotal(dat.data.meta.total)
          setDataUsers(dat.data.result)
        }
        
      }
    
    return(
        <>
            <Header></Header>
            <UserForm loadUser={loadUser}></UserForm>
            <UserTable
             loadUser={loadUser}
             current={current}
             pageSize={pageSize}
             total={total}
             dataUsers={dataUsers}
             setCurrent={setCurrent}
             setPageSize={setPageSize}
             ></UserTable>
            <Footer></Footer>
        </>
    )
}

export default UserPage