import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(
    <Link to="/user/dashboard" style={{textDecoration:"none"}}>Dashboard</Link>,
    "sub1",
    <UserOutlined />

  ),
  getItem(<Link to="/owner" style={{textDecoration:"none"}}>Owner</Link>, "sub2", <UserOutlined />),

  getItem(<Link to="/theaters" style={{textDecoration:"none"}}>Theaters</Link>, "sub3", <UserOutlined />),

  getItem(<Link to="/" style={{textDecoration:"none"}}>Logout</Link>, "sub5", <LogoutOutlined />),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          height: "700px",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["4"]}
            mode="inline"
            items={items}
          />
        </Sider>

      </Layout>
    </>
  );
};

export default Sidebar;
