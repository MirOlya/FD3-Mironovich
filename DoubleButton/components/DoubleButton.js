import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './DoubleButton.css';

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed:PropTypes.func.isRequired
  };
  pres=(param)=>{
    this.props.cbPressed(param)
  }
  render(){
  return (<div>
        <button className='DoubleButton' name='but1' onClick={()=>{this.pres(1)}} data_pres='1'>{this.props.caption1}</button>
        <span>{this.props.children}</span>
        <button className='DoubleButton' name='but2' onClick={()=>{this.pres(2)}} data_pres='2'>{this.props.caption2}</button>
   </div>);
  }
}



export default DoubleButton;
