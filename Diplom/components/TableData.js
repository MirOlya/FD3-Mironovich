import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiDelete } from '@mdi/js';
import Icon from '@mdi/react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Tooltip} from '@mui/material';

function TableData(props){
    const [generalStrTable,setGeneralStrTable] = useState(props.strTable.slice());
    const [headTable,setHeadTable] = useState(props.headTable.slice());
    const [whatShow,setWhatShow] = useState(props.begShow);
    const [minRecord,setMinRecord] = useState(props.beginRecord);
    const [strTab,setStrTab] = useState(whatShow==='ALL'?props.strTable.slice():props.strTable.slice(props.beginRecord-1,Math.min(props.strTable.length,props.beginRecord-1+Number(whatShow))));

    let strTableEmployees = [];
    // function onClickEmployees(idEmployees){
    //   console.log(idEmployees);
    // }

    useEffect(()=>{
      setStrTab((prev)=>{
        const newData = whatShow==='ALL'?generalStrTable.slice():generalStrTable.slice(props.beginRecord-1,Math.min(props.strTable.length,(props.beginRecord-1+Number(whatShow))));
        return newData
      });
      },[minRecord,whatShow,generalStrTable]);
  
    
    function handleChange(EO){
        if(EO.target.id==='selectWhatShow'){
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
        props.dispatch( { 
          type:"SETLENGTHDATA",
          lengthData:generalStrTable.length
        } );
      
        return () => {
          window.removeEventListener('change', handleChange);
          window.removeEventListener('click', handleClick);
        }
      }, [])
    
    const onClickEmployeesDelete=((curID)=>{
      const newStrTab = generalStrTable.filter((el)=>{return (el.id!=curID)});
      setGeneralStrTable(newStrTab);
      
      props.dispatch( { 
        type:"SETLENGTHDATA",
        lengthData:newStrTab.length
      } );
    })

    for(let i_str=0;i_str<strTab.length;i_str++){
        let tdTableEmployees = [];
        if(props.needDelete) 
          tdTableEmployees.push(
            <Tooltip key={'Tooltip'+i_str} title="Click to delete string" enterDelay={500} leaveDelay={200} placement="right-start">
              <td key={'strDel'+i_str} onClick={()=>onClickEmployeesDelete(strTab[i_str].id)} className='Str'>
                <Icon key={'strDelIcon'+i_str} path={mdiDelete} size={'24px'} color='#65758a'/>
              </td>
            </Tooltip>

            );
        for(let i=0;i<headTable.length;i++)    
            if(typeof(headTable[i])==='object'){
                for(let k in headTable[i]){
                    for(let j=0;j<headTable[i][k].length;j++)    
                        {
                        tdTableEmployees.push(
                          <td key={'str'+i_str+'.'+i+'.'+j} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            {props.needDelete?
                              <NavLink to={`/${props.strNavLink}/`+strTab[i_str].id} >{strTab[i_str][headTable[i][k][j]]}</NavLink>:
                              <span>{strTab[i_str][headTable[i][k][j]]}</span>
                            }
                          </td>
                          )

                    }
                }
            }
            else
                for(let k in strTab[i_str]){
                    if(k===headTable[i])
                        tdTableEmployees.push(
                        <td key={'str'+i_str+'.'+i} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            {props.needDelete?
                              <NavLink to={`/${props.strNavLink}/`+strTab[i_str].id}>{strTab[i_str][k]}</NavLink>:
                              <span>{strTab[i_str][k]}</span>
                            }
                          </td>)
            };
        strTableEmployees.push(<tr key={i_str} className='Str'>{tdTableEmployees}</tr>);
        };

    
    return (
        <Fragment>
            {strTableEmployees}
        </Fragment>
    )
    

}

const mapStateToProps = function (state) {
  return {
      begShow: ''+state.shower.begShow,
      beginRecord:state.beginRecorder.beginRecord,
      lengthData:state.lengthData.lengthData,
    };
};

TableData.propTypes = {
  begShow:PropTypes.string,// получено из Redux
  beginRecord:PropTypes.number,// получено из Redux
  lengthData:PropTypes.number,// получено из Redux
  strTable:PropTypes.array,
  headTable:PropTypes.array,
  strNavLink:PropTypes.string,
};

TableData = connect(mapStateToProps)(TableData);


export default TableData;