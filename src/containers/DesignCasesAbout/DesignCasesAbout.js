  import React from 'react';
import './DesignCasesAbout.less';
import ajax from '../../components/ajax/ajax'
import LeftNav from '../../components/LeftNav/LeftNav';
import {hashHistory} from 'react-router';


class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={

  }
}
  componentDidMount() {
    hashHistory.listen(location => {
        //获取传递的数据，对象、值....
        var _this =this;
        ajax({
          url: " http://51ddo.com/app_dev.php/api/displayCases/view/"+location.query.id, //请求地址
          type: "GET", //请求方式
          dataType: "json",
          success: function(response, xml) {
            _this.setState({data:JSON.parse(response).data})

            },
          fail: function(status) {
            console.log(status)
          }
        });
      })

  }
  render(){

        if(this.state.data){
          return(

            <div className='DesignCasesAbout'>
              <div className='left'>
                <img src={'http://www.51ddo.com/'+this.state.data.designerEntity.image} alt='gzwy'/>
              </div>
              <div className='right'>
                  <h2>设计师:{this.state.data.designerEntity.username}</h2>
                  <h3>项目名称：</h3><p>{this.state.data.entity.name}</p>
                  <h3>建筑面积：</h3><p>{this.state.data.entity.area}㎡ </p>
                  <h3>服务项目：</h3><p>{JSON.parse(this.state.data.entity.tags)}</p>
              </div>
              <ul>
                    {this.state.data.displayCaseImages.map(function(result,index){
                      if(result.images.length!==0){
                        return (
                          <li key={index}>
                                <h2>{result.name}</h2>
                                {result.images.map((a,b)=>(
                                  <div className='img' key={b}><img src={'http://www.51ddo.com/'+a.image} alt="gzwy"/></div>
                                ))}
                          </li>
                        )
                      }
                  })}
              </ul>

            </div>
          )

        }else{
          return(
            <div className='spinners'>
                <div id="preloader5"></div>
            </div>
          )
        }

  }
}
class DesignCasesAbout extends React.Component{
  render(){
    return(
      <LeftNav text={<Index/>}></LeftNav>
    )
  }
}
export default DesignCasesAbout;
