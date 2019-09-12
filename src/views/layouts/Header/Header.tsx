import * as React from 'react';
import styles from './header.scss';
import { Button, Icon } from 'antd';
import { connect, Dispatch } from 'booto';
import { LAYOUT_COLLAPSED_SET } from '../../../store/constants';

export interface IHeaderProps {
  collapsed: boolean,
  dispatch: Dispatch
}

const Header = (props:IHeaderProps) => {

  console.log('collapsed',props.collapsed);

  const toggleCollapsed = () => {
    props.dispatch({
      type: LAYOUT_COLLAPSED_SET,
      payload: !props.collapsed
    })
  };

  return (
    <div id="layout-header" className={styles.header}>
      <div className={styles.content}>
        <Button type="primary" onClick={() => toggleCollapsed()}>
          <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
      </div>
    </div>
  )
};

export default connect((state:any)=>({collapsed: state.layout.collapsed}))(Header);