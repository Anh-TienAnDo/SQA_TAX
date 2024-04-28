/* eslint-disable no-unused-vars */
import { Layout, Flex,Button,Collapse,Image,Table } from "antd";
  import {Outlet} from 'react-router-dom'
import {MenuUnfoldOutlined,SearchOutlined,BellOutlined,AppstoreOutlined,UserOutlined} from '@ant-design/icons'
import logo from '../image/logo-short.png';
import logo_tax from '../image/logo-tax.jpeg'
import { useEffect, useState } from "react";
import DropDownNotify from './DropDownNotify'
import MenuSider from "../components/MenuSider";
import {Link,useLocation} from 'react-router-dom'
import './style.scss';
const {Footer, Sider, Content } = Layout;

function LayoutDefault() {
  const [collapsed,setCollapsed] = useState(false);
  const [pageTitle, setPageTitle] = useState('');
  const location = useLocation();
  
  useEffect( ( ) => {
    switch (location.pathname) {
      case '/receipt':
        setPageTitle('Hóa đơn thuế thu nhập cá nhân')
        break
      case '/tax-pay':
        setPageTitle('Thu thuế')
        break
      default:
        break;
    }
  }, [location])

  return (
    
    <Layout className="layout-default">
      <header className="header">
        <Link to="/">
          <div className={"header__logo " + (collapsed && "header__logo-collapsed")}>
            <img src={collapsed ? logo : logo_tax} alt="anh loi"/>
          </div>
        </Link>
        <div className="header__nav">
          <div className="header__nav-left"> 
            <div className="header__collapse" onClick={ () => {
              setCollapsed(!collapsed);
            }}>
              <Button className="header__menu-fold" icon={<MenuUnfoldOutlined />}></Button>
            </div>
          </div>
          
          <div className="header__nav-center"> 
            <h1>{pageTitle}</h1>
          </div>
          
          <div className="header__nav-right"> 
            <div className="header__bell">
                <UserOutlined />
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
        <Content className="content">
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}
export default LayoutDefault;
