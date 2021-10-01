import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  static propTypes = {
    color: PropTypes.array,
  };
  
  render() {
    // return (
    //   this.props.color.reduce((r,v)=>{
    //     return <div style={{border:"dashed 1px "+v,padding:"10px"}}>
    //       {r}
    //     </div>
    //   },this.props.children)
    // );
    console.log(this.props.color);
    // console.log(this.props.children);
    if(this.props.color.length===0)
        return this.props.children
      else
        return <div style={{border:"dashed 1px "+this.props.color[0],padding:"10px"}} key='0'>
                <ColorFrame color = {this.props.color.slice(1)} key='3'>{this.props.children}</ColorFrame>
            </div>
  }

}

export default ColorFrame;
