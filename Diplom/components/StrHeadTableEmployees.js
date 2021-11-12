import React, { Fragment } from 'react';

function StrHeadTableEmployees(props){
    let headTableEmployees = [];
    for(let i=0;i<props.str.length;i++)    
        if(typeof(props.str[i])==='object'){
            console.log(props.str[i]);
        }
        else{
            console.log(props.str[i]);
            headTableEmployees.push(<th className='Head'>{props.str[i]}</th>)
        };

        return  headTableEmployees
}
export default StrHeadTableEmployees