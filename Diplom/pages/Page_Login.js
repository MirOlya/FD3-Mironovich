import React from 'react';
import PropTypes from 'prop-types';
import PagesRouter from './PagesRouter';
import PagesLinks from './PagesLinks';
import {connect} from 'react-redux';
import './css/Page_Login.css';
function intFirstLogin(props){
    let mainPage = '';

    const loginClick = ()=>{
        //Проверяем логин и пароль
        const uN = newUserName.value;
        const uP = newUserPass.value;
        if(true)
            props.dispatch( { 
                type:"LOGINE",
                userName:uN,
                userPass:uP,
            } );
    };
    let newUserName = null;
    let newUserPass = null;
    const setUserName = (ref) => {
        newUserName=ref;
    };

    const setUserPass = (ref) => {
        newUserPass=ref;
    };
    if((props.userName==='')||(props.userPass==='')){
        mainPage = 
        <div className='container'>
            <div className='infopage'>
                <h1>Diplom REACT Mironovich Olga</h1>
            </div>
            <div className='loginpage'>
                <h3>Login</h3>
                <label>
                    <h6 className='loginLabel'>Username</h6>
                    <input type='text' placeholder='user name' ref={setUserName}/>
                    {props.isCheckName?
                        <p className='errorlogin'>Username is missing</p>:''}
                </label>
                <label>
                    <h6 className='loginLabel'>Password</h6>
                    <input type='password' placeholder='password' ref={setUserPass}/>
                    {props.isCheckPass?
                        <p className='errorlogin'>Password is missing</p>:''}
                </label>
                <button className='loginButton' onClick={loginClick}>Login</button>
            </div>
        </div>
    }
    else
        mainPage =     
        <div>
            <PagesLinks />
            <PagesRouter />
        </div>;

    return mainPage
}

const mapStateToProps = function (state) {
    return {
      userName: state.loginer.userName,
      userPass: state.loginer.userPass,
    //   если первое открытие страницы - имя и пароль пустые, но это и нормально,
    // а потом уже надо проверять заполнение
      isCheckName:state.loginer.needCheck?state.loginer.userName===''?true:false:false,
      isCheckPass:state.loginer.needCheck?state.loginer.userPass===''?true:false:false,
    };
  };
  

intFirstLogin.propTypes = {
    userName:PropTypes.string.isRequired,// получено из Redux
    userPass:PropTypes.string.isRequired,// получено из Redux
    isCheckName:PropTypes.bool.isRequired,
    isCheckPass:PropTypes.bool.isRequired,
};

const FirstLogin = connect(mapStateToProps)(intFirstLogin);

export default FirstLogin;