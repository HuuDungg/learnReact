import Header from "../layout/header"
import Footer from "../layout/footer"
import { Button, Input, Form } from "antd"
const SigninPage = () =>{
    const [firstForm] = Form.useForm()
    const onFinish = (values) => {
        console.log('Success:', values);
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
            <div style={{
                margin: '20px 20px'
            }}>
                <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
                >
                    <Input></Input>
                </Form.Item>
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
                    <Input></Input>
                </Form.Item>
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
                    <Input></Input>
                </Form.Item>
                <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone!',
                  },
                ]}
                >
                    <Input.Password></Input.Password>
                </Form.Item>
            </div>
            <Button onClick={()=>{firstForm.submit()}}>Register</Button>
        </Form>
        <Footer></Footer>
        </>
    )
}

export default SigninPage
