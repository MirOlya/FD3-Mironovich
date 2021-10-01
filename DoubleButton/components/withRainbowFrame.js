import React from 'react';


function withRainbowFrame(color){
  return function (Component) {
    return props => {
      let newComp = (<div style={{border:"dashed 2px "+color[0],padding:"10px"}}>
          <Component {...props} />
          </div>);
      for(let i=1;i<color.length;i++)
        newComp=<div style={{border:"dashed 2px "+color[i],padding:"10px"}}>{newComp}</div>
      return newComp};
    }
  };
export { withRainbowFrame };
