import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
function HeadTableEmployees(props){
    let headTableEmployees = [];
    let headTableEmployees_second = [];
    for(let i=0;i<props.headTable.length;i++)    
        if(typeof(props.headTable[i])==='object'){
            // console.log(props.headTable[i]);
            for(let k in props.headTable[i]){
                headTableEmployees.push(<th colSpan={props.headTable[i][k].length} key = {i} className='Head'>{k}</th>);
                for(let j=0;j<props.headTable[i][k].length;j++)    
                    headTableEmployees_second.push(<th key = {'s'+i+'.'+j} className='Head'>{props.headTable[i][k][j]}</th>)
            }
        }
        else{
            // console.log(props.headTable[i]);
            headTableEmployees.push(<th rowSpan={2} key = {i} className='Head'>{props.headTable[i]}</th>)
            // headTableEmployees_second.push(<th key = {'s'+i} className='Head'></th>)
        };

    console.log(headTableEmployees);
    console.log(headTableEmployees_second);
    return (
        <Fragment>
            <tr key="-1" className='Heading'>{headTableEmployees}</tr>
            <tr key="-2" className='Heading'>{headTableEmployees_second}</tr>
        </Fragment>
    )

}

export default HeadTableEmployees