const initState={
    beginRecord: 1,
  };
  
  const SETNEWRECORD = 'SETNEWRECORD';
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер
  
  function beginRecorderReducer(state=initState,action) {
      console.log('set begin SETNEWRECORD');
    switch (action.type) {
  
      case SETNEWRECORD: {
        console.log('state до обработки редьюсером:',state);
        let newState={...state};
        newState.beginRecord = Number(action.beginRecord);
        console.log('state после обработки редьюсером:',newState);
        return newState;
      }
  
      default:{
        console.log('not find '+action.type);

        return state;
      }
    }
  }
  
  export default beginRecorderReducer;
