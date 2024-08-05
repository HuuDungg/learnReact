import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateModal from './update.userModal';
import { Drawer } from 'antd';
const UserTable = (props) =>{
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState([null])
  const {dataUsers, loadUser} = props
  const [drawerDetail, setDrawerDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([null])
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
          <DeleteOutlined />
          
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
      <Drawer title="User detail" onClose={()=>{setDrawerDetail(false)}} open={drawerDetail}>
            <p><strong>ID:</strong> {dataDetail._id}</p>
            <p><strong>Email:</strong> {dataDetail.email}</p>
            <p><strong>Full name:</strong> {dataDetail.fullName}</p>
            <p><strong>Phone:</strong> {dataDetail.phone}</p>
          </Drawer>
    </>
  )
} 

export default UserTable