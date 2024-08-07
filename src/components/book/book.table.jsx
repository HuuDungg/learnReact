import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { getAllBook } from '../../service/api.book';
import Link from 'antd/es/typography/Link';

const TableBoook = () => {
  const [dataBook, setDataBook] = useState(null);

  const fetchAllBook = async () => {
    const res = await getAllBook();
    setDataBook(res.data.result);
  };

  useEffect(() => {
    fetchAllBook();
  }, []);

  const columns = [
    {
      title: 'STT',
      dataIndex: 'stt',
      key: 'stt',
      render: (_, record, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: 'ID',
      dataIndex: '_id',
      key: 'id',
      render: (_, record) => {
        return <Link>{record._id}</Link>;
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
            <DeleteOutlined />
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
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

export default TableBoook;
