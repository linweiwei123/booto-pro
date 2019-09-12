import * as React from 'react';
import styles from './layout.scss';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import MainContainer from './MainContainer/MainContainer';
import Footer from './Footer/Footer';
import classNames from 'classnames';
import { connect } from 'booto';

const cx = classNames.bind(styles);

export interface ILayoutProps {
  collapsed: boolean,
  children: any
}

export interface ILayoutState {
}

class Layout extends React.Component<ILayoutProps, ILayoutState> {

  render(){
    let pageContainerCN = cx({
      [styles['page-container']]: true,
      "sidebar-mini": this.props.collapsed
    });

    return (
      <div id="layout-main" className={pageContainerCN}>
        <Header/>
        <SideBar></SideBar>
        <MainContainer>
          {this.props.children}
        </MainContainer>
        <Footer></Footer>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => ({
  collapsed: state.layout.collapsed
});

export default connect(mapStateToProps)(Layout);