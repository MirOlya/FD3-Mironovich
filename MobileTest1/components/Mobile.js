import React from 'react';
import PropTypes from 'prop-types';
// import './Mobile.css';
import MobileClient from './MobileClients.js';
import {voteEvents} from './events';
import MobileControl from './MobileControl.js';

class Mobile extends React.PureComponent {

    static propTypes = {
        companyNames: PropTypes.arrayOf(PropTypes.string).isRequired,
        companyClients:PropTypes.arrayOf(
            PropTypes.shape({
              code: PropTypes.number.isRequired,
              surname: PropTypes.string.isRequired,
              name: PropTypes.string.isRequired,
              patronymic: PropTypes.string.isRequired,
              balans: PropTypes.number.isRequired,
              condition:PropTypes.bool.isRequired
            }))
          };

    state = {
      activeCompany:this.props.companyNames[0],
      flClients:1,//1 - все, 2  - активные, 3- заблокированные,
      listClients:this.props.companyClients,
      client:null
      };


    setClients = (prn)=>{
      this.setState({flClients:prn});
      if(this.addDiv)
      this.addDiv = null;
    }

    addDiv = null;
    
    deleteClient = (elArr) =>{
      console.log('удалена строка с кодом '+elArr.code);
      const newListGoods = this.state.listClients.filter(v=>v!=elArr)
      this.setState( {...this.state,listClients:newListGoods});
    }

    editClient = (newElArr)=>{
        //if(this.state.client!=null)
          //this.editClients(this.state.client);
        // let newElArr = {...elArr};

        //let newElArr = elArr;
        console.log('изменяется строка с кодом '+newElArr.code);
        this.addDiv = <MobileControl key={newElArr.code}
        editClient = {newElArr}
        mode = {2}
      />;
      this.setState({client:newElArr});
    }

    addClient = ()=>{
      // if(this.state.client!=null)
      //   this.editClients(this.state.client);
      let newCode = 0;
      this.state.listClients.forEach(el=>newCode = Math.max(newCode, el.code));
      let newElArr = {code:newCode+1,name:'',surname:'',patronymic:'',balans:0,condition:true,};
      console.log('Добавляется строка с кодом '+newElArr.code);
      this.addDiv = <MobileControl key={newElArr.code}
      editClient = {newElArr}
      mode = {3}
    />;
    this.setState({client:newElArr});
  }

    editClients = (elArr,isModify) =>{
      let isFind=false;
      let newListGoods = this.state.listClients.slice();
      for(let ourClient=0;ourClient<newListGoods.length;ourClient++)
         if(newListGoods[ourClient].code === elArr.code){
          newListGoods[ourClient] = {...elArr};
            newListGoods[ourClient].balans = Number(elArr.balans)?Number(elArr.balans):0;
            newListGoods[ourClient].condition = elArr.condition===true?true:false;
            isFind = true;
            break;
          };
      if(!isFind){
        newListGoods.push(elArr)
      };
      this.setState( {listClients:newListGoods,client:null});
      this.addDiv = null;
    }

    componentDidMount = () => {
      voteEvents.addListener('EditClient',this.editClient);
      voteEvents.addListener('DeleteClient',this.deleteClient);
      voteEvents.addListener('EditClients',this.editClients);
    };
  
    componentWillUnmount = () => {
      voteEvents.removeListener('EditClient',this.editClient);
      voteEvents.removeListener('DeleteClient',this.deleteClient);
      voteEvents.removeListener('EditClients',this.editClients);
    };

    render() {
      //const clientsCode=this.getClients();
      var headClients = new Array(
        <tr key="0" className='Heading'>
          <th className='Head'>{"Фамилия"}</th>
          <th className='Head'>{"Имя"}</th>
          <th className='Head'>{"Отчество"}</th>
          <th className='Head'>{"Баланс"}</th>
          <th className='Head'>{"Статус"}</th>
          <th className='Head'>{"Редактировать"}</th>
          <th className='Head'>{"Удалить"}</th>
        </tr>
        );
        const tableClients = headClients.concat(this.state.listClients.map( client =>{
          if(((this.state.flClients===2)&&(!client.condition))||(((this.state.flClients===3)&&(client.condition))))
            return null
          else
            {
              const key1 = ((this.state.client!=null)&&(this.state.client.code === client.code)?'--++':'')+client.code+client.name+client.surname+client.balans+client.condition+client.patronymic;
              const disDel = ((this.state.client!=null)&&(this.state.client.code === client.code))?true:false;
            return <MobileClient key={key1} client={client} disDel={disDel}/>
          };
          }))
        return <div>
        <button name = 'all' id = 'all' onClick = {()=>this.setClients(1)}>Все</button>
        <button name = 'active' id = 'active' onClick = {()=>this.setClients(2)}>Активные</button>
        <button name = 'block' id = 'block' onClick = {()=>this.setClients(3)}>Заблокированные</button>
        <hr/>
        <table className='Mobile'> 
          <tbody>{tableClients}</tbody>
        </table>
        <button name = 'addClient' id = 'addClient' onClick = {this.addClient}>Добавить клиента</button>
        {this.addDiv}
      </div>
    }
  }
 

 export default Mobile;