const Ishop = React.createClass({
    displayName: "iShop",
    getDefaultProps: function() {
        return { 
            companyName: "Неизвестная компания",
            companyGoods: new Array(),
         }
      },
    propTypes: {
        companyName: React.PropTypes.string.isRequired,
        companyGoods: React.PropTypes.array,
    },
    render: function () {
        const arrGoods = new Array;
        arrGoods.push(React.DOM.tr({key:0,className:'Heading'},
        React.DOM.th({className:'Head'},"Товар"),
        React.DOM.th({className:'Head'},"Изображение"),
        React.DOM.th({className:'Head'},"Остаток"),
        ));
        this.props.companyGoods.forEach((el,i)=>{
            arrGoods.push(React.DOM.tr({key:el.code,className:'Npp'},
                React.DOM.td({className:'NameGood'},el.name),
                React.DOM.td({},
                    React.DOM.img({className:'Pict',src:''+el.pict+''})),
                React.DOM.td({className:'Rest'},el.rest),
            ))
           } );
      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'Company'}, this.props.companyName ),
        React.DOM.table( {className:'Goods'}, React.DOM.tbody({},arrGoods)),
        );
    },
    }
    );

var i = new Array;

