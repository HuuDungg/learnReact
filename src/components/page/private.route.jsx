import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Button, Result, message } from "antd"
import Header from "../layout/header"
import { Footer } from "antd/es/layout/layout"

const PrivateRoute = (props)=>{
    const {user} = useContext(AuthContext)
    if(user && user.id){
           return(
                    <>
                        {props.children}
                    </>
                ) 
    }else{
        return(
            <>
                <Header></Header>
                    <Result
                        status="403"
                        title="Oops!"
                        subTitle='Forbidden - Please login'
                        extra={<Button type="primary"><Link to={'/users'}>Back Home</Link></Button>}
                    />
                <Footer></Footer>
            </>
        )    
    }

}

export default PrivateRoute