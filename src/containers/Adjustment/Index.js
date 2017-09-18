import React  from 'react';
import {Router, Route, Link} from 'react-router';
import action from '../../redux/actions';
import {connect} from 'react-redux';
import HeaderBackground from '../../components/HeaderBackground/HeaderBackground';
import Text from '../../components/Text/Text';
import LikeButton from '../../components/LikeButton/LikeButton';
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
      url: "https://www.51ddo.com/api/price", //请求地址
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
    if(typeof(this.props.phone)=='undefined'){
      alert('请输入手机号')
      return false
    }else if(typeof(this.props.code)=='undefined'){
      alert('请输入验证码')
      return false
    }else if(typeof(this.props.token)=='undefined'){
      alert('请获取验证码后输入')
      return false
    }
    var data={token:this.props.token.token,phone:this.props.phone,code:this.props.code};
    var _this=this;
    if(this.props.code == this.props.token.code){
      ajax({
        url: "https://www.51ddo.com/api/pricing-table/sms/verify", //请求地址
        type: "POST", //请求方式
        data:data, //请求参数
        dataType: "json",
        success: function(response, xml) {

           const save = 'https://www.51ddo.com/api/pricing-table/extraData'
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
                phone:_this.props.phone,
                id:JSON.parse(response).data.pricingTable.id,
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
        },
        fail: function(status) {
          console.log(status)
        }
      });
    }else {
      alert('请输入正确的验证码')
      return false;
    }


      // Price(this.props)
      // this.props.select[this.props.select.length-1].value = this.props.afterarea;
  }

  onBlur(e){
  this.props.phoneNumber(e)
  }

  render() {
    const {select, onBande, afterarea, area, lastArea,todos1,todos2,data,phone,id,phoneNumber,token,projectId} = this.props;
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
          <div className='inp'>
            <label>
              <span className="icon-3"></span>
              <p>手机号:</p>
                  </label>
                <input type="number" onChange={this.onBlur.bind(this)}></input>
                <b></b>
          </div>
          <div className='inp like'>
             <LikeButton/>
          </div>
        <h3>注:(剩余面积均默认为敞开办公区)</h3>
        <div className='button'>
          <button onClick={this.onClick.bind(this)}>下一步</button>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {select: state.select, area: state.area.value, afterarea: state.afterarea.value, price: state.price, lastArea: state.lastArea.value,todos1:state.todos1,todos2:state.todos2,data:state,phone:state.phone,id:state.projectId,code:state.code,token:state.token}
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (event) => dispatch(action.addList(event)),
    lastPrice: (event) => dispatch(action.lastPrice(event)),
    feachPrice: (event) => dispatch(action.feachPrice(event)),
    officeSelect:(event)=>dispatch(action.officeSelect(event)),
      phoneNumber:(event)=>dispatch(action.phoneNumber(event.target.value)),
        projectId:(event)=>dispatch(action.projectId(event)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
