import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function TableEmployees(props){
    const [headTable,setHeadTable] = useState(props.headTable.slice());
    const [whatShow,setWhatShow] = useState(props.whatShow);
    const [strTable,setStrTable] = useState(whatShow==='ALL'?props.strTable.slice():props.strTable.slice(0,Math.min(props.strTable.length,whatShow)));

    let strTableEmployees = [];

    function handleChange(EO){
        if(EO.target.id==='selectWhatShow'){
          let newData = EO.target.value==='ALL'?props.strTable.slice():props.strTable.slice(0,Math.min(props.strTable.length,EO.target.value));
        //   setWhatShow(EO.target.value);
          setStrTable(newData)
        }
    
      }
      
      useEffect(() => {
        window.addEventListener('change', handleChange);
      });
      
      useEffect(() => {
        return () => {
          window.removeEventListener('change', handleChange);
        }
      });
    
    console.log(strTable);
    for(let i_str=0;i_str<strTable.length;i_str++){
        console.log(strTable[i_str]);
        let tdTableEmployees = [];
        for(let i=0;i<headTable.length;i++)    
            if(typeof(headTable[i])==='object'){
                for(let k in headTable[i]){
                    for(let j=0;j<headTable[i][k].length;j++)    
                        {
                        console.log(strTable[i_str][headTable[i][k][j]]);
                        tdTableEmployees.push(<td key={'str'+i_str+'.'+i+'.'+j} className='Str'>{strTable[i_str][headTable[i][k][j]]}</td>)
                    }
                }
            }
            else
                for(let k in strTable[i_str]){
                    console.log(k===headTable[i]);
                    if(k===headTable[i])
                        tdTableEmployees.push(<td key={'str'+i_str+'.'+i} className='Str'>{strTable[i_str][k]}</td>)
            };
        strTableEmployees.push(<tr key={'str'+i_str} className='Str'>{tdTableEmployees}</tr>);
        }

    console.log(strTableEmployees);
    return (
        <Fragment>
            {strTableEmployees}
        </Fragment>
    )

}
export default TableEmployees