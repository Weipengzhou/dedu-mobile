import React from 'react';
import './Vr.less';
import LeftNav from '../../components/LeftNav/LeftNav';
class Index  extends React.Component{
  render(){
    return(
      <div className='Vr'>

        <iframe src='https://yun.kujiale.com/design/3FO4IVVXLP74/show'></iframe>
      </div>
    )
  }
}

const Vr = () => (
  <LeftNav text={< Index />}></LeftNav>
)

export default Vr;
