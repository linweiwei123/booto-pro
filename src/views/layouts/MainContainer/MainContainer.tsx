import * as React from 'react';
import styles from './mainContainer.scss';
import { Breadcrumb, Icon } from 'antd';

export interface IMainContainerProps {
  children: any
}

const MainContainer = (props: IMainContainerProps) => {
  return (
    <div className={styles['main-container']}>
      <div className={styles.breadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
};

export default MainContainer;