import React from 'react';
import './OnlineOfferAbout.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import ajax from '../../components/ajax/ajax';
import {hashHistory} from 'react-router';


const Design =(props)=>{
   if(props.AppBuilding.origin_image===''&&props.AppBuilding.plane_image===''){
     return (<div></div>)
   }else if(props.AppBuilding.origin_image===''){
     return(<div className='pic'>
      <h2 className='title'>平面图</h2>
      <div className='img'>
        <img src={props.AppBuilding.plane_image} alt='gzwy'/>
      </div>
     </div>)
   }else if(props.AppBuilding.plane_image===''){
     return(<div className='pic'>
      <h2 className='title'>平面图</h2>
      <div className='img'>
        <img src={props.AppBuilding.origin_image} alt='gzwy'/>
      </div>
     </div>)
   }else {
     return(<div className='pic'>
      <h2 className='title'>平面图</h2>
      <div className='img'>
        <img src={props.AppBuilding.origin_image} alt='gzwy'/>
      </div>
      <div className='img'>
        <img src={props.AppBuilding.plane_image} alt='gzwy'/>
      </div>
     </div>)
   }
}
const Jindu =(props)=>{
    switch (props.AppBuildingProgress.length) {
            case 1:
        return (<h3>最新进度:开工</h3>);
            case 2:
        return (<h3>最新进度:隐蔽工程</h3>);

            case 3:
        return (<h3>最新进度:分部工程</h3>);

            case 4:
        return (<h3>最新进度:安装工程</h3>);

            case 5:
        return (<h3>最新进度:完工</h3>);

            default:
        return (<h3>最新进度:开工</h3>);

    }
}
const Kaigong =()=>(
  <div className='fuwu clearfix'><p>成品保护</p><p>拆除工程</p></div>
);
const Yinbi =()=>(
  <div className='fuwu clearfix'><p>吊顶内线管</p><p>设备的安装</p><p>吊顶龙骨的安装</p><p>吊顶预埋或拉结筋</p><p>吊杆的安装</p><p>隔墙中的线管</p><p>电气预埋管</p><p>隔墙龙骨安装</p><p>隔墙预埋件或拉结筋安装</p><p>室内布线</p><p>面布置强弱线</p></div>
);
const Fenbu=()=>(
    <div className='fuwu clearfix'><p>顶面工程</p><p>墙体工程</p><p>涂料工程</p><p>地面工程</p></div>
);
const Anzhuang=()=>(
    <div className='fuwu clearfix'><p>灯具、洁具、家具安装</p><p>成品门及感应门安装，其他电器设备安装</p><p>开关插座面板安装，高隔安装 地毯、地板等安装</p></div>
);
const Wangong=()=>(
    <div className='fuwu clearfix'><p>验收合格</p><p>交付使用</p></div>
);
const Massage=(props)=>(
  <ul>
    {props.data.AppBuildingProgress.map((result,index)=>(
      <li key={index} className='pic clearfix'>
            <h2 className='title'>
              {
                result.progress_id===1?'开工':result.progress_id===2?'隐蔽工程':result.progress_id===3?'分部工程':result.progress_id===4?'安装工程':result.progress_id===5?'完工':''
              }
            </h2>
            <h3>{result.date_added.substr(0,10)}</h3>
            <div className='fuwu clearfix'>
              {
                result.progress_id===1?<Kaigong/>:result.progress_id===2?<Yinbi/>:result.progress_id===3?<Fenbu/>:result.progress_id===4?<Anzhuang/>:result.progress_id===5?<Wangong/>:''
            }
          </div>
            {JSON.parse(result.image).map((result,index)=>(
              <div className='img' key={index}>
                  <img src={'http://www.51ddo.com/'+result} alt='gzwy '/>
              </div>
            ))}
      </li>
    ))}
  </ul>
);

class Index extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:'',
  }
}
  componentDidMount() {
    hashHistory.listen(location => {
        //获取传递的数据，对象、值....
        console.log(location.query.id)
        var ur ="http://51ddo.com/app_dev.php/api/building/query?sku="+location.query.id+'&';

        var _this =this;
        ajax({
          url:ur , //请求地址
          type: "GET", //请求方式
          dataType: "json",
          success: function(response, xml) {
            // _this.setState({data:JSON.parse(response).data})
            // console.log(JSON.parse(response).data)
              _this.setState({data:JSON.parse(response).data})
            },
          fail: function(status) {
            // console.log(status)
            
          }
        });
      })

  }
  render(){
    if(this.state.data){
      return(
        <div className="OnlineOfferAbout">
            <div className='top'>
              <img src={"http://www.51ddo.com/"+this.state.data.AppBuilding.background_image} alt='背景图' className='img'/>
                <div className='top-c'>
                    <h2>{this.state.data.AppBuilding.address}</h2>
                    <Jindu AppBuildingProgress={this.state.data.AppBuildingProgress}/>
                    <div className='design'>
                        <p>设计师：{this.state.data.designer.username}</p>
                        <p>监理 项目经理：{this.state.data.supervision.username}</p>
                        <p>工长：{this.state.data.foreman.username}</p>

                        <p>装修风格：{this.state.data.style}</p>
                        <p>面积：{this.state.data.AppBuilding.area}㎡</p>
                    </div>
                </div>

            </div>
            <Design AppBuilding={this.state.data.AppBuilding}/>
            <Massage data={this.state.data}/>
        </div>
      )

    }else{
      return (
        <div className='spinners'>
            <div id="preloader5"></div>
        </div>
      )
    }
  }
}

const OnlineOfferAbout =()=>(
    <LeftNav text={<Index/>}></LeftNav>
)



export default OnlineOfferAbout;
