import React, {useState, Fragment} from 'react';
import PropTypes from 'prop-types';
import PagesRouter from './PagesRouter';
import PagesLinks from './PagesLinks';
import HeaderDiplom from './HeaderDiplom';
import {connect} from 'react-redux';
import './css/Page_Login.css';
function intFirstLogin(props){
    let mainPage = '';
    const [modeLogin,setModeLogin] = useState(true);//режим ввода true - вводим, false - загружаем
    const [isCheckName, setIsCheckName] = useState(false);//признак проверки имени true - проверяем, false - не проверяем
    const [isCheckPass, setIsCheckPass] = useState(false);//признак проверки пароля true - проверяем, false - не проверяем

    const loginClick = ()=>{
        setModeLogin(false);
        //Проверяем логин и пароль
        setTimeout(()=>1000,1000);
        const uN = newUserName.value;
        const uP = newUserPass.value;
        if(true)
            props.dispatch( { 
                type:"LOGINE",
                userName:uN,
                userPass:uP
            } );
        setModeLogin(true)
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
                    <input type='text' placeholder='user name' ref={setUserName} onBlur={()=>setIsCheckName(newUserName.value===''?true:false)}/>
                    {isCheckName?
                        <p className='errorlogin'>Username is missing</p>:''}
                </label>
                <label>
                    <h6 className='loginLabel'>Password</h6>
                    <input type='password' placeholder='password' ref={setUserPass} onBlur={()=>setIsCheckPass(newUserName.value===''?true:false)}/>
                    {isCheckPass?
                        <p className='errorlogin'>Password is missing</p>:''}
                </label>
                <button className='loginButton' onClick={loginClick}>Login</button>
            </div>
        </div>;
    }
    else
        mainPage =     
        <div id='id1' className='containerBase'>
            <HeaderDiplom userName={props.userName}/>
            <div id='id2' className='mainContecst'>
                <PagesLinks/>
                <PagesRouter />
            </div>
        </div>;

    return mainPage
}

const mapStateToProps = function (state) {
     return {
      userName: state.loginer.userName,
      userPass: state.loginer.userPass
    };
  };
  

intFirstLogin.propTypes = {
    userName:PropTypes.string.isRequired,// получено из Redux
    userPass:PropTypes.string.isRequired// получено из Redux
};

const FirstLogin = connect(mapStateToProps)(intFirstLogin);

export default FirstLogin;