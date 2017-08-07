import React from 'react';
import './Index.less';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import Header from '../../components/Header/Header';

 class Index extends React.Component {

  render() {
    console.log(this.state)
    return (
      <div className='Index'>
        <Header/>
        <div className='bottom'>
          <h2>公装无忧能做什么？</h2>
          <ul>
            <li>
              <div className='center'>
                <img src={one} alt='硬装'/>

              </div>
              <span>399</span>
              <p>硬装套餐</p>
            </li>
            <li>
              <div className='center'>
                <img src={two} alt='施工'/>

              </div>
              <span>施工</span>
              <p>在线施工进度查询</p>
            </li>
            <li>
              <div className='center'>
                <img src={three} alt='报价'/>

              </div>
              <span>报价</span>
              <p>在线报价</p>
            </li>
            <li>
              <div className='center'>
                <img src={four} alt='设计'/>

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
