const Ishop2Goods = React.createClass({
    displayName: "Ishop2Goods",
    getDefaultProps: function() {
        return { 
            code: 0,
            name: '',
            pict: '',
            rest: 0,
         }
      },
    getInitialState:function () {
        return {
        IsDelete: false
        };
    },
    propTypes: {
        name: React.PropTypes.string,
        code: React.PropTypes.number,
        pict: React.PropTypes.string,
        rest: React.PropTypes.number,
        cbSelected: React.PropTypes.func.isRequired,
        isSelected: React.PropTypes.bool.isRequired,
    },
    delStr: function(){
        this.setState((prevState)=>{return {IsDelete:true}})
    },
    selStr: function(){
        // this.setState((prevState)=>{return {cbIsSelect:this.props.code}});
        // console.log(this.props.code);
        console.log('VotesAnswer: текст свободного ответа изменён - '+this.props.code); 
        this.props.cbSelected(this.props.code);
        },
    render: function () {
        // 
        console.log(' = '+this.props.isSelected);
        return !this.state.IsDelete?React.DOM.tr({key:this.props.code,className:this.props.isSelected?'Npp SelGood':'Npp'},
            React.DOM.td({className:'NameGood',onClick:this.selStr},this.props.name),
            React.DOM.td({onClick:this.selStr},
                React.DOM.img({className:'Pict',src:''+this.props.pict+''})),
            React.DOM.td({className:'Rest',onClick:this.selStr},this.props.rest),
            React.DOM.td({},
                React.DOM.input({type:'button',value:'удалить',onClick:this.delStr}))):null
        },
    }
 );


