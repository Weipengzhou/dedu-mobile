import React from 'react';
import Index from './Index';
import LeftNav from '../../components/LeftNav/LeftNav';
class Adjustment extends React.Component{

  render(){
   return(
       <LeftNav text={<Index/>}></LeftNav>
   )
  }
}

export default Adjustment;
