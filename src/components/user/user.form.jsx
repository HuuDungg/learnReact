import React, { useState } from 'react';
import { Button, Checkbox, Descriptions, Form, Input, message, notification } from 'antd';
import { createUserApi } from '../../service/api.service';
const UserForm = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
   const handleClickButton = async () =>{
           const status = await createUserApi(fullName, email, password, phone)
           
           if(status.data){
            notification.success({
                message: "Create successfuly",
                description:"Be done"
            })
           }
           console.log(`check status ${JSON.stringify(status)}` )
   }
    return(
        <>
        <div>
            <div>
                <span>Full name</span>
                <Input
                value={fullName}
                onChange={(event) => {setFullName(event.target.value)}}
                />
            </div>
            <div>
                <span>Email</span>
                <Input
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                 />
            </div>
            <div>
                <span>Password</span>
                <Input.Password 
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                />
            </div>
            <div>
                <span>Phone number</span>
                <Input 
                value={phone}
                onChange={(event) => {setPhone(event.target.value)}}
                />
            </div>
            <Button
            onClick={handleClickButton}
            type="primary" htmlType="submit">
                Submit
            </Button>
        </div>
        </>
    )
}

export default UserForm