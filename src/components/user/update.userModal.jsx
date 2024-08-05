import { Button, Input, notification, Modal } from 'antd';
import { createUserApi } from '../../service/api.service';
import { useState } from 'react';
const UpdateModal = () =>{
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeAndRefresh = () =>{
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhone("")
        loadUser()
       }
    
    const handleCreate = async () => {
    const status = await createUserApi(fullName, email, password, phone)
            
    if(status.data){
        closeAndRefresh()
        notification.success({
            message: "Create successfuly",
            description: "create ok"
        })
    }else{
        notification.error({
            message: "Something went wrong",
            description: JSON.stringify(status)
        })
    }
    console.log(`check status ${JSON.stringify(status)}` )
    }

    return(
        <>
            <Modal title="Form update" 
                open={isModalOpen} 
                onOk={() => handleCreate()} 
                onCancel={() => setIsModalOpen(false)}
                maskClosable={false}
                >
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
            </Modal>
        </>
    )
}

export default UpdateModal