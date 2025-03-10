import React from 'react'
import { WrapperHeader } from './style'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import TableComponent from '../TableComponent/TableComponent'

const AdminProduct = () => {
  return (
    <div>
        <WrapperHeader>Quản lý sản phẩm</WrapperHeader>
        <div style={{ marginTop: '20px' }}>
        <Button style={{height: '60px', width: '60px', borderRadius: '5px', borderStyle: 'dashed'}}><PlusOutlined style={{fontSize: '20px'}} /></Button>
        </div>
        <div style={{ marginTop: '20px' }}>
        <TableComponent />
        </div>
    </div>
  )
}

export default AdminProduct