import React  from 'react';
import {Router, Route, Link} from 'react-router';
import action from '../../redux/actions';
import {connect} from 'react-redux';
import HeaderBackground from '../../components/HeaderBackground/HeaderBackground';
import Text from '../../components/Text/Text';
import ajax from '../../components/ajax/ajax';
import grep from '../../components/Grep/Grep';
import CountPrice from '../../components/CountPrice/CountPrice';
import Price from '../../components/Price/Price';
import './Adjustment.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    let abc = this.props.area; //初始面积
    var _this = this;
    ajax({
      url: "http://www.51ddo.com/api/price", //请求地址
      type: "GET", //请求方式
      data: {
        area: abc
      }, //请求参数
      dataType: "json",
      success: function(response, xml) {
        _this.props.feachPrice(JSON.parse(response))
        Price(_this.props)
      },
      fail: function(status) {
        console.log(status)
      }
    })
    let shengyu = this.props.lastArea;
    const select = this.props.select;
    this.props.officeSelect(select);
    let str = 0;
    for (var i in this.props.select) {
      if(i < this.props.select.length-1){
          if(this.props.select[i].value == ''){
            this.props.select[i].value = 0
          }
          str += parseInt(this.props.select[i].value);
      }

    }
    console.log(shengyu,str)
    const jieguo = shengyu - str;
    select[select.length-1].value = jieguo;
    this.props.officeSelect(select);
    this.props.addList({
      afterarea: {
        value: jieguo
      }
    })

  }

  onChange(e) {
    if(e.value == ''){
      e.value = 0
    }
    let shengyu = this.props.lastArea;
    const select = this.props.select;
    select[e.id].value=e.value;
    this.props.officeSelect(select);
    let str = 0;
    for (var i in this.props.select) {
      if(i < this.props.select.length-1){
          str += parseInt(this.props.select[i].value);
      }

    }
    console.log(shengyu,str)
    const jieguo = shengyu - str;
    select[select.length-1].value = jieguo;
    this.props.officeSelect(select);
    this.props.addList({
      afterarea: {
        value: jieguo
      }
    })

    Price(this.props);

    // this.props.
  }

  onClick(){
      const save = 'http://www.51ddo.com/api/pricing-table/extraData'
      var _this = this;
      var  obj =
        {extraData:
           JSON.stringify({
             people:_this.props.data.people,
             area:_this.props.data.area.value,
             afterarea:_this.props.data.afterarea.value,
             lastArea:_this.props.data.lastArea.value,
             select:_this.props.data.select,
             lastPrice:_this.props.data.lastPrice,
           }),
           phone:this.props.phone,
           id:this.props.id,
         };

    ajax({
      url: save, //请求地址
      type: "POST", //请求方式
      data: obj, //请求参数
      dataType: "json",
      success: function(data) {
          console.log(data,JSON.parse(data).data.utl)
          window.location= JSON.parse(data).data.url

      },
      fail: function(status){
        console.log(status)
      }
    })

      // Price(this.props)
      // this.props.select[this.props.select.length-1].value = this.props.afterarea;
  }

  onBlur(e){
    // console.log(e)
  }

  render() {
    const {select, onBande, afterarea, area, lastArea,todos1,todos2,data,phone,id,} = this.props;
    return (
      <div className='Adjustment'>
        <div className='header-top'>
          <span>
            <Link to='/Configuration'>＜</Link>
          </span>
          <p>功能区面积调整
          </p>
          <HeaderBackground/>
          <h5>剩余<b>{afterarea}</b>平方米</h5>
        </div>
        <Text list={select} onHande={this.onChange} onBande={this.onBlur.bind(this)}  area={afterarea}/>
        <h3>注:(剩余面积均默认为敞开办公区)</h3>
        <div className='button'>
          <button onClick={this.onClick.bind(this)}>下一步</button>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {select: state.select, area: state.area.value, afterarea: state.afterarea.value, price: state.price, lastArea: state.lastArea.value,todos1:state.todos1,todos2:state.todos2,data:state,phone:state.phone,id:state.projectId}
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (event) => dispatch(action.addList(event)),
    lastPrice: (event) => dispatch(action.lastPrice(event)),
    feachPrice: (event) => dispatch(action.feachPrice(event)),
    officeSelect:(event)=>dispatch(action.officeSelect(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
