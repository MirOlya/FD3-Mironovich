import React from 'react';

import './components/Ishop3Goods.css';

class Ishop3Goods extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        code: PropTypes.number,
        pict: PropTypes.string,
        rest: PropTypes.number,
        cbSelected: PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired,
        cbDelected: PropTypes.func.isRequired,
    };
    delStr = ()=>{
        console.log('Удалили новую строку - '+this.props.code); 
        this.props.cbDelected(this.props.code);
    }
    selStr = ()=>{
        console.log('Выбрали новую строку - '+this.props.code); 
        this.props.cbSelected(this.props.code);
        }
    render() {
        // 
        console.log(this.props.code +' = '+this.props.isSelected);
        return React.DOM.tr({key:this.props.code,className:this.props.isSelected?'Npp SelGood':'Npp'},
            React.DOM.td({className:'NameGood',onClick:this.selStr},this.props.name),
            React.DOM.td({onClick:this.selStr},
                React.DOM.img({className:'Pict',src:''+this.props.pict+''})),
            React.DOM.td({className:'Rest',onClick:this.selStr},this.props.rest),
            React.DOM.td({},
                React.DOM.input({type:'button',value:'удалить',onClick:this.delStr})))
        }
    };

 export default Ishop3Goods;
