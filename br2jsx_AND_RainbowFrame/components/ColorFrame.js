import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.array.isRequired,
  };
  
  newArr = (r,v)=>{
    return <div style={{border:"dashed 1px "+v,padding:"10px"}}>
      {r}
    </div>
  }
  render() {
    return (
      this.props.color.reduce(this.newArr,this.props.children)
    );
  }

}

export default ColorFrame;
