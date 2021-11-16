import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
function HeadTable(props){
    let headTable = [];
    let headTable_second = [];
    let rowSpan=1;
    for(let i=0;i<props.headTable.length;i++)    
        if(typeof(props.headTable[i])==='object'){
            rowSpan=2;
            break
        }

    for(let i=0;i<props.headTable.length;i++)    
        if(typeof(props.headTable[i])==='object'){
            // console.log(props.headTable[i]);
            for(let k in props.headTable[i]){
                headTable.push(<th colSpan={props.headTable[i][k].length} key = {i} className='Head'>{k}</th>);
                for(let j=0;j<props.headTable[i][k].length;j++)    
                    headTable_second.push(<th key = {'s'+i+'.'+j} className='Head'>{props.headTable[i][k][j]}</th>)
            }
        }
        else{
            // console.log(props.headTable[i]);
            headTable.push(<th rowSpan={rowSpan} key = {i} className='Head'>{props.headTable[i]}</th>)
            // headTable_second.push(<th key = {'s'+i} className='Head'></th>)
        };

    // console.log(headTable);
    // console.log(headTable_second);
    if(headTable_second.length===0)
        // for(let i=0;i<headTable.length;i++)
        //     headTable_second.push(<td key={'empty'+i}></td>);
    return (
        <Fragment>
            <tr key="-1" className='Heading'>{headTable}</tr>
        </Fragment>
    )
    else
    return (
        <Fragment>
            <tr key="-1" className='Heading'>{headTable}</tr>
            <tr key="-2" className='Heading'>{headTable_second}</tr>
        </Fragment>
    )

}

export default HeadTable