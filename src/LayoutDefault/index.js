/* eslint-disable no-unused-vars */
import { Layout, Flex,Button,Collapse,Image,Table } from "antd";
import LayoutContent from "../components/LayoutContent";
import {Outlet} from 'react-router-dom'
import {MenuUnfoldOutlined,SearchOutlined,BellOutlined,AppstoreOutlined} from '@ant-design/icons'
import logo from '../image/logo (1).png';
import logoFold from '../image/logo-fold.png'
import { useState } from "react";
import DropDownNotify from './DropDownNotify'
import MenuSider from "../components/MenuSider";
import {Link} from 'react-router-dom'
import './style.scss';
const {Footer, Sider, Content } = Layout;
const items = [
  {
    key: 1,
    label: 'Content 1',
    children: 'Content'
  },
  {
    key: 2,
    label: 'Content 2',
    children: 'Content'
  },
  {
    key: 3,
    label: 'Content 3',
    children: 'Content'
  }
]

function LayoutDefault() {
  const [collapsed,setCollapsed] = useState(false);

  return (
    <Layout className="layout-default">
      <header className="header">
        <Link to="/">
          <div className={"header__logo " + (collapsed && "header__logo-collapsed")}>
          <img src={collapsed ? logoFold : logo} alt="anh loi"/>
          </div>
        </Link>
        <div className="header__nav">
          <div className="header__nav-left"> 
            <div className="header__collapse" onClick={ () => {
              setCollapsed(!collapsed);
            }}>
              <Button className="header__menu-fold" icon={<MenuUnfoldOutlined />}></Button>
            </div>
            <div className="header__search">
              <SearchOutlined />
            </div>
          </div>
          <div className="header__nav-right"> 
            <div className="header__bell">
              <DropDownNotify />
            </div>
            <div className="header__app-store">
              <AppstoreOutlined />
            </div>
          </div>
        </div>
      </header>
      <Layout>
        <Sider width={"280px"} theme="light" collapsed={collapsed}>
          <MenuSider />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
export default LayoutDefault;
