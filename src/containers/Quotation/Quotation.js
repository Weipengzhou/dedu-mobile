import React from 'react';

import LeftNav from '../../components/LeftNav/LeftNav';
import Index from './Index';



class Quotation extends React.Component{
  render(){
    return(
        <LeftNav text={<Index/>}></LeftNav>
    )
  }
}

//最终渲染
export default Quotation;
