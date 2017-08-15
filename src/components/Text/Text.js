import React, {Component} from 'react';

const Text = (props) => (
  <ul className='hz'>
    {props.list.map((result, index) => (
      <li key={index} className={'inp ' + result.class}>
        <label>
          <span></span>
          <p>{result.name}</p>
        </label><input type="number"  placeholder={result.value}   onBlur={(e) => props.onBande({value: e.target.value, id: index, type: result.type})}  onChange={(e) => props.onHande({value: e.target.value, id: index, type: result.type})}/>
        <b></b>
      </li>
    ))}
  </ul>
)

export default Text;
