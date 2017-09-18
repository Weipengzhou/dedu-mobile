import React from 'react';
import {Router, Route,Link,hashHistory} from 'react-router';

import HeaderBg from './HeaderBg.png';
import HeaderBackground from '../../components/HeaderBackground/HeaderBackground'
import Logo from './logo.png';
import Button from '../../components/Button/Button';
import {createStore} from 'redux';
import ajax from '../../components/ajax/ajax';
import reducer from '../../redux/reducers';
import action from '../../redux/actions';
import {connect} from 'react-redux';
import './Quotation.less';


const Text = (props) => (
  <ul className='hz'>
    {props.list.map((result, index) => (
      <li key={index} className='inp'>
        <label>
          <span></span>
          <p>{result.name}</p>
        </label><input type="number" onChange={(event) => props.onHande(event)}/>
        <b></b>
      </li>
    ))}
  </ul>
)
class Index extends React.Component {
  constructor(props) {
      super(props);
      this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    var abc = 0;
    if (this.props.area.value < 400) {
      abc = Math.round(this.props.area.value * 0.7);

    } else {
      abc = Math.round(this.props.area.value * 0.75);
    }

    this.props.afterhandleChange(abc)
    this.props.lastArea(abc);

    if(!this.props.area.value){
      alert('请输入您的建筑面积！')
      return false
    }else if(this.props.area.value>2000){
      alert(' 此系统暂不支持2000平米以上报价计算！')
      return false
    }else if(!this.props.people){
        alert('请输入您的员工人数！')
        return false
    }
    else{
       hashHistory.push('/Configuration')
    }

  }

  render() {
    const {
      todos,
      area,
      people,
      areahandleChange,
      peoplehandleChange,
      handleClickOne,
      handleClickTwo,
      list,
      phone,
      token,
      projectId,
    } = this.props;

    return (
      <div className='Quotation'>
        <HeaderBackground/>
        <p className="title">基础资料</p>
        <div className="round">
          <img src={Logo}></img>
        </div>
        <p className="bj">公装无忧报价工具</p>
        <div className="inp">
          <label>
            <span className="icon-1"></span>
            <p>建筑面积</p>
          </label>
          <input type="number" onChange={areahandleChange}></input>
          <b></b>
        </div>
        <div className="inp">
          <label>
            <span className="icon-2"></span>
            <p>员工人数</p>
          </label>
          <input type="number" onChange={peoplehandleChange}></input>
          <b></b>
        </div>

        <p className="checkedtitle">根据实际情况点选（可不选）</p>
        <div className="ban">
          <Button text='不装修顶面' checked={this.props.todos1} leClick={handleClickOne} className={this.props.todos1
            ? "on"
            : "off"}></Button>
          <Button text='不装修地面' checked={this.props.todos2} leClick={handleClickTwo} className={this.props.todos2
            ? "on"
            : "off"}></Button>

        </div>
        <div className='button'>
          <a onClick={this.handleChange}>下一步</a>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {todos1: state.todos1, todos2: state.todos2, area: state.area, people: state.people,phone:state.phone,token:state.token,code:state.code,}
}
function mapDispatchToProps(dispatch) {
  return {
    areahandleChange: (event) => dispatch(action.userArea(event.target.value)),
    peoplehandleChange: (event) => dispatch(action.userPeople(event.target.value)),
    handleClickOne: (event) => dispatch(action.buttonClickOne(event)),
    handleClickTwo: (event) => dispatch(action.buttonClickTwo(event)),
    afterhandleChange:(event) => dispatch(action.afterArea(event)),
      lastArea: (event) => dispatch(action.lastArea(event)),

      
  }
}

//最终渲染
export default connect(mapStateToProps, mapDispatchToProps)(Index);
