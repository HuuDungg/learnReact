import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { fetchAllUser } from '../../service/api.service';
const UserTable = () =>{
  const [dataUsers, setDataUsers] = useState([])

  const columns = [
    {
        title: 'ID',
        dataIndex: '_id',
    },
    {
        title: 'Full name',
        dataIndex: 'fullName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];

  useEffect(()=>{
    loadUser();
  }, [])

  const loadUser = async() =>{
    const dat = await fetchAllUser()
    console.log("this is data ", dat)
    setDataUsers(dat.data)
  }
  
  return <Table columns={columns} dataSource={dataUsers} rowKey={'_id'} />;
} 

export default UserTable