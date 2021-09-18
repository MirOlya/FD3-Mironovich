const Filter = React.createClass({
    displayName: "Filter",
    getDefaultProps: function() {
        return { 
            list: new Array(''),
         }
      },
    propTypes: {
        list: React.PropTypes.arrayOf(React.PropTypes.string)
    },
    getInitialState:function () {
        return {
          isSort: false,
          workList: this.props.list.join('/').split('/'),
          findStr:'',
        };
      },

      chekSort: function() {
        this.setState((prevState, props) => {
          const a = this.state.findStr===''?props.list.slice():props.list.slice().filter((el)=>{return el.indexOf(s)!=-1?true:false});
          const b = !prevState.isSort?a.sort():a;
          return {workList:b,isSort:!prevState.isSort};}
        );
        },

      discard: function() {
        this.setState((prevState, props) => {
          const b = this.state.findStr===''?props.list.slice():props.list.slice().filter((el)=>{return el.indexOf(s)!=-1?true:false});
          return {workList:b,isSort:false,findStr:''};}
        );
      },

      findList: function(EO){
        const s = EO.target.value;
        this.setState((prevState, props) => {
          const a = this.state.findStr===''?props.list.slice():props.list.slice().filter((el)=>{return el.indexOf(s)!=-1?true:false});
          const b = prevState.isSort?a.sort():a;
          return {workList:b,findStr:s}
      }) 
    },
    
      render: function () {
        const arrList = this.state.workList.map((el,v) => {
            return React.DOM.option({key:v},el)
        });

        return React.DOM.div( {className:'Filter'}, 
        React.DOM.div( {className:'Control'}, 
            React.DOM.input({type:'checkbox',className:'Sort',
                checked:(this.state.isSort),
                onClick:this.chekSort}),
             React.DOM.input({type:'input',className:'findStr',onChange:this.findList,value:this.state.findStr}),
             React.DOM.input( {type:'button',value:'сброс',onClick:this.discard} ),
        ),
        React.DOM.select({className:'listSting',size:3}, arrList),
        );
    },
    }
    );

var i = new Array;

