import React, { useState } from 'react';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';

export const AdminPage = () => {
  const items = [
    {
      key: 'user',
      icon: <UserOutlined/>,
      label: 'Người Dùng',
      
    },
    {
      key: 'product',
      icon: <AppstoreOutlined />,
      label: 'Sản Phẩm',
    },
    
  ];
  
  const [keySelected, setKeySelected] = useState('');

  const renderPage = (key) => {
    switch(key) {
      case "user": return (
        <AdminUser/>
      )
      case "product": return (
        <AdminProduct/>
      )
      default:
      return<></>
    }
  }

  const handleOnClick = (e) => {
    const { key } = e;  // Destructuring để lấy key từ đối tượng sự kiện
    console.log('click', { key });
    setKeySelected(key);
  }
  console.log('keySelected',keySelected)

  return (
    <div style={{display: 'flex'}}>
      
    <Menu
      mode="inline"
      style={{
        width: 256,
        boxShadow: '1px 1px 2px #ccc',
        height: '100vh',
      }}
      items={items}
      onClick={handleOnClick}
    />
      <div style={{ flex: 1, padding: '15px' }}>
        {/* {keySelected === "1" && <span>Key là 6</span>} */}
        {renderPage(keySelected)}
      </div>
    </div>
  );
}

export default AdminPage


