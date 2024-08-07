import Header from "../layout/header"
import Footer from "../layout/footer"
import { Button, Input, Form, Row, Col, message } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { loginUserApi } from "../../service/api.service"
import { useContext, useState } from "react"
import { AuthContext } from "../context/auth.context"
const LoginPage = () =>{
    const [loginForm] = Form.useForm()
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)
    const onFinish = async (values) => {
        setIsloading(true)
        const res = await loginUserApi(values.email, values.password)
        if(res.data){
            message.success("login successfuly")
            setUser(res.data.user)
            localStorage.setItem('access_token', res.data.access_token)
            navigate('/users')
        }else{
            message.error("something went wrong")
        }
        setIsloading(false)
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <Header></Header>
            <div style={{
                margin: '20px 20px'
            }}>
                <Form
                    layout="vertical"
                    form={loginForm}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    >
                        <Row justify={"center"}>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                    label='Email'
                                    name="email"
                                    rules={
                                        [
                                        {
                                            required: true,
                                            message: "Email not be empty"
                                        },
                                        {
                                            type: "email",
                                            message:'Email is invalid'
                                        }
                                    ]
                                    }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Row justify={"center"}>
                                <Col xs={24} md={8}>
                                    <Form.Item
                                    label='Password'
                                    name="password"
                                    rules={
                                        [
                                        {
                                            required: true,
                                            message: "Password not be empty"
                                        },
                                        {
                                            min: 5,
                                            message:'Password is to short'
                                        }
                                    ]
                                    }
                                    >
                                        <Input.Password></Input.Password>
                                    </Form.Item>
                                </Col>
                        </Row>

                        <Row justify={"center"}>
                            <Col xs={24} md={8}>
                                <div>
                                <Button 
                                loading={isLoading}
                                type="primary" onClick={()=>{loginForm.submit()}}>
                                    Login
                                </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row justify={"center"}>
                            <Col xs={24} md={8}>
                                <Link to={"/register"}>Register now</Link>
                            </Col>
                        </Row>
                </Form>
            </div>
        <Footer></Footer>
        </>
    )
}

export default LoginPage