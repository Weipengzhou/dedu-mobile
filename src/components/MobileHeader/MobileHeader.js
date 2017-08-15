import React, { Component } from 'react';
import Jiantou from './jiantou-left.png';
import { Router, Route, hashHistory,Link } from 'react-router';


const MobileHeader = (props) =>(
  <div className={props.className}>
      <span><Link to={props.link}>{props.txt}</Link></span><p>{props.text} </p>
  </div>
)

export default MobileHeader;
