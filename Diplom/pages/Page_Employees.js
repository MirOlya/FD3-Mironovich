import React, {useEffect, useState} from 'react';
import HeadTableEmployees from '../components/HeadTableEmployees';
import './css/Page_Employees.css'
import Mirror from '../components/Mirror';
import TableEmployees from '../components/TableEmployees';
import PageFooter from '../components/PageFooter';

function Page_Employees (props){

  const [data, setData] = useState([]);        
  const [head, setHead] = useState([]);        
  const [type, settype] = useState(false);        

  function handleChange(EO){
    if(EO.target.id==='selectWhatShow'){
      let newData = data.slice(0,Math.min(data.length,EO.target.value));
      setData(newData);
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


  useEffect(()=>{
      console.log('render');
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        const arrData = JSON.parse(JSON.stringify(json));
        console.log(typeof(arrData));
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
        console.log(headTableEmployees);
        console.log(tableEmployees);
        setHead(headTableEmployees);
        setData(tableEmployees);
        settype(true)
      });
    },[type]);

    

    console.log('head = '+head);
    if(!type)
      return <Mirror/>
    else
      return (
        <div className='Table'>
          <h1>Сотрудники</h1>
          <table className='Table1'> 
            <tbody>
              <HeadTableEmployees headTable={head}/>
              <TableEmployees headTable={head} strTable={data}/>
            </tbody>
          </table>
          <PageFooter show={10}/>  
        </div>
      );
    

}
    
export default Page_Employees;
    