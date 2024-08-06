import React, { useState } from 'react';
import { UserOutlined, HomeOutlined, BookOutlined, LoginOutlined, UserAddOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const Header = () =>{
    const items = [
        {
          label: <Link to={'/'}>Home</Link>,
          key: 'Home',
          icon: <HomeOutlined />,
        },
        {
          label: <Link to={'/users'}>User</Link>,
          key: 'User',
          icon: <UserOutlined />,
        },
        {
          label: <Link to={'/books'}>Book</Link>,
          key: 'Book',
          icon: <BookOutlined />,
        },
        {
          label: <Link to={'/login'}>Login</Link>,
          key: 'Login',
          icon: <LoginOutlined />
        },
        {
          label: <Link to={'/register'}>Register</Link>,
          key: 'Signin',
          icon: <UserAddOutlined />
        },
        
      ];

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header