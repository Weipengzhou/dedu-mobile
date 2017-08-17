import React from 'react';
import './OnlineOffer.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import ajax from '../../components/ajax/ajax';
import {hashHistory} from 'react-router';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state={
      list:[{
            title: '地区',
            text: [
              {
                id: '0',
                name: '不限',
                type:'districtId',
              }, {
                id: '310115',
                name: '浦东新区',
                type:'districtId',
              }, {
                id: '310104',
                name: '徐汇区',
                type:'districtId',
              }, {
                id: '310101',
                name: '黄浦区',
                type:'districtId',
              }, {
                id: '310110',
                name: '杨浦区',
                type:'districtId',
              }, {
                id: '310109',
                name: '虹口区',
                type:'districtId',
              }, {
                id: '310112',
                name: '闵行区',
                type:'districtId',
              }, {
                id: '310105',
                name: '长宁区',
                type:'districtId',
              }, {
                id: '310107',
                name: '普陀区',
                type:'districtId',
              }, {
                id: '310113',
                name: '宝山区',
                type:'districtId',
              }, {
                id: '310106',
                name: '静安区',
                type:'districtId',
              }, {
                id: '310108',
                name: '闸北区',
                type:'districtId',
              }, {
                id: '310117',
                name: '松江区',
                type:'districtId',
              }, {
                id: '10114',
                name: '嘉定区',
                type:'districtId',
              }, {
                id: '310116',
                name: '金山区',
                type:'districtId',
              }, {
                id: '310118',
                name: '青浦区',
                type:'districtId',
              }, {
                id: '310120',
                name: '奉贤区',
                type:'districtId',
              },]
          },
          {
            title:'装修风格',
            text:[
              {id:'0',name:'不限',type:'style'},
              {id:'1',name:'标准实用型',type:'style'},
              {id:'2',name:'舒适定制型',type:'style'}
            ]
          },
          {
            title:'面积',
            text:[
              {id:'',name:'不限',type:'area'},
              {id:'0',ido:'400',name:'0-400㎡',type:'area'},
              {id:'400',ido:'0',name:'400以上',type:'area'}
            ]
          },
          {
            title:'施工进度',
            text:[
              {id:'',name:'全部',type:'progress'},
              {id:'1',name:'开工大吉',type:'progress'},
              {id:'2',name:'隐蔽工程',type:'progress'},
              {id:'3',name:'分部工程',type:'progress'},
              {id:'4',name:'安装工程',type:'progress'},
              {id:'5',name:'完工',type:'progress'}
          ],

        }],
      curr:'',
      districtId:'地区',
      style:'装修风格',
      area:'面积',
      progress:'施工进度',
      three:{'areamin':'0','areamax':'0'}
      }
    }
    handleClick(e){
      console.log(e)
      if(e===this.state.curr){
        this.setState({curr:''})
      }else{
          this.setState({curr:e})
      }

    }
    handleLiClick(e){
      switch (e.type) {
        case 'districtId':
          this.setState({districtId:e.name,one:e.id});
          break;
          case 'style':
          this.setState({style:e.name,two:e.id})
          break;
          case 'area':
          this.setState({area:e.name,three:{'areamin':e.id,'areamax':e.ido}})
          break;
          case 'progress':
          this.setState({progress:e.name,four:e.id})
          break;
        default:

      }
      this.setState({curr:''});
      var json ={
        'map[ne_lng]':'',
        'map[ne_lat]':'',
        'map[sw_lng]':'',
        'map[sw_lat]':'',
        'districtId':this.state.one,
        'style':this.state.two,
        'area[min]':this.state.three.areamin,
        'area[max]':this.state.three.areamax,
        'progress':this.state.four,
      }
      ajax({
        url:'http://www.51ddo.com/api/building/list', //请求地址
        type: "GET", //请求方式
        dataType: "json",
        data:json,
        success: function(response, xml) {
          // _this.setState({data:JSON.parse(response).data})
          console.log(JSON.parse(response))
          },
        fail: function(status) {
          // console.log(status)

        }
      });
  }
  componentDidMount() {

  }
  render(){

    return(
      <ul className='center-nav'>
        {this.state.list.map((result, index) => (
          <li key={index} className={index===this.state.curr ? 'curr' : ''}>
            <h2 onClick={this.handleClick.bind(this,index)}>{index===0?this.state.districtId:index===1?this.state.style:index===2?this.state.area:index===3?this.state.progress:''}<b id='triangle-down'></b></h2>
            <ul>
              {result.text.map((result, index) => (
              <li key={index} data-index={result.id} data-two={result.ido} onClick={this.handleLiClick.bind(this,result)}>{result.name}</li>
              ))}
            </ul>

          </li>
        ))}
      </ul>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      data: '',
  }
}
  handleChange(e) {
    this.setState({data: e.target.value})
  }
  handleSubmit() {

    if (this.state.data === '') {
      alert('请输入合同号')
    } else {
      var _this = this;
      ajax({
        url: "http://51ddo.com/app_dev.php/api/building/query?sku=" + _this.state.data + '&', //请求地址
        type: "GET", //请求方式
        dataType: "json",
        success: function(response, xml) {
          if (JSON.parse(response).data.length === 0) {
            alert('请输入正确的合同号')
          } else {
            hashHistory.push({
              pathname: 'OnlineofferAbout',
              query: {
                id: _this.state.data
              }
            })
          }

        },
        fail: function(status) {
          console.log(status)
        }
      });
    }
  }

  render() {
    return (
      <div className='OnlineOffer'>
        <div className="top">
          <div className='center'>
            <span></span>
            <div className="text">
              <h2>
                <b>施工</b>列表</h2>
              <p>ConstructionList</p>
            </div>
            <span></span>

          </div>
        </div>
        <div className='bottom clearfix'>
          <input type="text" placeholder='请输入合同号' onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>立即查询</button>
        </div>

          <List/>

      </div>
    )
  }
}

const OnlineOffer = () => (
  <LeftNav text={< Index />}></LeftNav>
)

export default OnlineOffer;
