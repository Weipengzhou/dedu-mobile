import React from 'react';
import LeftNav from '../../components/LeftNav/LeftNav';
import Index from './Index';

class Configuration extends React.Component{
  render(){
    return(
        <LeftNav text={<Index/>}></LeftNav>
    )
  }
}


export default Configuration;
