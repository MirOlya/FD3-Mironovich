import React, {useEffect, useState} from 'react';
import HeadTableData from './HeadTable';
// import '../pages/css/Page_Employees';
import Mirror from './Mirror';
import TableData from './TableData';
import PageFooter from './PageFooter';

function RecordMitData (props){
  const [data, setData] = useState([]);        
  const [head, setHead] = useState([]);        
  const [type, settype] = useState(false);        


  useEffect(()=>{
      console.log('render');
      fetch(props.strFetch)
      .then(response => response.json())
      .then(json => {
        console.log(JSON.stringify(json));
        const arrData = JSON.parse(JSON.stringify(json));
        console.log(arrData);
        const headTableEmployees = [];
        const tableEmployees = [];
        tableEmployees.push(arrData);
        for (let key in arrData){
          if(typeof(arrData[key])==='object'){
             for (const key_1 in arrData[key]){
              headTableEmployees.push(key_1);
              const chek = headTableEmployees.some((el)=>{return (el===key_1);});
              if(!chek)
                if(typeof(arrData[key][key_1])==='object'){
                  const headTableEmployees_1=[];
                  for (const key_2 in arrData[key][key_1])
                    headTableEmployees_1.push(key_2);
                  const newEl = {};
                  newEl[key_1]=headTableEmployees_1;
                  headTableEmployees.push(newEl);
                }
                // else{ 
                //   headTableEmployees.push(key_1);
                // }
              else 
                break;
              }
            }
            else  
              headTableEmployees.push(key);

            };
          for(let i=0;i<tableEmployees.length;i++){
            if(typeof(tableEmployees[i])==='object'){
              let newEl = {};
              for(let k in tableEmployees[i]){
                if(typeof(tableEmployees[i][k])==='object')
                  for(let k1 in tableEmployees[i][k]){
                    if(typeof(tableEmployees[i][k][k1])==='object'){
                      for(let k2 in tableEmployees[i][k][k1])
                          newEl[''+k1] = (newEl[k1]===undefined)?'':newEl[k1]+' '+tableEmployees[i][k][k1][k2]
                          // newData.push(newEl)
                        }
                        else{
                          newEl[''+k1] = tableEmployees[i][k][k1]
                          // newData.push(newEl)
                        }
                  }
                else{
                  // let newEl = {};
                  newEl[''+k] = tableEmployees[i][k]
                  // newData.push(newEl)
                }}
                tableEmployees[i] =  newEl   
              }
            else{

           };
          };
        // console.log(''+props.header);
        // console.log(headTableEmployees);
        // console.log(tableEmployees);
        setHead(headTableEmployees);
        setData(tableEmployees);
        settype(true)
      });
    },[type]);

    

    if(!type)
      return <Mirror/>
    else
      return (
        <div className='card'>
          <h1 className='card-header'>{props.header}</h1>
          <div className='card-body'>
            <table className='table'> 
              <tbody>
                <HeadTableData headTable={head}/>
                <TableData headTable={head} strTable={data} strNavLink = {props.strNavLink}/>
              </tbody>
            </table>
          </div>
        </div>
      );
    

  }
  
  export default RecordMitData;
  