import React from 'react';
import './DesignCases.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import {hashHistory} from 'react-router';

const Cases=(props)=>(
    <ul>
    { props.list.map((result,index)=>(
      <li key={index} onClick={()=>props.handleClick({id:result.id})}>

              <img src={'http://www.51ddo.com/'+result.image} alt="gzwy"/>
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
        "data": [
          {
          "id": 1,
          "name": "虹桥绿谷8楼东方美谷",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee,\\u667a\\u80fd\\u8bbe\\u5907\"",
          "image": "/uploads/display_cases/21e219dca7e00f0963fef47a8b0d1322.jpeg",
          "area": 600,
          "day": 20
      },
      {
          "id": 2,
          "name": "智慧园",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/9478e006a2bf4ff1ff1207081756066b.jpeg",
          "area": 850,
          "day": 30
      },
      {
          "id": 11,
          "name": "公装无忧虹桥绿谷6楼办公室",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee,\\u667a\\u80fd\\u8bbe\\u5907\"",
          "image": "/uploads/display_cases/160ab4b49aa25fbbb4faf6ff39057aa1.jpeg",
          "area": 600,
          "day": 20
      },
      {
          "id": 12,
          "name": "沈砖公路702",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/e9dd25ce84b22d9878ac367b59d88fbf.jpeg",
          "area": 200,
          "day": 20
      },
      {
          "id": 13,
          "name": "沈砖公路801",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/ad518d38cb872c189dd0feec6523550a.jpeg",
          "area": 300,
          "day": 20
      },
      {
          "id": 15,
          "name": "云享客上海虹桥中心",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/cedf206b2655ff359a4557ac6cbcbcbf.jpeg",
          "area": 1100,
          "day": 45
      },
      {
          "id": 16,
          "name": "西渡启承",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/89ca121f0ea981bf27627765787aba38.jpeg",
          "area": 800,
          "day": 45
      },
      {
          "id": 17,
          "name": "杜玛展示厅",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/1b4e21444ca53b885bba23e2b82f4d7e.jpeg",
          "area": 300,
          "day": 18
      },
      {
          "id": 18,
          "name": "申旺路",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/071df59b5e4d6b29a423c247e6b56d07.jpeg",
          "area": 405,
          "day": 40
      },
      {
          "id": 19,
          "name": "常熟设界项目",
          "tags": "\"\\u786c\\u88c5\\u88c5\\u4fee,\\u8f6f\\u88c5\\u88c5\\u4fee\"",
          "image": "/uploads/display_cases/a736a84fb9d223851969b98aeff89c64.jpeg",
          "area": 2200,
          "day": 18
      }]
    }
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
