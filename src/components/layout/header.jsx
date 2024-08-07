import React, { Children, useContext, useState } from 'react';
import { UserOutlined, HomeOutlined, BookOutlined, LoginOutlined, UserAddOutlined, AliwangwangOutlined, LogoutOutlined} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
const Header = () =>{

  const {user, setUser} = useContext(AuthContext);
  console.log('check data user ', user)
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
        (!(user.id)?
          {
            label: <Link to={'/login'}>Login</Link>,
            key: 'Login',
            icon: <LoginOutlined />
          }:
          {
            label: <Link to={'/logout'}>Logout</Link>,
            key: 'logout',
            icon: <LogoutOutlined />
          }
        )
        ,
        {
          label: `Welcome ${user.fullName}`,
          key: 'setting',
          icon: <AliwangwangOutlined />,
          Children:[
            {
              label:'Logout',
              key: 'logout'
            }
          ]
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