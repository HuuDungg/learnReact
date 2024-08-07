import React, { Children, useContext, useState } from 'react';
import { UserOutlined, HomeOutlined, BookOutlined, LoginOutlined, UserAddOutlined, AliwangwangOutlined, LogoutOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
const Header = () =>{

  const {user, setUser} = useContext(AuthContext);
    console.log('check render')
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
        ...(!user.id ? [{
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key: 'login',
          icon: <LoginOutlined />,
          }] : []),
          ...(user.id ? [{
          label: `Welcome ${user.fullName}`,
          key: 'setting',
          icon: <AliwangwangOutlined />,
          children: [
          {
          label: 'Đăng xuất',
          key: 'logout',
          },
          ],
          }] : []),
        
      ];

    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header