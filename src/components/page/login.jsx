import Header from "../layout/header"
import Footer from "../layout/footer"
import { Button, Input, Form, Row, Col, message } from "antd"
import { Link } from "react-router-dom"
const LoginPage = () =>{
    const [loginForm] = Form.useForm()
    const onFinish = (values) => {
        console.log('Success:', values);
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
                                <Button type="primary" onClick={()=>{loginForm.submit()}}>
                                    Login
                                </Button>
                                </div>
                            </Col>
                        </Row>

                        <Row justify={"center"}>
                            <Col xs={24} md={8}>
                                <Link to={"/register"}>Sign Up now</Link>
                            </Col>
                        </Row>
                </Form>
            </div>
        <Footer></Footer>
        </>
    )
}

export default LoginPage