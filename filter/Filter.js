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
          workList: this.props.list.slice(),
          findStr:'',
        };
      },

      chekSort: function(EO) {
        this.setState((prevState, props) => {
          console.log(EO.persist());
          const s = this.state.findStr;
          const a = s===''?props.list.slice():props.list.slice().filter((el)=>{return el.indexOf(s)>-1});
          if(!prevState.isSort)
            a.sort();
          return {workList:a,isSort:!prevState.isSort};}
        );
        },

      discard: function() {
        this.setState((prevState, props) => {
          const b = props.list.slice();
          return {workList:b,isSort:false,findStr:''};}
        );
      },

      findList: function(EO){
        const s = EO.target.value;
        this.setState((prevState, props) => {
          const a = s===''?props.list.slice():props.list.slice().filter((el)=>{return el.indexOf(s)>-1});
          if(this.state.isSort)
            a.sort();
          return {workList:a,findStr:s}
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
        React.DOM.select({className:'listSting',size:6}, arrList),
        );
    },
    }
    );

var i = new Array;

