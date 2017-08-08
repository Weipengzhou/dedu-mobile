import React from 'react';
import './About.less';
import wechat from './gzwy.jpg'
class About extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className='About'>
          <div className='center'>
            <span></span>
            <div className="text">
                <h2><b>联系</b>我们</h2>
                <p>Contact us</p>
            </div>
            <span></span>

          </div>
          <div className='we'>
              <div className='we-top'>
                  <h2>公司地址:  </h2>
                  <p>上海市奉贤区西渡扶港路900号（总部）</p>
                  <p>上海市闵行区申长路588号虹桥绿谷广场B座606室</p>
                  <p>北京市朝阳区豆各庄黄厂路锦珑文创园B座5A层8501室</p>
              </div>
              <div className="we-center">
                  <h2>服务热线：</h2>
                  <p>上海热线  400-7676-399</p>
                  <p>北京热线  010-67379494</p>
              </div>
              <div className='we-bottom'>
                  <h2>微信公众号：</h2>
                  <img src={wechat} alt='wechat'/>
              </div>
          </div>
      </div>
    )
  }
}

export default About;
