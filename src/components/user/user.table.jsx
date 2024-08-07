import React, { useEffect, useState } from 'react';
import { Space, Table, Popconfirm, Drawer, message, Button} from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateModal from './update.userModal';
import { deleteUserApi, handleUploadFile, updateAvatarUserApi } from '../../service/api.user'; 

const UserTable = (props) =>{
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false)
  const [dataUpdate, setDataUpdate] = useState([null])
  const {dataUsers, loadUser, total, current, pageSize, setPageSize, setCurrent} = props
  const [drawerDetail, setDrawerDetail] = useState(false)
  const [dataDetail, setDataDetail] = useState([null])
  const [userDelete, setUserDelete] = useState(null)
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()


  const confirm = async (e) => {
    message.success('Click on Yes');
    await deleteUserApi(userDelete)
    console.log('the id is delete ', userDelete)
    loadUser()
  };

  const cancel = (e) => {
    message.error('Click on No');
  };

  useEffect(() => {
  if (!selectedFile) {
    setPreview(undefined);
    return;
  }

  const objectUrl = URL.createObjectURL(selectedFile);
  setPreview(objectUrl);

  // Giải phóng bộ nhớ khi component bị unmount
  return () => URL.revokeObjectURL(objectUrl);
}, [selectedFile]);

const onSelectFile = (e) => {
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined);
    return;
  }

  const file = e.target.files[0];
  setSelectedFile(file);
}

const onChange = (pagination, filters, sorter, extra) => {
  if(+current != +pagination.pageSize){setCurrent(pagination.current)
  setPageSize(pagination.pageSize)}
};

const handleUpdateAvatar = async () =>{
  const resUpload = await handleUploadFile(selectedFile, 'avatar')
  if(resUpload.data){
    message.success("upload sucessfuly")
    const fileImage = await resUpload.data.fileUploaded

    updateAvatarUserApi(fileImage, dataDetail._id, dataDetail.fullName, dataDetail.phone)
    
    setSelectedFile(null)
    setDrawerDetail(false)
    loadUser()
  }else{
    message.error("fail to upload")
  }
}

  

  const columns = [
    {
        title: "Index",
        render: (_, record, Index) => {
          return (
            <>
              <p>{(Index + 1) + (current-1)*pageSize}</p>
            </>
          )
        } 
    },
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
          <EditOutlined style={{
            color:'gray'
          }}
          
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
            <DeleteOutlined 
            onClick={() => setUserDelete(record._id)}
            style={{
              color:'red'
            }}
            />
        </Popconfirm>
          
          
        </Space>
        </>
      ),
      
    },
];  
  return (
    <>
      <Table 
      columns={columns} 
      dataSource={dataUsers} 
      rowKey={'_id'} 
      pagination={
        {
        current: current,
        pageSize: pageSize,
        showSizeChanger: true,
        total: total,
        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
        } }

      onChange={onChange}
      />
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
            <img style={{
              width: '150px',
              height: '150px',
              overflow: 'hidden'
            }} src={import.meta.env.VITE_IMAGE_URL + dataDetail.avatar} alt="hihi" /> <br />
            <label  htmlFor='btnUpload'>Change avatar</label>
            <input 
            type="file" 
            style={{
              display: 'none'
            }} id='btnUpload'
            onChange={(event)=> onSelectFile(event)}
            /> <br />
            {selectedFile &&
              <>
                <img style={{
              width: '150px',
              height: '150px',
              overflow: 'hidden'
            }} src={preview} /> <br />
            <Button
              onClick={handleUpdateAvatar}
            >Save</Button>
              </> 
            }
      </Drawer>
      
    </>
  )
} 

export default UserTable