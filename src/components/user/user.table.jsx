import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateModal from './update.userModal';
const UserTable = (props) =>{
  
  const {dataUsers} = props

  const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
        render: (_, record) => {
          return <a href="#">{record._id}</a>
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
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
];


  
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={'_id'} />
      <UpdateModal/>
    </>
  )
} 

export default UserTable