import * as React from 'react';
import styles from './sideBar.scss';
import { Icon, Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { connect } from 'booto';
import { Link } from 'react-router-dom';

export interface ISidebarProps {
  collapsed: boolean
}

class SideBar extends React.Component<ISidebarProps> {

  render() {

    return (
      <div id="layout-sidebar" className={styles.sidebar}>
        <div className={styles['content-header']}>
          <div className={styles.logo}></div>
          <div className={`${styles.title} ${this.props.collapsed ? 'hide' : ''}`}>CODE-PUSH</div>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.props.collapsed}
        >
          <Menu.Item key="1">
            <Link to="/">
              <Icon type="pie-chart" />
              <span>ZIP包管理</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user">
              <Icon type="desktop" />
              <span>用户设置</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="inbox" />
            <span>Option 3</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Two</span>
              </span>
            }
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  collapsed: state.layout.collapsed
});

export default connect(mapStateToProps)(SideBar);