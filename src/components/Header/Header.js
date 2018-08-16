import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom';
import { Icon } from 'antd';
import classNames from 'classnames';
import styles from './header.less';
import logo from 'assets/logo.png';
import llogo from 'assets/llogo.png';
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    };
  }

  openNav() {
    this.setState({
      showNav: !this.state.showNav
    });
  }

  render() {
    // let navClass = ;
    return (
      <div className={classNames(styles.header, styles.nav)}>
        <div className={styles.container}>
          <h1 className={styles.logo}>
            <a href="#">
              <img src={logo} alt="" />
              行走中的一一
              <img src={llogo} alt="" />
            </a>
          </h1>
          <div className={classNames(styles.sitenav, styles[this.state.showNav ? 'show' : ''])}  onClick={this.openNav.bind(this)}>
            <ul>
              <li>
                <NavLink  to="/home" activeClassName={classNames(styles['current-nav'])}>男神</NavLink >
              </li>
              <li>
                <NavLink  to="/setting" activeClassName={classNames(styles['current-nav'])}>女神</NavLink >
              </li>
              <li>
                <a href="#">素材库</a>
              </li>
              <li>
                <a href="#">插件库</a>
              </li>
            </ul>
          </div>
          <span className={styles['sitenav-on']} onClick={this.openNav.bind(this)}>
            <Icon type="bars" />
          </span>
        </div>
      </div>
    );
  }
}
