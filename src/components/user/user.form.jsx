import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
const UserForm = () => {
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
   const handleClickButton = () =>{
        const URL_BACKEND = 'http://localhost:8080/api/v1/user'
        axios.post(URL_BACKEND, {fullName, email, password, phone})
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