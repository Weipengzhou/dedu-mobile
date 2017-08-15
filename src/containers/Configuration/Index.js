import React from 'react';
import {Router, Route, Link} from 'react-router';
import {List, DirectoryList} from '../../components/List/List'
import Header from '../../components/MobileHeader/MobileHeader';

import action from '../../redux/actions';

import {connect} from 'react-redux';
import './Configuration.less';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      select: [],
      list: [
        {
          name: '总经理办公室',
          value:0,
          number: 0,
          id: 0,
          src:"http://www.51ddo.com/assets/img/1.png",
          class: 'one',
          type: 'Gmanager'
        }, {
          name: '经理办公室',
          value:0,
          number: 0,
          id: 1,
          src:"http://www.51ddo.com/assets/img/2.png",
          class: 'two',
          type: 'manager'
        }, {
          name: '部门办公室',
          number: 0,
          id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
          class: 'three',
          type: 'department'
        }, {
          name: '接待室',
          value:0,
          number: 0,
          id: 3,
          src:"http://www.51ddo.com/assets/img/4.png",
          class: 'four',
          type: 'reception'
        }, {
          name: '茶水间',
          value:0,
          number: 0,
          id: 4,
          src:"http://www.51ddo.com/assets/img/5.png",
          class: 'five',
          type: 'coffee'
        }, {
          name: '前厅',
          value:0,
          number: 0,
          id: 5,
          src:"http://www.51ddo.com/assets/img/6.png",
          class: 'six',
          type: 'office'
        }, {
          name: '储物室',
          value:0,
          number: 0,
          id: 6,
          src:"http://www.51ddo.com/assets/img/7.png",
          class: 'seven',
          type: 'storage'
        }, {
          name: '会议室',
          value:0,
          number: 0,
          id: 7,
          src:"http://www.51ddo.com/assets/img/8.png",
          class: 'eight',
          type: 'meeting'
        },
        {
          name: '其他',
          value:0,
          number: 0,
          id: 8,
          src:"http://www.51ddo.com/assets/img/9.png",
          class: 'ten',
          type: 'custom'
        },
        {
          name: '敞开办公区',
          value:0,
          number: 0,
          id: 9,
          src:"http://www.51ddo.com/assets/img/10.png",
          class: 'nine',
          type: 'open'
        }
      ]
    }
  }

  componentDidMount() {
    if (this.props.area <= 100) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:9,
            number: 0,
            id: 0,
            src:"http://apps.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '会议室',
            value:12,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          }, {
            name: '敞开办公区',
            value:1,
            number: 0,
            id: 9,
            src:"http://www.51ddo.com/assets/img/10.png",
            class: 'nine',
            type: 'open'
          }
        ]
      })
    } else if (this.props.area <= 160) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:16,
            number: 0,
            id: 0,
            src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:12,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '会议室',
            value:12,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          }, {
            name: '敞开办公区',
            value:1,
            number: 0,
            id: 9,
            src:"http://www.51ddo.com/assets/img/10.png",
            class: 'nine',
            type: 'open'
          }
        ]
      })
    } else if (this.props.area <= 250) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:20,
            number: 0,
            id: 0,
            src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:12,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '部门办公室',
            value:12,
            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '会议室',
            value:16,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          }, {
            name: '敞开办公区',
            value:1,
            number: 0,
            id: 9,
            src:"http://www.51ddo.com/assets/img/9.png",
            class: 'nine',
            type: 'open'
          }
        ]
      })

    } else if (this.props.area <= 350) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:20,
            number: 0,
            id: 0,
            src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '部门办公室',
            value:8,
            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:8,
            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '会议室',
            value:12,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '会议室',
            value:18,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '敞开办公区',
            value:1,
            number: 0,
            id: 9,
           src:"http://www.51ddo.com/assets/img/9.png",
            class: 'nine',
            type: 'open'
          }
        ]
      })
    } else if (this.props.area <= 450) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:20,
            number: 0,
            id: 0,
          src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
          src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '部门办公室',
            value:10,
            number: 0,
            id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:10,
            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '储物室',
            value:5,
            number: 0,
            id: 6,
            src:"http://www.51ddo.com/assets/img/7.png",
            class: 'seven',
            type: 'storage'
          },
          {
            name: '会议室',
            value:28,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '会议室',
            value:15,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '敞开办公区',
            value:1,
            number: 0,
            id: 9,
           src:"http://www.51ddo.com/assets/img/10.png",
            class: 'nine',
            type: 'open'
          }

        ]
      })
    } else if (this.props.area <= 550) {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:24,
            number: 0,
            id: 0,
          src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
          src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '部门办公室',
            value:12,
            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:12,
            number: 0,
            id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:8,
            number: 0,
            id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '储物室',
            value:8,
            number: 0,
            id: 6,
            src:"http://www.51ddo.com/assets/img/7.png",
            class: 'seven',
            type: 'storage'
          },
          {
            name: '会议室',
            value:9,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '会议室',
            value:20,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '敞开办公区',
            value:0,
            number: 0,
            id: 9,
            src:"http://www.51ddo.com/assets/img/10.png",
            class: 'nine',
            type: 'open'
          }

        ]
      })
    } else {
      this.setState({
        select: [
          {
            name: '总经理办公室',
            value:24,
            number: 0,
            id: 0,
            src:"http://www.51ddo.com/assets/img/1.png",
            class: 'one',
            type: 'Gmanager'
          }, {
            name: '经理办公室',
            value:12,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '经理办公室',
            value:16,
            number: 0,
            id: 1,
            src:"http://www.51ddo.com/assets/img/2.png",
            class: 'two',
            type: 'manager'
          },
          {
            name: '部门办公室',
            value:10,

            number: 0,
            id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:10,

            number: 0,
            id: 2,
          src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '部门办公室',
            value:10,

            number: 0,
            id: 2,
            src:"http://www.51ddo.com/assets/img/3.png",
            class: 'three',
            type: 'department'
          },
          {
            name: '茶水间',
            value:12,
            number: 0,
            id: 4,
            src:"http://www.51ddo.com/assets/img/5.png",
            class: 'five',
            type: 'coffee'
          },
          {
            name: '储物室',
            value:8,
            number: 0,
            id: 6,
          src:"http://www.51ddo.com/assets/img/7.png",
            class: 'seven',
            type: 'storage'
          },
          {
            name: '会议室',
            value:9,

            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '会议室',
            value:12,
            number: 0,
            id: 7,
            src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '会议室',
            value:20,
            number: 0,
            id: 7,
          src:"http://www.51ddo.com/assets/img/8.png",
            class: 'eight',
            type: 'meeting'
          },
          {
            name: '敞开办公区',
            value:0,
            number: 0,
            id: 9,
            src:"http://www.51ddo.com/assets/img/10.png",
            class: 'nine',
            type: 'open'
          }

        ]
      })
    }

  }
  handleClickMinus(e) {
    if(e.result.id==9){
      alert('敞开办公区为默认配置，请勿删除！');
      return false
    }
    const {select, list} = this.state;
    select.splice([e.index], 1)
    list[e.result.id].number -= 1;
    this.setState({select, list})
  }
  handleClick(e) {
    if(e.result.id==9){
      alert('敞开办公区数量默认为1，请勿重复添加！');
      return false
    } ;
    function compare(prop) {
      return function(obj1, obj2) {
        var val1 = obj1[prop];
        var val2 = obj2[prop];
        if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
          val1 = Number(val1);
          val2 = Number(val2);
        }
        if (val1 < val2) {
          return -1;
        } else if (val1 > val2) {
          return 1;
        } else {
          return 0;
        }
      }
    }
    const {select, list} = this.state;
    select.push({name: e.result.name, id: e.result.id,src:e.result.src, value:0 , class: e.result.class, type: e.result.type});
    list[e.result.id].number += 1;
    select.sort(compare('id')) //按照id来排序
    this.setState({select, list})
    console.log(this.state)
  }

  render() {
    const {linkClick, select, area,} = this.props
    return (
      <div className="Configuration">
        <Header className='header-top' text="功能区选择" txt='＜' link='/'> </Header>
        <div className='container clearfix'>
          <p className='title'>公装无忧推荐配置（点击可删除）</p>
          <List list={this.state.select} className='list clearfix' GetThings={this.handleClickMinus}></List>
          <p className='title'>点击增加功能区（重复点击重复选择</p>
          <DirectoryList list={this.state.list} className='directory clearfix' GetThings={this.handleClick}></DirectoryList>

        </div>
        <div className='button'>
          <Link to='/Adjustment' onClick={() => linkClick(this.state.select)}>下一步</Link>
        </div>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {select: state.select, area: state.area.value,}
}

function mapDispatchToProps(dispatch) {
  return {
    linkClick: (val) => dispatch(action.officeSelect(val)),

    //   handleClick   :(event) => dispatch(action.officeList(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
