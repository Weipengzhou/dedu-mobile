import { Drawer, List, NavBar } from 'antd-mobile';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './LeftNav.less';
class LeftNav extends React.Component {
  state = {
    open:false,
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  render() {
    const sidebar = (<List>
      {['首页','精品案例','399硬装套餐','联系我们','合作渠道'].map((i, index) => {
        return (<List.Item key={index}>{i}</List.Item>);
      })}
    </List>);

    return (<div>
      <NavBar onLeftClick={this.onOpenChange}></NavBar>

      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight}}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        position={'right'}
        docked={false}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        {this.props.text}
      
      </Drawer>
    </div>);
  }
}

export default LeftNav;
