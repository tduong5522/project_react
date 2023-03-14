import React, { ReactNode } from "react";
import { Avatar, Breadcrumb, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import "./index.scss";

import { useAuth } from "appSrc/hooks/useAuth";
import logo from "appSrc/assets/images/logo_mmt.png";

type Props = {
  children: ReactNode | undefined;
};

const { Header, Content, Footer } = Layout;

const LIST_MENU = [
  { key: "home", label: <Link to={"/"}>Home</Link> },
  { key: "main", label: <Link to={"/main"}>Main</Link> },
  { key: "about", label: <Link to={"/about"}>About</Link> },
];

const MainLayout: React.FC<Props> = ({ children }) => {
  const location = useLocation();
  const { signOut } = useAuth()

  const getKeyActive = () => {
    switch (location.pathname) {
      case "/":
        return "home";
      case "/main":
        return "main";
      case "/about":
        return "about";
      default:
        return "home";
    }
  };
  return (
    <section className="main-layout layout">
      <Header>
        <img
          src={logo}
          alt="Logo"
          className="logo"
          style={{ height: 30, width: 30, marginRight: 30 }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[getKeyActive()]}
          items={LIST_MENU}
        />
        <Avatar className="avatar-header" onClick={() => signOut}/>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </section>
  );
};

export default MainLayout;
