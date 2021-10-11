import React from 'react';
import PropTypes from 'prop-types';
import './Mobile.css';
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
      client:null,
      clientEditNow:null
      };

    getClients = ()=>{
      return this.state.listClients.map( client =>{
        if(((this.state.flClients===2)&&(!client.condition))||(((this.state.flClients===3)&&(client.condition))))
          return null
        else
          return <MobileClient key={client.code} client={client}/>})};

    setClients = (prn)=>{
      this.setState({flClients:prn});
    }

    addDiv = null;
    
    deleteClient = (elArr) =>{
      console.log('удалена строка с кодом '+elArr.code);
      const newListGoods = this.state.listClients.filter(v=>v!=elArr)
      this.setState( {...this.state,listClients:newListGoods});
    }

    editClient = (elArr)=>{
        if(this.state.client!=null)
          this.editClients(this.state.client);
        // let newElArr = {...elArr};

        let newElArr = elArr;
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

    editClients = (elArr) =>{
      let isFind=false;
      let newListGoods = this.state.listClients.slice();
      for(let ourClient=0;ourClient<newListGoods.length;ourClient++)
         if(newListGoods[ourClient].code === elArr.code){
            newListGoods[ourClient].code = elArr.code+newListGoods.length;
            newListGoods[ourClient].name = elArr.name;
            newListGoods[ourClient].surname = elArr.surname;
            newListGoods[ourClient].patronymic = elArr.patronymic;
            newListGoods[ourClient].balans = elArr.balans;
            newListGoods[ourClient].condition = elArr.condition;
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
      console.log('Render company = '+this.state.activeCompany);
      const comp = this.props.companyNames.map((el,i)=><button key={i} onClick = {()=>(this.setState({activeCompany:this.props.companyNames[i]}))}>{el}</button>);
      const clientsCode=this.getClients();
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
      return <div>
        {comp}
        <br/>
        Компания: {this.state.activeCompany}
        <hr/>
        <button onClick = {()=>this.setClients(1)}>Все</button>
        <button onClick = {()=>this.setClients(2)}>Активные</button>
        <button onClick = {()=>this.setClients(3)}>Заблокированные</button>
        <hr/>
        <table className='Mobile'> 
          <tbody>{headClients.concat(clientsCode)}</tbody>
        </table>
        <button onClick = {this.addClient}>Добавить клиента</button>
        {this.addDiv}
      </div>
    }
  }
 

 export default Mobile;