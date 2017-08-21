import React from 'react';
import './OnlineOffer.less';
import ajax from '../../components/ajax/ajax';
import {hashHistory} from 'react-router';
import actions from '../../redux/actions';
import {connect} from 'react-redux';



class Index extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.divClick=this.divClick.bind(this);
    this.onload=this.onload.bind(this);
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
              {id:'',ido:'0',name:'不限',type:'area'},
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
      three:{'areamin':'0','areamax':'0'},
      page:1,
      text:'点击加载更多...'
        }
      }


    handleClick(e){

      if(e===this.state.curr){
        this.setState({curr:''})
      }else{
          this.setState({curr:e})
      }

    }

    handleLiClick(e){
      var json = '';
      switch (e.type) {
        case 'districtId':
          this.props.checkBoxDistrictId({districtId:e.name,one:e.id});
          json = {
            'districtId':e.id,
            'style':this.props.checkbox_style.two,
            'area[min]':this.props.checkbox_area.three.areamin,
            'area[max]':this.props.checkbox_area.three.areamax,
            'progress':this.props.checkbox_progress.four,
          }
          break;
          case 'style':
          this.props.checkBoxStyle({style:e.name,two:e.id});
          json = {
            'districtId':this.props.checkbox_districtId.one,
            'style':e.id,
            'area[min]':this.props.checkbox_area.three.areamin,
            'area[max]':this.props.checkbox_area.three.areamax,
            'progress':this.props.checkbox_progress.four,
          }
          break;
          case 'area':
          this.props.checkBoxArea({area:e.name,three:{'areamin':e.id,'areamax':e.ido}});
          json ={
            'districtId':this.props.checkbox_districtId.one,
            'style':this.props.checkbox_style.two,
            'area[min]':e.id,
            'area[max]':e.ido,
            'progress':this.props.checkbox_progress.four,
          }
          break;
          case 'progress':
          this.props.checkBoxProgress({progress:e.name,four:e.id});
          json ={
            'districtId':this.props.checkbox_districtId.one,
            'style':this.props.checkbox_style.two,
            'area[min]':this.props.checkbox_area.three.areamin,
            'area[max]':this.props.checkbox_area.three.areamax,
            'progress':e.id,
          }
          break;
        default:

      }
      this.setState({curr:''});

      var _this=this;
      ajax({
        url:'http://www.51ddo.com/api/building/list/'+this.state.page, //请求地址
        type: "GET", //请求方式
        dataType: "json",
        data:json,
        success: function(response, xml) {
          // _this.setState({data:JSON.parse(response).data})
          console.log(JSON.parse(response))
          if(JSON.parse(response).AppBuilding.length===0){
            _this.setState({text:'暂无更多'})
          }else{
              _this.setState({data:JSON.parse(response),text:'点击加载更多'})}
          },
        fail: function(status) {
          // console.log(status)

        }
      });
  }
    handleChange(e) {
    this.setState({sku: e.target.value})
  }
    handleSubmit() {

    if (this.state.sku === '') {
      alert('请输入合同号')
    } else {
      var _this = this;
      ajax({
        url: "http://51ddo.com/app_dev.php/api/building/query?sku=" + _this.state.sku + '&', //请求地址
        type: "GET", //请求方式
        dataType: "json",
        success: function(response, xml) {
          if (JSON.parse(response).data.length === 0) {
            alert('请输入正确的合同号')
          } else {
            hashHistory.push({
              pathname: 'OnlineofferAbout',
              query: {
                id: _this.state.sku
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
  divClick(e){
    hashHistory.push({
      pathname: 'OnlineofferAbout',
      query: {
        id: e
      }
    })
  }
  onload(){
    console.log(1)
    var json = {
      'districtId':this.props.checkbox_districtId.one,
      'style':this.props.checkbox_style.two,
      'area[min]':this.props.checkbox_area.three.areamin,
      'area[max]':this.props.checkbox_area.three.areamax,
      'progress':this.props.checkbox_progress.four,
    };
    var _this=this;
    ajax({
      url:'http://www.51ddo.com/api/building/list/'+parseInt(this.state.page), //请求地址
      type: "GET", //请求方式
      dataType: "json",
      data:json,
      success: function(response, xml) {
        // _this.setState({data:JSON.parse(response).data})
        console.log(JSON.parse(response))
        if(JSON.parse(response).AppBuilding.length===0){
          _this.setState({text:'暂无更多'})
        }else{
              _this.setState({data:{AppBuilding:_this.state.data.AppBuilding.concat(JSON.parse(response).AppBuilding)},page:parseInt(JSON.parse(response).page)+1,text:'点击加载更多'})
        }
        },
      fail: function(status) {
        // console.log(status)

      }
    });
  }
  componentDidMount() {
    var json = {
      'districtId':this.props.checkbox_districtId.one,
      'style':this.props.checkbox_style.two,
      'area[min]':this.props.checkbox_area.three.areamin,
      'area[max]':this.props.checkbox_area.three.areamax,
      'progress':this.props.checkbox_progress.four,
    };
    var _this=this;
    ajax({
      url:'http://www.51ddo.com/api/building/list', //请求地址
      type: "GET", //请求方式
      dataType: "json",
      data:json,
      success: function(response, xml) {
        // _this.setState({data:JSON.parse(response).data})
        console.log(JSON.parse(response))
        if(JSON.parse(response).AppBuilding.length===0){
          _this.setState({text:'暂无更多'})
        }else{
            _this.setState({data:JSON.parse(response),text:'点击加载更多'})
          }
        },
      fail: function(status) {
        // console.log(status)

      }
    });
  }


  render(){
    console.log(this.state)
    const {checkbox_districtId, checkbox_style,checkbox_area,checkbox_progress,checkBoxDistrictId,checkBoxStyle,checkBoxArea,checkBoxProgress} = this.props;

      if(this.state.data){
        return(
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

            <ul className='center-nav clearfix'>
              {this.state.list.map((result, index) => (
                <li key={index} className={index===this.state.curr ? 'curr' : ''}>
                  <h2 onClick={this.handleClick.bind(this,index)}>{index===0?this.props.checkbox_districtId.districtId:index===1?this.props.checkbox_style.style:index===2?this.props.checkbox_area.area:index===3?this.props.checkbox_progress.progress:''}<b id='triangle-down'></b></h2>
                  <ul>
                    {result.text.map((result, index) => (
                    <li key={index} data-index={result.id} data-two={result.ido} onClick={this.handleLiClick.bind(this,result)}>{result.name}</li>
                    ))}
                  </ul>

                </li>
              ))}
            </ul>
              <div className='liebiao'>{this.state.data.AppBuilding.map((result,index)=>(
                <div key={index} onClick={(e)=>this.divClick(result.sku)}>
                  <h2>{result.title}</h2>
                  <div className='txt'>
                    <p>面积:</p><b>{result.area}㎡</b>
                  </div>
                  <div className='txt'>
                    <p>装修风格:</p><b>{result.style}</b>
                  </div>
                  <div className='txt'>
                    <p>施工进度:</p><b>{result.progress===1?'开工大吉':result.progress===2?'隐蔽工程':result.progress===3?'分部工程':result.progress===4?'安装工程':'完工'}</b>
                  </div>
                </div>
              ))}

              </div>
              <p className='onload' onClick={this.onload}>{this.state.text}</p>
              </div>
        )
      }
        else{
          return(
            <div className='spinners'>
                <div id="preloader5"></div>
            </div>)
        }

  }
}




function mapStateToProps(state) {
  return {checkbox_progress:state.checkbox_progress,checkbox_area:state.checkbox_area,checkbox_style:state.checkbox_style,checkbox_districtId:state.checkbox_districtId}
}

function mapDispatchToProps(dispatch) {
  return {
  checkBoxDistrictId: (val) => dispatch(actions.checkBoxDistrictId(val)),
  checkBoxStyle: (val) => dispatch(actions.checkBoxStyle(val)),
  checkBoxArea: (val) => dispatch(actions.checkBoxArea(val)),
  checkBoxProgress: (val) => dispatch(actions.checkBoxProgress(val)),
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(Index);
