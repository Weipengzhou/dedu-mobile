import React from 'react';
import './DesignCases.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import {hashHistory} from 'react-router';
import ajax from '../../components/ajax/ajax';

const Cases=(props)=>(
    <ul>
    { props.list.map((result,index)=>(
      <li key={index} onClick={()=>props.handleClick({id:result.id})}>

              <img src={'https://www.51ddo.com/'+result.image} alt="gzwy"/>
              <p>{result.name}</p>
              <div className='icon'>
                <span className='mianji'></span><i>{result.area}㎡</i>
                <span className='time'></span><i>{result.day}天</i>
              </div>

     </li>))
   }
  </ul>
)

class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={

    }
  }
  componentDidMount(){
    var _this =this;
    ajax({
      url: " https://51ddo.com/api/displayCases/", //请求地址
      type: "GET", //请求方式
      dataType: "json",
      success: function(response, xml) {

        _this.setState({data:JSON.parse(response).data})

        },
      fail: function(status) {
        console.log(status)
      }
    });
  }
  handleClick = (value) => {
  hashHistory.push({
   pathname: 'DesignCases/DesignCasesAbout',
   query: {
    id:value.id,
   },
  })
 }
  render(){
    console.log(this.state)
    if(this.state.data){
      return(
        <div className='DesignCases'>
            <div className='center'>
              <span></span>
              <div className="text">
                  <h2><b>设计</b>案例</h2>
                  <p>Design Cases</p>
              </div>
              <span></span>

            </div>
            <Cases list={this.state.data} handleClick={this.handleClick.bind(this)}></Cases>
        </div>
      )

    }else{
      return(
        <div className='spinners'>
            <div id="preloader5"></div>
        </div>)
    }
  }
}
class DesignCases extends React.Component{
  render(){
    return(
        <LeftNav text={<Index/>}></LeftNav>
    )
  }
}
export default DesignCases;
