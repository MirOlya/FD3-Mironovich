const initState={
  userName: '',
  userPass:'',
  needCheck:false,
};

const LOGINE = 'LOGINE';
// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function loginerReducer(state=initState,action) {



  switch (action.type) {

    case LOGINE: {
      console.log('state до обработки редьюсером:',state);
      let newState={...state};
      newState.userName = action.userName;
      newState.userPass = action.userPass;
      newState.needCheck = true;
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default loginerReducer;
