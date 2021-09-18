const Ishop2 = React.createClass({
    displayName: "iShop2",
    getDefaultProps: function() {
        return { 
            companyName: "Неизвестная компания",
            companyGoods: new Array(),
         }
      },
    propTypes: {
        companyName: React.PropTypes.string.isRequired,
        companyGoods: React.PropTypes.array,
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
        selectedStrCode: null
      };
    },
    answerSelected: function(code) {
      console.log('выбрана строка с кодом '+code);
      this.setState( {selectedStrCode:code} );
    },
    render: function () {
        const arrGoods = this.props.companyGoods.map( v =>
            React.createElement(Ishop2Goods, {key:v.code,
                name:v.name, pict:v.pict, rest:v.rest,code:v.code, 
                isSelected:(this.state.selectedStrCode===v.code),
                cbSelected:this.answerSelected,
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

