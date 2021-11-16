import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Mirror from './Mirror';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function TableData(props){
    const [headTable,setHeadTable] = useState(props.headTable.slice());
    const [whatShow,setWhatShow] = useState(props.begShow);
    const [minRecord,setMinRecord] = useState(props.beginRecord);
    const [strTab,setStrTab] = useState(whatShow==='ALL'?props.strTable.slice():props.strTable.slice(props.beginRecord-1,Math.min(props.strTable.length,props.beginRecord-1+Number(whatShow))));

    let strTableEmployees = [];
    function onClickEmployees(idEmployees){
      console.log(idEmployees);
    }

    useEffect(()=>{
      console.log(''+props.begShow+'}{'+whatShow+ '}{'+ props.beginRecord);
      const newData = whatShow==='ALL'?props.strTable.slice():props.strTable.slice(props.beginRecord-1,Math.min(props.strTable.length,(props.beginRecord-1+Number(whatShow))));
      setStrTab(newData);
      },[minRecord,whatShow]);
  
    
    function handleChange(EO){
        if(EO.target.id==='selectWhatShow'){
          const whatNowShow = EO.target.value;
          setWhatShow((prev)=>{
            return EO.target.value
          });
        }
      };

      function handleClick(EO){
        if(EO.target.id==='decMinCounter'){
          if(whatShow==='ALL')
          return;
          setMinRecord((prev)=>{
            const nowRecord = Math.max(1,prev-Number(props.begShow));
            return (nowRecord===NaN)?1:nowRecord
          });
        }
        else if(EO.target.id==='incMinCounter'){
          if(whatShow==='ALL')
            return;
          setMinRecord((prev)=>{
            const nowRecord = prev+Number(props.begShow);
            if(nowRecord<props.strTable.length)
              return nowRecord
            else return prev
          });
        }
      }
      

      useEffect(() => {

        console.log('ComponentDidMount :'+props.begShow+'  '+props.beginRecord)
        window.addEventListener('change', handleChange);
        window.addEventListener('click', handleClick);
    
        return () => {
          window.removeEventListener('change', handleChange);
          window.removeEventListener('click', handleClick);
        }
      }, [])
    
    for(let i_str=0;i_str<strTab.length;i_str++){
        let tdTableEmployees = [];
        for(let i=0;i<headTable.length;i++)    
            if(typeof(headTable[i])==='object'){
                for(let k in headTable[i]){
                    for(let j=0;j<headTable[i][k].length;j++)    
                        {
                        // console.log(strTable[i_str][headTable[i][k][j]]);
                        tdTableEmployees.push(
                          <td key={'str'+i_str+'.'+i+'.'+j} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            <NavLink to={`/${props.strNavLink}/`+strTab[i_str].id} >{strTab[i_str][headTable[i][k][j]]}</NavLink>
                          </td>
                          )

                    }
                }
            }
            else
                for(let k in strTab[i_str]){
                    // console.log(k===headTable[i]);
                    if(k===headTable[i])
                        tdTableEmployees.push(
                        <td key={'str'+i_str+'.'+i} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            <NavLink to={`/${props.strNavLink}/`+strTab[i_str].id}>{strTab[i_str][k]}</NavLink>
                          </td>)
            };
        strTableEmployees.push(<tr key={i_str} className='Str'>{tdTableEmployees}</tr>);
        };

    
    // console.log(strTableEmployees);
    return (
        <Fragment>
            {strTableEmployees}
        </Fragment>
    )
    

}

const mapStateToProps = function (state) {
  return {
      begShow: ''+state.shower.begShow,
      beginRecord:state.beginRecorder.beginRecord
    };
};

TableData.propTypes = {
  begShow:PropTypes.string,// получено из Redux
  beginRecord:PropTypes.number,// получено из Redux
  strTable:PropTypes.array,
  headTable:PropTypes.array,
  strNavLink:PropTypes.string,
};

TableData = connect(mapStateToProps)(TableData);


export default TableData;