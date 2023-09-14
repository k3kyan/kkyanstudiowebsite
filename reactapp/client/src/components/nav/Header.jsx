import React from 'react';
import './Header.css';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';


const Header = () => {
  const [current, setCurrent] = useState('h');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
    <div className="header-container">
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" className="header-menu">
      <Menu.Item key ='h'>
        Home
      </Menu.Item>

      <Menu.Item key ='s'>
        Shop
      </Menu.Item>

      <Menu.Item key ='c'>
        Commission
      </Menu.Item>

     <Menu.SubMenu key="about" title={<span>About</span>} >
      <Menu.Item key="a">
       <Link to="/">About Kyue Studio</Link>
      </Menu.Item>
      <Menu.Item key="f">
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
      <Menu.Item key="t">
        <Link to="/tutorials">Tutorials</Link>
      </Menu.Item>
      <Menu.Item key="p">
        <Link to="/partners">Partners</Link>
      </Menu.Item>
    </Menu.SubMenu>

     </Menu>
     </div>
     <Outlet/>
    </>
   
  )
};
export default Header;