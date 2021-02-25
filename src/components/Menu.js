import React from 'react'
import { Menu } from 'antd'

function NavMenu() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">Home</Menu.Item>
      <Menu.Item key="2">Login</Menu.Item>
    </Menu>
  )
}

export default NavMenu