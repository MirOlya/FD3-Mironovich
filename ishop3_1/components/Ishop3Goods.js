import React from 'react';

import './Ishop3Goods.css';

const Ishop3Goods = React.createClass({
    displayName: "Ishop3Goods",
    getDefaultProps: function() {
        return { 
            code: 0,
            name: '',
            pict: '',
            rest: 0,
         }
      },
    propTypes: {
        name: React.propTypes.string,
        code: React.propTypes.number,
        pict: React.propTypes.string,
        rest: React.propTypes.number,
        cbSelected: React.propTypes.func.isRequired,
        isSelected: React.propTypes.bool.isRequired,
        cbDelected: React.propTypes.func.isRequired,
    },
    delStr: function(){
        console.log('Удалили новую строку - '+this.props.code); 
        this.props.cbDelected(this.props.code);
    },
    selStr: function(){
        console.log('Выбрали новую строку - '+this.props.code); 
        this.props.cbSelected(this.props.code);
        },
    render: function () {
        // 
        console.log(this.props.code +' = '+this.props.isSelected);
        return React.DOM.tr({key:this.props.code,className:this.props.isSelected?'Npp SelGood':'Npp'},
            React.DOM.td({className:'NameGood',onClick:this.selStr},this.props.name),
            React.DOM.td({onClick:this.selStr},
                React.DOM.img({className:'Pict',src:''+this.props.pict+''})),
            React.DOM.td({className:'Rest',onClick:this.selStr},this.props.rest),
            React.DOM.td({},
                React.DOM.input({type:'button',value:'удалить',onClick:this.delStr})))
        },
    }
 );

 export default Ishop3Goods;
