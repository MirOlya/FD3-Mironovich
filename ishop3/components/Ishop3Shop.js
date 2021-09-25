import React from 'react';
import './Ishop3Shop.css';
import './Ishop3Goods.js';

const Ishop3Shop = React.createClass({
    displayName: "Ishop3Shop",
    getDefaultProps: function() {
        return { 
            companyName: "Неизвестная компания",
            companyGoods: new Array(),
         }
      },
    propTypes: {
        companyName: React.PropTypes.string.isRequired,
        companyGoods:React.PropTypes.arrayOf(
            React.PropTypes.shape({
              code: React.PropTypes.number.isRequired,
              name: React.PropTypes.string.isRequired,
              pict: React.PropTypes.string.isRequired,
              rest: React.PropTypes.number.isRequired,
              cdIsDelete: React.PropTypes.bool,
            }))
          },
    getInitialState: function() {
      return { 
        selectedStrCode: null,
        listGoods: this.props.companyGoods
      };
    },
    strSelected: function(code) {
      console.log('выбрана строка с кодом '+code);
      this.setState( {selectedStrCode:code});
    },
    strDelected: function(code) {
      console.log('удалена строка с кодом '+code);
      const newListGoods = this.state.listGoods.filter(v=>v.code!=code)
      this.setState( {listGoods:newListGoods});
    },

    render: function () {
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
    },
    }
 );

 export default Ishop3Shop;