import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './css/HeaderDiplom.css';


function intHeaderDiplom(props){
    const headerDiplom=
        <div className='header'>
            <div className= 'header_left'>
                <img src='./pages/image/OM.jpg' alt='Not found'/>
                <span>Mironovich Olga</span>
            </div>
            <div>
                <span>REACT</span>
            </div>
            <div>
                Welcome {props.userName}
                <button id='logout'>Logout</button>
            </div>
        </div>;

    return headerDiplom
}
const mapStateToProps = function (state) {
    console.log('get user name');
    return {
      userName: state.loginer.userName,
    };
  };
  

intHeaderDiplom.propTypes = {
    userName:PropTypes.string.isRequired,// получено из Redux
};

const HeaderDiplom = connect(mapStateToProps)(intHeaderDiplom);

export default HeaderDiplom;