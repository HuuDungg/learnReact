import React, { useState } from 'react';
import { Space, Table, Popconfirm, Drawer, message, Button} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateModal from './update.userModal';
import { deleteUserApi } from '../../service/api.service'; 
const UserTable = (props) =>{
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState([null])
  const {dataUsers, loadUser} = props
  const [drawerDetail, setDrawerDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([null])
  const [userDelete, setUserDelete] = useState(null)
  const confirm = async (e) => {
    message.success('Click on Yes');
    await deleteUserApi(userDelete)
    console.log('the id is delete ', userDelete)
    loadUser()
  };
  const cancel = (e) => {
    message.error('Click on No');
  };

  const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        render: (_, record) => {
          return <a onClick={
            ()=>
          {
            setDrawerDetail(true)
            setDataDetail(record)
            console.log('user detail is: ', record)
          }
        }>{record._id}</a>
        } 
    },
    {
        title: 'Full name',
        dataIndex: 'fullName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <>
        <Space size="middle">
          <EditOutlined
          
          onClick={()=>{
            setIsModalUpdateOpen(true)
            setDataUpdate(record)
          }}
          />
          <Popconfirm
            title="Delete the user"
            description="Are you sure to delete this user?"
            onConfirm={() => {confirm()}}
            onCancel={() => {cancel()}}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined onClick={() => setUserDelete(record._id)}/>
        </Popconfirm>
          
          
        </Space>
        </>
      ),
      
    },
];  
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={'_id'} />
      <UpdateModal 
      isModalUpdateOpen={isModalUpdateOpen}
      setIsModalUpdateOpen={setIsModalUpdateOpen}
      dataUpdate={dataUpdate}
      setDataUpdate={setDataUpdate}
      loadUser={loadUser}
      />
      <Drawer title="User detail" onClose={()=>{setDrawerDetail(false)}} open={drawerDetail} >
            <p><strong>ID:</strong> {dataDetail._id}</p>
            <p><strong>Email:</strong> {dataDetail.email}</p>
            <p><strong>Full name:</strong> {dataDetail.fullName}</p>
            <p><strong>Phone:</strong> {dataDetail.phone}</p>
            <img width={'150px'} src={import.meta.env.VITE_IMAGE_URL + dataDetail.avatar} alt="hihi" /> <br />
            <label  htmlFor='btnUpload'>Change avatar</label>
            <input type="file" style={{
              display: 'none'
            }} id='btnUpload'/>
      </Drawer>
      
    </>
  )
} 

export default UserTable