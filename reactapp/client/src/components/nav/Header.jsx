import { HomeTwoTone, EditTwoTone, CheckCircleTwoTone } from '@ant-design/icons';
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
     <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" >
     <Menu.SubMenu key="m" title="About" icon={<HomeTwoTone />} style={{ marginLeft: 'auto'  }}>
      <Menu.Item key="h" icon= {<HomeTwoTone />}>
       <Link to="/">About Kyue Studio</Link>
      </Menu.Item>
      <Menu.Item key="f" icon= {<EditTwoTone />}>
        <Link to="/faq">FAQ</Link>
      </Menu.Item>
      <Menu.Item key="t" icon= {<EditTwoTone />}>
        <Link to="/tutorials">Tutorials</Link>
      </Menu.Item>
      <Menu.Item key="p" icon= {<CheckCircleTwoTone />}>
        <Link to="/partners">Partners</Link>
      </Menu.Item>
      </Menu.SubMenu>
     </Menu>
     <Outlet/>
    </>
   
  )
};
export default Header;