import React from 'react';
import './Stuff.less';
import Header from '../../components/Header/Header';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import LeftNav from '../../components/LeftNav/LeftNav';
const Index=()=>(
  <div className='Stuff'>
      <Header/>
      <div className="bottom">
            <div className='center'>
              <span></span>
              <div className="text">
              <h2><b>399</b>套餐</h2>
                <p>399 Package</p>
              </div>
              <span></span>
            </div>
            <ul>
              <li><span><img src={one} alt="18天施工周期"/></span><h4>18天施工周期</h4><p>面积为400㎡以下的项目</p></li>
                <li><span><img src={two} alt="0元设计费"/></span><h4>0元设计费</h4><p>品牌装修材料</p></li>
                  <li><span><img src={three} alt="品牌装修材料"/></span><h4>品牌装修材料</h4><p>面积为400㎡以下的项目</p></li>
                    <li><span><img src={four} alt="线上线下双重监管"/></span><h4>线上线下双重监管</h4><p>正规、系统化项目管理</p></li>
                      <li><span><img src={five} alt="提供施工保险"/></span><h4>提供“施工保险”</h4><p>两年质保、终身维保，售后服务有保障</p></li>
            </ul>
      </div>

  </div>
)
const Stuff =()=>(
  <LeftNav text={<Index/>}></LeftNav>
)

export default Stuff;
