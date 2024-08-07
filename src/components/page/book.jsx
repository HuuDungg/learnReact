import Header from "../layout/header"
import Footer from "../layout/footer"
import { useContext, useEffect, useState } from "react"
import { getAccountApi } from "../../service/api.user"
import { AuthContext } from '../context/auth.context';
import TableBoook from "../book/book.table";
import CreateBook from "../book/book.create";
const BookPage = () =>{
    const {user, setUser} = useContext(AuthContext);
    const {isAppLoading, setIsAppLoading} = useContext(AuthContext)
    const [isFormCreate, setIsFormCreate] = useState(false)
    const loadCurrentUser = async ()=>{
        const res = await getAccountApi()
        setIsAppLoading(false)
        if(res.data){
          setUser(res.data.user)
        }
        
      }  
    
      useEffect(()=>{loadCurrentUser()}, [])
    return(
        <>
        <Header></Header>
        <CreateBook 
        isFormCreate={isFormCreate}
        setIsFormCreate={setIsFormCreate}
        ></CreateBook>
        <TableBoook
        isFormCreate={isFormCreate}
        ></TableBoook>
        <Footer></Footer>
        </>
    )
}

export default BookPage