import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import PagesRouter from "./PagesRouter";
import PagesLinks from "./PagesLinks";
import HeaderDiplom from "./HeaderDiplom";
import { connect } from "react-redux";
import "./css/Page_Login.css";
import isoFetch from "isomorphic-fetch";
import Mirror from "../components/Mirror";
import { Tooltip } from "@mui/material";

var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var stringName = "MIRONOVICH_REACT2021_";
// var stringName='MIRONOVICH_LINES2021_';

function intFirstLogin(props) {
  let mainPage = "";
  let newUserName = null;
  let newUserPass = null;
  const [modeLogin, setModeLogin] = useState(true); //режим ввода true - вводим, false - загружаем
  const [isLoadedData, setIsLoadedData] = useState(false); //режим загрузки данных true - грузим, false - нет
  const [isCheckName, setIsCheckName] = useState(false); //признак проверки имени true - проверяем, false - не проверяем
  const [isCheckPass, setIsCheckPass] = useState(false); //признак проверки пароля true - проверяем, false - не проверяем

  const [isCheckNameStore, setIsCheckNameStore] = useState(false); //признак проверки имени true - проверяем, false - не проверяем
  const [isCheckPassStore, setIsCheckPassStore] = useState(false); //признак проверки пароля true - проверяем, false - не проверяем

  const logoutClick = (EO) => {
    if (EO.target.id === "logout") {
      setModeLogin(false);
      const uN = "";
      const uP = "";
      props.dispatch({
        type: "LOGINE",
        userName: uN,
        userPass: uP,
      });
      setModeLogin(true);
    }
  };

  useEffect(() => {
    window.addEventListener("click", logoutClick);
  });

  useEffect(() => {
    return () => {
      window.removeEventListener("click", logoutClick);
    };
  });

  const fetchError = (errorMessage) => {
    console.error(errorMessage);
  };

  const fetchSuccess = (loadedData, newUserN, newUserP) => {
    console.log(loadedData);
    if (loadedData.result != "") {
      const res = JSON.parse(loadedData.result);
      console.log(res);
      let { username, userpass } = res;
      if (newUserN === username && newUserP === userpass) {
      } else {
        username = "";
        userpass = "";
        setIsCheckNameStore(!(newUserN === username));
        setIsCheckPassStore(!(newUserP === userpass));
      }
      props.dispatch({
        type: "LOGINE",
        userName: username,
        userPass: userpass,
      });
      setModeLogin(true);
      setIsLoadedData(false);
    }
  };

  const loginClick = () => {
    setModeLogin(false);
    setIsLoadedData(true);
    //Проверяем логин и пароль
    const uN = newUserName.value;
    const uP = newUserPass.value;
    console.log(props);
    // отдельно создаём набор POST-параметров запроса
    let sp = new URLSearchParams();
    sp.append("f", "READ");
    sp.append("n", stringName + "LOGINPASSWORD");
    // sp.append('f', 'INSERT');
    // sp.append('v', JSON.stringify({'username':'Mirolya','userpass':'112233'}));

    const loadData = () => {
      isoFetch(ajaxHandlerScript, { method: "post", body: sp })
        .then((response) => {
          // response - HTTP-ответ
          if (!response.ok) throw new Error("fetch error " + response.status);
          // дальше по цепочке пойдёт отвергнутый промис
          else {
            // for(let j=0;j<10000;j++)
            //     console.log(j);
            return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
          }
        })
        .then((data) => {
          fetchSuccess(data, uN, uP); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch((error) => {
          fetchError(error.message);
        });
    };
    loadData();
  };

  const setUserName = (ref) => {
    newUserName = ref;
  };

  const setUserPass = (ref) => {
    newUserPass = ref;
  };
  if (props.userName === "" || props.userPass === "")
    mainPage = (
      <div className="container">
        <div className="infopage">
          <h1>Diplom REACT Mironovich Olga</h1>
        </div>
        <div className="loginpage">
          {isLoadedData ? <Mirror /> : null}
          <h3>Login</h3>
          <label>
            <h6 className="loginLabel">Username</h6>
            <input
              type="text"
              placeholder="user name"
              ref={setUserName}
              onFocus={() => {
                setIsCheckNameStore(false);
                setIsCheckPassStore(false);
              }}
              onBlur={() =>
                setIsCheckName(newUserName.value === "" ? true : false)
              }
            />
            {isCheckName ? (
              <p className="errorlogin">Username is missing</p>
            ) : isCheckNameStore ? (
              <p className="errorlogin">Username is not valid</p>
            ) : (
              ""
            )}
          </label>
          <label>
            <h6 className="loginLabel">Password</h6>
            <input
              type="password"
              placeholder="password"
              ref={setUserPass}
              onFocus={() => {
                setIsCheckNameStore(false);
                setIsCheckPassStore(false);
              }}
              onBlur={() =>
                setIsCheckPass(newUserPass.value === "" ? true : false)
              }
            />
            {isCheckPass ? (
              <p className="errorlogin">Password is missing</p>
            ) : isCheckPassStore ? (
              <p className="errorlogin">Password is not valid</p>
            ) : (
              ""
            )}
          </label>
          <Tooltip
            title="User name: Mirolya. Rassword: 112233."
            enterDelay={500}
            leaveDelay={200}
          >
            <button
              id="loginButton"
              className="loginButton"
              onClick={loginClick}
            >
              Login
            </button>
          </Tooltip>
        </div>
      </div>
    );
  else
    mainPage = (
      <div id="id1" className="containerBase">
        <HeaderDiplom />
        <div id="id2" className="mainContecst">
          <PagesLinks />
          <PagesRouter />
        </div>
      </div>
    );

  return mainPage;
}

const mapStateToProps = function (state) {
  return {
    userName: state.loginer.userName,
    userPass: state.loginer.userPass,
  };
};

intFirstLogin.propTypes = {
  userName: PropTypes.string.isRequired, // получено из Redux
  userPass: PropTypes.string.isRequired, // получено из Redux
};

const FirstLogin = connect(mapStateToProps)(intFirstLogin);

export default FirstLogin;
