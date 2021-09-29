import React from 'react';
import BR2JSX from './br2jsx.js';
import ColorFrame from './ColorFrame';


class Br2jsx_AND_RainbowFrame extends React.Component {
    render() {
      let text="первый<br>второй<br/>третий<br />последний";
      let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
      return <ColorFrame color={colors}>
            <BR2JSX text={text}/>
        </ColorFrame>
    }
}
 

 export default Br2jsx_AND_RainbowFrame;