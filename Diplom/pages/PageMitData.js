import React, {useEffect, useState} from 'react';
import HeadTableData from '../components/HeadTable';
// import './css/Page_Employees.css'
import Mirror from '../components/Mirror';
import TableData from '../components/TableData';
import PageFooter from '../components/PageFooter';
import './css/PageMitData.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { useTransition, animated } from "react-spring";

function PageMitData (props){

  const [data, setData] = useState([]);        
  const [head, setHead] = useState([]);        
  const [type, settype] = useState(false);        


  useEffect(()=>{
      console.log('render');
      fetch(props.strFetch)
      .then(response => response.json())
      .then(json => {
        const arrData = JSON.parse(JSON.stringify(json));
        const headTableEmployees = [];
        const tableEmployees = [];
        for (let key in arrData){
          tableEmployees.push(arrData[key]);
          if(typeof(arrData[key])==='object')
             for (const key_1 in arrData[key]){
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
                else{ 
                  headTableEmployees.push(key_1);
                }
              else 
                break;
              }
            };
        for(let i=0;i<tableEmployees.length;i++){
          let newEl = {};
          if(typeof(tableEmployees[i])==='object')
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
              }
            };
          tableEmployees[i] =  newEl   
          };
        // console.log(headTableEmployees);
        // console.log(tableEmployees);
        props.dispatch( { 
          type:"SETLENGTHDATA",
          lengthData:tableEmployees.length
        } );
        setHead(headTableEmployees);
        setData(()=>{
          return tableEmployees;
        });

        settype(true)
      });
    },[type]);

    

    if(!type)
      return <Mirror/>
    else
      return (
        <div className='card tableMitData'>
          <h1 className='card-header'>{props.header}</h1>
          <PageFooter allStrData={props.lengthData}/>  
          <div className='card-body tableData'>
            <table className='table table-bordered border-primar'> 
              <tbody>
                <HeadTableData headTable={head} needDelete={true}/>
                <TableData headTable={head} needDelete={true} strTable={data} strNavLink = {props.strNavLink}/>
              </tbody>
            </table>
          </div>
        </div>
      );
    

}

const mapStateToProps = function (state) {
  return {
    lengthData: state.lengthData.lengthData
    };
};

PageMitData.propTypes = {
  lengthData:PropTypes.number,// получено из Redux
};

PageMitData = connect(mapStateToProps)(PageMitData);


export default PageMitData;
    