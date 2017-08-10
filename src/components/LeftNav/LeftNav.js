import { Drawer, List, NavBar } from 'antd-mobile';
import {Link} from 'react-router';
import React from 'react';
import './LeftNav.less';
class LeftNav extends React.Component {
  state = {
    open:false,
    mean:[{title:'首页',add:'/'},{title:'精品案例',add:'DesignCases'},{title:'399硬装套餐',add:'Stuff'},{title:'联系我们',add:'About'},{title:'合作渠道',add:'Cooperation'}]
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  render() {
    const sidebar = (<List>
      {this.state.mean.map((i, index) => {
        return (
          <List.Item key={index}>
          <Link to={i.add}>{i.title}</Link>

          </List.Item>
        );
      })}
    </List>);

    return (<div>
      <NavBar onLeftClick={this.onOpenChange} className={this.state.open?'ob':' '}></NavBar>

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
