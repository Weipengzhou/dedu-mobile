import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './Index.less';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';

class Index extends React.Component{

      render(){
        return(
          <div>
            <div className='nav'>
                <div className='center'>
                    <span></span>
                    <div className="text">
                      <h2>公装无忧</h2>
                      <p>一站式公装服务平台</p>
                    </div>
                    <span></span>
                    <button>立即预约</button>
                </div>
            </div>
            <div className='bottom'>
                <h2>公装无忧能做什么？</h2>
                <ul>
                    <li>
                      <div className='center'>
                        <img src={one}/>

                        </div>
                        <span>399</span>
                          <p>硬装套餐</p>
                    </li>
                    <li>
                      <div className='center'>
                        <img src={two}/>

                        </div>
                        <span>施工</span>
                          <p>在线施工进度查询</p>
                    </li>
                    <li>
                      <div className='center'>
                        <img src={three}/>

                        </div>
                        <span>报价</span>
                          <p>在线报价</p>
                    </li>
                    <li>
                      <div className='center'>
                        <img src={four}/>

                        </div>
                        <span>设计</span>
                          <p>个性化设计案例</p>
                    </li>
                </ul>
            </div>

          </div>
        )
      }


}

export default Index
