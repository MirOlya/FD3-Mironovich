import React, { Fragment } from 'react';

function TableEmployees(props){
    let strTableEmployees = [];
    for(let i_str=0;i_str<props.strTable.length;i_str++){
        console.log(props.strTable[i_str]);
        let tdTableEmployees = [];
        for(let i=0;i<props.headTable.length;i++)    
            if(typeof(props.headTable[i])==='object'){
                for(let k in props.headTable[i]){
                    for(let j=0;j<props.headTable[i][k].length;j++)    
                        {
                        console.log(props.strTable[i_str][props.headTable[i][k][j]]);
                        tdTableEmployees.push(<td key={'str'+i_str+'.'+i+'.'+j} className='Str'>{props.strTable[i_str][props.headTable[i][k][j]]}</td>)
                    }
                }
            }
            else
                for(let k in props.strTable[i_str]){
                    console.log(k===props.headTable[i]);
                    if(k===props.headTable[i])
                        tdTableEmployees.push(<td key={'str'+i_str+'.'+i} className='Str'>{props.strTable[i_str][k]}</td>)
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