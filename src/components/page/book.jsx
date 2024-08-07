import Header from "../layout/header"
import Footer from "../layout/footer"
import { useContext, useEffect } from "react"
import { getAccountApi } from "../../service/api.user"
import { AuthContext } from '../context/auth.context';
import TableBoook from "../book/book.table";
const BookPage = () =>{
    const {user, setUser} = useContext(AuthContext);
    const {isAppLoading, setIsAppLoading} = useContext(AuthContext)
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
        <TableBoook></TableBoook>
        <Footer></Footer>
        </>
    )
}

export default BookPage