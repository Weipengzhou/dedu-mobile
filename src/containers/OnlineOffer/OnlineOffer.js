import React from 'react';
import './OnlineOffer.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import ajax from '../../components/ajax/ajax';
import {hashHistory} from 'react-router';

class Index extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.state={
      data:'',
    }
  }
  handleChange(e){
    this.setState({data:e.target.value})
  }
  handleSubmit(){
    hashHistory.push({
     pathname: 'OnlineofferAbout',
     query: {
      id:this.state.data,
     },
    })
      // if(this.state.data == ''){
      //   alert('请输入合同号')
      // }else{
      //   var _this =this;
      //   ajax({
      //     url: 'http://www.51ddo.com/app_dev.php/api/building/query', //请求地址
      //     type: "GET", //请求方式
      //     dataType: "json",
      //     success: function(response, xml) {
      //
      //
      //       },
      //     fail: function(status) {
      //       console.log(status)
      //     }
      //   });
      // }
  }

  render(){
    return(
    <div className='OnlineOffer'>
      <div className="top">
        <div className='center'>
          <span></span>
          <div className="text">
              <h2><b>施工</b>查询</h2>
              <p>OnlineOffer</p>
          </div>
          <span></span>

        </div>
        <ul>
          <li>

            <div className='center'>
              <img src={one} alt='gzwy'/>

            </div>
            <span>311</span>
            <p>上海地区总项目数</p>

          </li>
          <li>

            <div className='center'>
              <img src={two} alt='gzwy'/>

            </div>
            <span>10</span>
            <p>上海地区刚开工项目数</p>

          </li>
          <li>

            <div className='center'>
              <img src={three} alt='gzwy'/>

            </div>
            <span>20</span>
            <p>上海地区正在施工项目数</p>

          </li>
          <li>

            <div className='center'>
              <img src={four} alt='gzwy'/>

            </div>
            <span>281</span>
            <p>上海地区已完工项目数</p>

          </li>
        </ul>
      </div>
      <div className='bottom'>
          <h2>施工进度查询</h2>
          <div className='label'>
              <p>合同号:</p>
              <input type="text" placeholder='请输入合同号' onChange={this.handleChange}/>
          </div>
          <button onClick={this.handleSubmit}>立即查询</button>
      </div>
    </div>
    )
  }
}

const OnlineOffer =()=>(
    <LeftNav text={<Index/>}></LeftNav>
)

export default OnlineOffer;
