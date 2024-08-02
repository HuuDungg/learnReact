import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const UserForm = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
   const handleClickButton = () =>{
    console.log("click me!", {fullName, email, password, phoneNumber})
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
                value={phoneNumber}
                onChange={(event) => {setPhoneNumber(event.target.value)}}
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