import React from 'react';
import PropTypes from 'prop-types';
import './br2jsx.css';

const BR2JSX = props => {
  let textArr = props.text.split(/\<br\s*\/*\>/g,);
  textArr = textArr.map((v,i)=><p key={i}>{v}</p>);
  return <div className='BR2JSX'>{textArr}</div>;
}

BR2JSX.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BR2JSX;
