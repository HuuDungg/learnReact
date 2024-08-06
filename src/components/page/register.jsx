import Header from "../layout/header"
import Footer from "../layout/footer"
import { Button, Input, Form, Row, Col, message } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { registerUserApi } from "../../service/api.service"
const RegisterPage = () =>{
    const [firstForm] = Form.useForm()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values)
        const res = await registerUserApi(values.fullName, values.email, values.password, values.phone)
        if(res.data){
            message.success("register successfuly")
            navigate('/login')
        }else{
            message.error("something went wrong")
        }
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>
        <Header></Header>
        <Form
            form={firstForm}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
        >
            <Row justify={"center"}>
                <Col xs={24} md={8} >
                    <Form.Item
                        label="Full Name"
                        name="fullName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your fullName!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Form.Item
                        label="Phone number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Wrong format!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <div>
                    <Button type="primary" onClick={()=>{firstForm.submit()}}>
                        Register
                    </Button>
                    </div>
                </Col>
            </Row>

            <Row justify={"center"}>
                <Col xs={24} md={8}>
                    <Link to={"/login"}>Login now</Link>
                </Col>
            </Row>

        </Form>
        <Footer></Footer>
        </>
    )
}

export default RegisterPage
