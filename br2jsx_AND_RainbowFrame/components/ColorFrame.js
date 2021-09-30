import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.array.isRequired,
  };
  
  render() {
    return (
      this.props.color.reduce((r,v)=>{
        return <div style={{border:"dashed 1px "+v,padding:"10px"}}>
          {r}
        </div>
      },this.props.children)
    );
  }

}

export default ColorFrame;
