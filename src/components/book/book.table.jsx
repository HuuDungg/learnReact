import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Drawer, Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { getAllBook, deleteById } from '../../service/api.book';
import Link from 'antd/es/typography/Link';
import { Button, message, Popconfirm } from 'antd';

const TableBoook = () => {
  const [dataBook, setDataBook] = useState(null);
    const [current, setCurrent] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [total, setTotal] = useState(0)
    const [isDrawer, setIsDrawer] = useState(false)
    const [dataDetail, setDataDetail] = useState({})

    const fetchAllBook = async () => {
        const res = await getAllBook(current, pageSize);
        setDataBook(res.data.result);
        setTotal(res.data.meta.total)
    };

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('check data onChange ', pagination)
        if(+pageSize != +pagination.pageSize || +current != pagination.current){
            setCurrent(pagination.current)
            setPageSize(pagination.pageSize)}
      };

      const handleDelete = async (id) =>{
        const res = await deleteById(id)
        fetchAllBook()
        confirm()
      }

      const confirm = (e) => {
        message.success('Click on Yes');
      };
      const cancel = (e) => {
        message.error('Click on No');
      };

  useEffect(() => {
    fetchAllBook();
  }, [current, pageSize]);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record, index) => {
        return <>{(index + 1) + (pageSize*(current-1))}</>;
      },
    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: 'id',
      render: (_, record) => {
        return <Link onClick={()=>{
            setIsDrawer(true)
            setDataDetail(record)
        }} >{record._id}</Link>;
      },
    },
    {
      title: 'Title',
      dataIndex: 'mainText',
      key: 'mainText',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (_, record) => {
        return (
          <>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(record.price)}
          </>
        );
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <>
            <EditOutlined />
            <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={()=>{handleDelete(record._id)}}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
            >
                <DeleteOutlined />
            </Popconfirm>
            
          </>
        );
      },
    },
  ];

  const dataSource = dataBook
    ? dataBook.map((book) => ({
        ...book,
        key: book._id, // Ensure each item has a unique key prop
      }))
    : [];

  return (
    <>
      <Table columns={columns}
       dataSource={dataSource}
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

        <Drawer title="Basic Drawer" onClose={()=>{
            setIsDrawer(false)
        }} open={isDrawer}>
            <div>ID: {dataDetail._id}</div>
            <div>Title: {dataDetail.mainText}</div>
            <div>Author: {dataDetail.author}</div>
            <div>Genre: {dataDetail.category}</div>
            <div>Price: {dataDetail.price}</div>
            <div>Quantity: {dataDetail.quantity}</div>
            <div>Sold: {dataDetail.sold}</div>
            <div>Thumbnail: <br />
                <img style={{
                    width: '150px',
                    height: '150px',
                    overflow: 'hidden'
                }} src={import.meta.env.VITE_IMAGE_URL_BOOK + dataDetail.thumbnail} alt="" />
            </div>
        </Drawer>
    </>
  );
};

export default TableBoook;
