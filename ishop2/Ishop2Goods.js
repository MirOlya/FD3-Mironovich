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
        IsDelete: false,
        cbIsSelect: 0
        };
    },
    propTypes: {
        name: React.PropTypes.string,
        code: React.PropTypes.number,
        pict: React.PropTypes.string,
        rest: React.PropTypes.number,
    },
    delStr: function(){
        this.setState((prevState)=>{return {IsDelete:true}})
    },
    selStr: function(){
        this.setState((prevState)=>{return {cbIsSelect:this.props.code}});
        console.log(this.props.code);
    },
    render: function () {
        // 
        return !this.state.IsDelete?React.DOM.tr({key:this.props.code,className:this.state.cbIsSelect===this.props.code?'Npp SelGood':'Npp'},
            React.DOM.td({className:'NameGood',onClick:this.selStr},this.props.name),
            React.DOM.td({onClick:this.selStr},
                React.DOM.img({className:'Pict',src:''+this.props.pict+''})),
            React.DOM.td({className:'Rest',onClick:this.selStr},this.props.rest),
            React.DOM.td({},
                React.DOM.input({type:'button',value:'удалить',onClick:this.delStr}))):null
        },
    }
 );


