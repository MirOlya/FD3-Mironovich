const initState={
    begShow: 5,
  };
  
  const SETNEWSHOW = 'SETNEWSHOW';
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер
  
  function showerReducer(state=initState,action) {
      console.log('set begin show');
    switch (action.type) {
  
      case SETNEWSHOW: {
        console.log('state до обработки редьюсером:',state);
        let newState={...state};
        newState.begShow = action.begShow;
        console.log('state после обработки редьюсером:',newState);
        return newState;
      }
  
      default:
        return state;
    }
  }
  
  export default showerReducer;
  