import React from 'react';
import './Header.css';
import { Menu } from 'antd';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import imgSrc from '../../../LoginPlaceholder.png'

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
        <Link to="/commissions" style={{ textDecoration: 'none' }}>Commissions</Link>
      </Menu.Item>

     <Menu.SubMenu key="about" title={<span>About</span>} >
      <Menu.Item key="a">
       <Link to="/about" style={{ textDecoration: 'none' }}>About Kyue Studio</Link>
      </Menu.Item>
      <Menu.Item key="f">
        <Link to="/faq" style={{ textDecoration: 'none' }}>FAQ</Link>
      </Menu.Item>
      <Menu.Item key="t">
        <Link to="/tutorials" style={{ textDecoration: 'none' }}>Tutorials</Link>
      </Menu.Item>
      <Menu.Item key="p">
        <Link to="/partners" style={{ textDecoration: 'none' }}>Partners</Link>
      </Menu.Item>
    </Menu.SubMenu>

    <Menu.Item key="l">
        <Link to="/login" ><img src={imgSrc} alt='Login Image' width='100' height='50'></img></Link>
    </Menu.Item>

     </Menu>
     </div>
     <Outlet/>
    </>
   
  )
};
export default Header;