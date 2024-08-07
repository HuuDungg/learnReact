import { Button, Input, notification, Modal } from 'antd';
import { updateUserApi } from '../../service/api.user';
import { useEffect, useState } from 'react';
const UpdateModal = (props) =>{
    const {isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser} = props

    const [fullName, setFullName] = useState("")
    const [id, setId] = useState("")
    const [phone, setPhone] = useState("")

    const closeAndRefresh = () =>{
        setIsModalUpdateOpen(false)
        setFullName("")
        setId("")
        setPhone("")
        loadUser()
       }

    useEffect(()=>{
        setFullName(dataUpdate.fullName)
        setId(dataUpdate._id)
        setPhone(dataUpdate.phone)
    }, [dataUpdate])
    
    const handleCreate = async () => {
    const status = await updateUserApi(fullName, id, phone)
            
    if(status.data){
        closeAndRefresh()
        notification.success({
            message: "update successfuly",
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
                open={isModalUpdateOpen} 
                onOk={() => handleCreate()} 
                onCancel={() => setIsModalUpdateOpen(false)}
                maskClosable={false}
                okText={'Save'}
                >
                <div>
                    <span>Id</span>
                    <Input
                    value={id}
                    disabled
                    />
                </div>
                <div>
                    <span>Full name</span>
                    <Input
                    value={fullName}
                    onChange={(event) => {setFullName(event.target.value)}}
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