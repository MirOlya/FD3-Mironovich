const initState={
    lengthData: 0,
  };
  
  const SETLENGTHDATA = 'SETLENGTHDATA';
  // в редьюсере state - это не весь state Redux, а только тот раздел state,
  // за который отвечает данный редьюсер
  
  function lengthDataReduser(state=initState,action) {
      console.log('set begin SETLENGTHDATA');
    switch (action.type) {
  
      case SETLENGTHDATA: {
        console.log('state до обработки редьюсером:',state);
        let newState={...state};
        newState.lengthData = action.lengthData;
        console.log('state после обработки редьюсером:',newState);
        return newState;
      }
  
      default:
        return state;
    }
  }
  
  export default lengthDataReduser;
  