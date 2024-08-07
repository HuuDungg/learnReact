import { useContext } from "react"
import { AuthContext } from "../context/auth.context"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { Button, Result, message } from "antd"

const PrivateRoute = (props)=>{
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    if(user && user.id){
           return(
                    <>
                        {props.children}
                    </>
                ) 
    }else{
        message.warning('please login')
        return(
            <>
                    <Result
                        status="403"
                        title="Oops!"
                        subTitle='Forbidden - Please login'
                        extra={<Button type="primary"><Link to={'/users'}>Back Home</Link></Button>}
                    />
            </>
        )    
    }

}

export default PrivateRoute