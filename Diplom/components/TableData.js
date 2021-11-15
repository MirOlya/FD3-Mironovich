import React, { Fragment, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Mirror from './Mirror';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function TableData(props){
    const [headTable,setHeadTable] = useState(props.headTable.slice());
    const [whatShow,setWhatShow] = useState(props.begShow);
    const [minRecord,setMinRecord] = useState(props.beginRecord);
    const [strTable,setStrTable] = useState(whatShow==='ALL'?props.strTable.slice():props.strTable.slice(props.beginRecord-1,Math.min(props.strTable.length,whatShow)));

    let strTableEmployees = [];
    function onClickEmployees(idEmployees){
      console.log(idEmployees);
    }

    useEffect(()=>{
      const newData = whatShow==='ALL'?props.strTable.slice():props.strTable.slice(minRecord-1,Math.min(props.strTable.length,whatShow));
      setStrTable(newData);
      },[minRecord,whatShow]);


    function handleChange(EO){
        if(EO.target.id==='selectWhatShow'){
          const whatNowShow = EO.target.value;
          setWhatShow(whatNowShow);}
    
      };

      function handleClick(EO){
        if(EO.target.id==='decMinCounter'){
          if(whatShow==='ALL')
          return;
          const nowRecord = Math.max(1,minRecord-Number(whatShow));
          console.log('3 nowRecord = '+nowRecord);
          setMinRecord(nowRecord);
        }
        else if(EO.target.id==='incMinCounter'){
          console.log('make new array of data');
          if(whatShow==='ALL')
            return;
          const nowRecord = minRecord+Number(whatShow);
          if(nowRecord<props.strTable.length){
            console.log('4 nowRecord = '+nowRecord);
            setMinRecord(nowRecord);
          }
        }
      }
      

      useEffect(() => {
        console.log('ComponentDidMount')
        console.log('handleChange');
        window.addEventListener('change', handleChange);
        console.log('handleClick');
        window.addEventListener('click', handleClick);
    
        return () => {
          console.log('delete handleChange');
          window.removeEventListener('change', handleChange);
          console.log('delete handleClick');
          window.removeEventListener('click', handleClick);
        }
      }, [])
    
   
    console.log(strTable);
    for(let i_str=0;i_str<strTable.length;i_str++){
        let tdTableEmployees = [];
        for(let i=0;i<headTable.length;i++)    
            if(typeof(headTable[i])==='object'){
                for(let k in headTable[i]){
                    for(let j=0;j<headTable[i][k].length;j++)    
                        {
                        // console.log(strTable[i_str][headTable[i][k][j]]);
                        tdTableEmployees.push(
                          <td key={'str'+i_str+'.'+i+'.'+j} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            <NavLink to={`/${props.strNavLink}/`+i_str} className="MobileClientFIO">{strTable[i_str][headTable[i][k][j]]}</NavLink>
                            {/* {strTable[i_str][headTable[i][k][j]]} */}
                          </td>
                          )

                    }
                }
            }
            else
                for(let k in strTable[i_str]){
                    // console.log(k===headTable[i]);
                    if(k===headTable[i])
                        tdTableEmployees.push(
                        <td key={'str'+i_str+'.'+i} onClick={()=>onClickEmployees(i_str)} className='Str'>
                            <NavLink to={`/${props.strNavLink}/`+i_str} className="MobileClientFIO">{strTable[i_str][k]}</NavLink>
                          </td>)
            };
        strTableEmployees.push(<tr key={i_str} className='Str'>{tdTableEmployees} </tr>);
        };


    console.log(strTableEmployees);
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
};

TableData = connect(mapStateToProps)(TableData);


export default TableData;