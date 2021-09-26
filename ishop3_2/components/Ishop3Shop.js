import React from 'react';
import './Ishop3Shop.css';
import './Ishop3Goods.js';

class Ishop3Shop extends React.Component {

    static propTypes = {
        companyName: PropTypes.string.isRequired,
        companyGoods:PropTypes.arrayOf(
            PropTypes.shape({
              code: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              pict: PropTypes.string.isRequired,
              rest: PropTypes.number.isRequired,
              cdIsDelete: PropTypes.bool,
            }))
          };

    state = {
      selectedStrCode: null,
      listGoods: this.props.companyGoods
      }

    strSelected = (code) =>{
      console.log('выбрана строка с кодом '+code);
      this.setState( {selectedStrCode:code});
    }
    
    strDelected = (code) =>{
      console.log('удалена строка с кодом '+code);
      const newListGoods = this.state.listGoods.filter(v=>v.code!=code)
      this.setState( {listGoods:newListGoods});
    }

    render() {
        const arrGoods = this.state.listGoods.map( v =>
            React.createElement(Ishop3Goods, {key:v.code,
                name:v.name, pict:v.pict, rest:v.rest,code:v.code, 
                isSelected:(this.state.selectedStrCode===v.code),
                cbSelected:this.strSelected,
                cbDelected:this.strDelected,
              })
          );
        const headGoods = new Array(React.DOM.tr({key:0,className:'Heading'},
          React.DOM.th({className:'Head'},"Товар"),
          React.DOM.th({className:'Head'},"Изображение"),
          React.DOM.th({className:'Head'},"Остаток"),
          React.DOM.th({className:'Head'},"Кнопка"),
          ));
  
      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'Company'}, this.props.companyName ),
        React.DOM.table( {className:'Goods'}, React.DOM.tbody({},headGoods.concat(arrGoods))),
        );
    }
  }
 

 export default Ishop3Shop;