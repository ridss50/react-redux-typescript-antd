import * as React from 'react';
import './App2.css';
import {Layout, Menu, Breadcrumb, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import UserList from "./component/User/ListUser/UserList"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./component/Authentication/Login/Login";
import Register from "./component/Authentication/Registration/Registraion";
import PublicRoute from "./Route/PublicRoute";
import {LogoutOutlined} from '@ant-design/icons';
import Homes from "./component/Home/home";
import PrivateRoute from "./Route/PrivateRoute";
const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;

const App = () => {

  const logoOut = () => {
    localStorage.removeItem("token");
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute  restricted={true} exact path="/login" Component={Login}/>
          <PublicRoute  restricted={true} exact path="/register" Component={Register}/>
          <PublicRoute  restricted={false} exact path="/" Component={Homes}/>
        <Layout>
          <Header className="header">
            <div className="logo"/>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Button onClick={logoOut} type="dashed" style={{float:"right",marginTop:"12px"}}  shape="round" icon={<LogoutOutlined />} size="large">LOG OUT</Button>
            </Menu>
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{height: '100%', borderRight: 0}}
              >
                <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
                  <Menu.Item key="1">User</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout style={{padding: '0 24px 24px'}}>
              <Breadcrumb style={{margin: '16px 0'}}>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >

                  <PrivateRoute exact path="/user" Component={UserList}/>

              </Content>
            </Layout>
          </Layout>
        </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
