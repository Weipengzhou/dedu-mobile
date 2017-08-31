import React from 'react';
import {createStore} from 'redux';
import reducer from '../../redux/reducers';
import action from '../../redux/actions';
import {connect} from 'react-redux';
import ajax from '../ajax/ajax';

class LikeButton extends React.Component {
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state={
        count: 60,
        liked: true
      }
    }
    getInitialState(){
        return {
          count: 60,
          liked: true
        };
      }

    handleClick(){
      console.log(this.props.phone)
      if(typeof(this.props.phone)=='undefined'){
        alert('请输入正确手机号')
        return false
      }
        if(this.state.liked){
          this.timer = setInterval(function () {
            var count = this.state.count;
            this.state.liked = false;
            count -= 1;
            if (count < 1) {
              this.setState({
                liked: true
              });
              count = 60;
            clearInterval(this.timer)
            }
            this.setState({
              count: count
            });
          }.bind(this), 1000);
          var _this = this;
          var data = {phone:this.props.phone}

          ajax({
            url: "https://www.51ddo.com/api/pricing-table/sms", //请求地址
            type: "POST", //请求方式
            data: data, //请求参数
            dataType: "json",
            success: function(msg) {
              // console.log(msg)
              _this.props.tokenChange(JSON.parse(msg).data)

            },
            error: function(status) {
              console.log(status)
            }
          })


        }



      }

      render(){
        const {phone,tokenChange,codeChange}=this.props;
        var text = this.state.liked ? '获取验证码' : this.state.count + '秒后重新获取';
        return(
          <div className='yz'>
             <input type='text' placeholder='请输入验证码' className='form-control' onChange={this.props.codeChange}/>
             <button onClick={this.handleClick}>{text}</button>
          </div>
        )
      }


}
function mapStateToProps(state) {
  return {
      phone:state.phone,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    tokenChange: (event) => dispatch(action.token(event)),
    codeChange:   (event) => dispatch(action.code(event.target.value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
