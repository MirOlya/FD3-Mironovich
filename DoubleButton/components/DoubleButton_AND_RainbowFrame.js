import React, { Fragment } from 'react';
import DoubleButton from './DoubleButton.js';
import { withRainbowFrame } from './withRainbowFrame';


let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

const DoubleButton_AND_RainbowFrame =()=>
      // <Fragment>
      //   <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>в студёную зимнюю</DoubleButton>
      //   <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>в студёную зимнюю</FramedDoubleButton>
      // </Fragment>
      <div>
      <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>в студёную зимнюю</DoubleButton>
      <FramedDoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) }>в студёную зимнюю</FramedDoubleButton>
    </div>

export default DoubleButton_AND_RainbowFrame;