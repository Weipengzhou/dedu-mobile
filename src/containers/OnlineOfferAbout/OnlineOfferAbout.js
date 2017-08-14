import React from 'react';
import './OnlineOfferAbout.less';
import LeftNav from '../../components/LeftNav/LeftNav';
import ajax from '../../components/ajax/ajax';
import {hashHistory} from 'react-router';
import actions from '../../redux/actions';
import {connect} from 'react-redux';

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
                result.progress_id==1?'开工':result.progress_id==2?'隐蔽工程':result.progress_id==3?'分部工程':result.progress_id==4?'安装工程':result.progress_id==5?'完工':''
              }
            </h2>
            <h3>{result.date_added.substr(0,10)}</h3>
            <div className='fuwu clearfix'>
              {
                result.progress_id==1?<Kaigong/>:result.progress_id==2?<Yinbi/>:result.progress_id==3?<Fenbu/>:result.progress_id==4?<Anzhuang/>:result.progress_id==5?<Wangong/>:''
            }
          </div>
            {JSON.parse(result.image).map((result,index)=>(
              <div className='img' key={index}>
                  <img src={'http://www.51ddo.com/'+result}/>
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
      "data": {
          "AppBuilding": {
              "id": 24,
              "sku": "20150907003A",
              "title": "奉贤卓越办公室装修工程",
              "description": "",
              "content": "",
              "image": "/uploads/building/2493abc3ae803a7b1abd58bf59198f23.jpeg",
              "logo": "/uploads/building/421fae4b11379e1b9b51810bdac2372d.png",
              "origin_image": "",
              "plane_image": "",
              "background_image": "/uploads/building/48268ff60518d4d0a1227b540150767e.jpeg",
              "up": 769,
              "views": 909,
              "price": 55000,
              "province_id": 310000,
              "city_id": 310100,
              "district_id": 310120,
              "address": "奉贤百富路卓越世纪中心优淘城",
              "style": "1",
              "area": 200,
              "designer": 60,
              "supervision": 38,
              "foreman": 30,
              "map": 1,
              "abscissa": "121.498653",
              "ordinate": "30.917388",
              "comment": "很满意",
              "progress": 5,
              "published": "1",
              "date_added": "2015-08-14T18:19:00+0800"
          },
          "AppBuildingProgress": [
              {
                  "id": 39,
                  "progress_id": 1,
                  "building_id": 24,
                  "score": 10,
                  "content": "<p>成品保护</p><p>拆除工程</p>",
                  "master_comment": "",
                  "customer_comment": "",
                  "image": "[\"\\/uploads\\/building_progress\\/5b72a3cea2dd5453fe543e0a302fdfe7.jpeg\",\"\\/uploads\\/building_progress\\/0b8e62aefd1751cb05c7ac43eaae3af2.jpeg\",\"\\/uploads\\/building_progress\\/fcfd1b11540c2b62f9a7a09516b58724.jpeg\",\"\\/uploads\\/building_progress\\/3ef5f673cdcc532972bb12761f1c2dc1.jpeg\"]",
                  "date_added": "2015-08-14T18:22:00+0800"
              },
              {
                  "id": 46,
                  "progress_id": 2,
                  "building_id": 24,
                  "score": 10,
                  "content": "<p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">吊顶内线管、设备的安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">吊顶龙骨的安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">吊顶预埋或拉结筋、吊杆的安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">隔墙中的线管、设备安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">隔墙龙骨安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">隔墙预埋件或拉结筋安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">电气预埋管</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">室内布线</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">地面布置强弱线</p>",
                  "master_comment": "",
                  "customer_comment": "",
                  "image": "[\"\\/uploads\\/building_progress\\/ddeb35d136c79c690aea278db037d7cd.jpeg\",\"\\/uploads\\/building_progress\\/c7a4e6b1632d3a41e592ce08855ddab1.jpeg\",\"\\/uploads\\/building_progress\\/bac564eb9ecc51ac8e1d76aff16a8233.jpeg\",\"\\/uploads\\/building_progress\\/1244896c3b514d64f5a7ef34f62a7948.jpeg\"]",
                  "date_added": "2015-08-18T19:16:00+0800"
              },
              {
                  "id": 47,
                  "progress_id": 3,
                  "building_id": 24,
                  "score": 10,
                  "content": "<p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">顶面工程</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">墙体工程</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">涂料工程</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">地面工程</p><div><br></div>",
                  "master_comment": "",
                  "customer_comment": "",
                  "image": "[\"\\/uploads\\/building_progress\\/7b12e9e5576b979ebe809aa2fc245891.jpeg\",\"\\/uploads\\/building_progress\\/0c856afa8a2ea4d863b37f3578fbf8ae.jpeg\",\"\\/uploads\\/building_progress\\/7efd51a22536943ce2524b82331e60b9.jpeg\",\"\\/uploads\\/building_progress\\/d58c6d9a8ef149120c6b0332905d5ae4.jpeg\"]",
                  "date_added": "2015-08-22T19:18:00+0800"
              },
              {
                  "id": 48,
                  "progress_id": 4,
                  "building_id": 24,
                  "score": 10,
                  "content": "<p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">灯具、洁具、家具安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">开关插座面板安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">高隔安装 地毯、地板等安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">成品门及感应门安装</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">其他电器设备安装</p>",
                  "master_comment": "",
                  "customer_comment": "",
                  "image": "[\"\\/uploads\\/building_progress\\/592e2e8d9514ed100674278bd797233a.jpeg\",\"\\/uploads\\/building_progress\\/d6cb8a49dba76cd24764062ea9978bb1.jpeg\",\"\\/uploads\\/building_progress\\/921f6ff4d5bf57d937ac58f8fcf7d2e5.jpeg\",\"\\/uploads\\/building_progress\\/da984a0a33253e4bf8d85f8cfe88d886.jpeg\"]",
                  "date_added": "2015-08-26T19:20:00+0800"
              },
              {
                  "id": 49,
                  "progress_id": 5,
                  "building_id": 24,
                  "score": 10,
                  "content": "<p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">验收合格</p><p style=\"word-wrap: break-word; margin-bottom: 0px; padding: 0px; font-size: 14px; font-family: 'Segoe UI', 'Lucida Grande', Helvetica, Arial, 'Microsoft YaHei', FreeSans, Arimo, 'Droid Sans', 'wenquanyi micro hei', 'Hiragino Sans GB', 'Hiragino Sans GB W3', FontAwesome, sans-serif; background-color: rgb(249, 247, 246);\">交付使用</p>",
                  "master_comment": "",
                  "customer_comment": "",
                  "image": "[\"\\/uploads\\/building_progress\\/79a5b39fb09306d304d5f5b7312e140f.jpeg\",\"\\/uploads\\/building_progress\\/bbb29d4f68a363bac323c1ed2f70749f.jpeg\",\"\\/uploads\\/building_progress\\/97a472560bf8de66a96ad07605843402.jpeg\",\"\\/uploads\\/building_progress\\/679c7986ff17855adc4a46ab874b2b83.jpeg\"]",
                  "date_added": "2015-08-30T19:21:00+0800"
              }
          ],
          "settingTypeBuildingProgress": {
              "1": "开工",
              "2": "隐蔽工程",
              "3": "分部工程",
              "4": "安装工程",
              "5": "完工"
          },
          "designer": {
              "id": 60,
              "type": "designer",
              "username": "杨西*",
              "image": "/uploads/building_user/ad5571b5123176f7f14881442ba9f885.png"
          },
          "supervision": {
              "id": 38,
              "type": "supervision",
              "username": "张*",
              "image": "/uploads/building_user/7f109f814767f1165226d154aa9f78ff.png"
          },
          "foreman": {
              "id": 30,
              "type": "foreman",
              "username": "祝冬*",
              "image": "/uploads/building_user/a59f50f1cc45e3279c73d902aa0b32d9.png"
          },
          "style": "标准实用型"
      }
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
              console.log(JSON.parse(response))
            },
          fail: function(status) {
            // console.log(status)
              console.log(_this.state.data)

          }
        });
      })

  }
  render(){

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
  }
}

const OnlineOfferAbout =()=>(
    <LeftNav text={<Index/>}></LeftNav>
)


const mapStateToProps=(state)=>{
  return{
    data:state.data,
  }
}


const mapDispatchToProps =(dispatch)=>{
  return{
    restData:(val)=>dispatch(actions.dataInformation(val))
  }
}


export default  connect(mapStateToProps, mapDispatchToProps)(OnlineOfferAbout);
