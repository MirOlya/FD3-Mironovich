import React from 'react';
import PropTypes from 'prop-types';
// import './MobileControl.css';
import {voteEvents} from './events';

class MobileControl extends React.PureComponent {

    static propTypes = {
        editClient: PropTypes.object,
        mode: PropTypes.number,
    };

    state = {
        newClient: this.props.editClient,
        prnCansel:true,
      }

    canselNewStr = ()=>{
        console.log('Отмена действий со строкой - '+this.props.editClient.code); 
        this.setState({prnCansel:false});
        voteEvents.emit('EditClients',this.props.editClient);
    }

    butSaveClicked = () => {
        let nC = {...this.state.newClient};
        if ( this.newSurname ) { 
            nC.surname = this.newSurname.value;
        };
        if ( this.newName ) { 
            nC.name = this.newName.value;
        };
        if ( this.newBalans ) { 
            nC.balans = this.newBalans.value;
        };
        if ( this.newCode ) { 
            nC.code = this.newCode.value;
        };
        if ( this.newPatronymic ) { 
            nC.patronymic = this.newPatronymic.value;
        };
        if ( this.newCondition ) { 
            nC.condition = this.newCondition.checked;
        } ;

        voteEvents.emit('EditClients',nC);
        this.setState({newClient:nC, prnCansel: false});
      }

    newSurname = null;
    newCode = null;
    newName = null;
    newPatronymic = null;
    newBalans = null;
    newCondition = null;

    setNewSurname = (ref) => {
        this.newSurname=ref;
    };
    setNewName = (ref) => {
        this.newName=ref;
    };
    setNewCode = (ref) => {
        this.newCode=ref;
    };
    setNewPatronymic = (ref) => {
        this.newPatronymic=ref;
    };
    setNewCondition = (ref) => {
        this.newCondition=ref;
    };
    setNewBalans = (ref) => {
        this.newBalans=ref;
    };

    render() {
        let addDiv=<div></div>;
        let headerControl = '';
        let ButtonControl=<div></div>
        if(this.props.mode===2){
            headerControl = 'Редактируем клиента';
            ButtonControl=<div>
                <input type='button' value='Save' onClick={this.butSaveClicked}/>
                <input type='button' value='Cansel' onClick={this.canselNewStr} />
            </div>
        }
        else if(this.props.mode===3){
            headerControl = 'Добавляем клиента';
            ButtonControl=<div>
                <input type='button' value='Add' onClick={this.butSaveClicked}/>
                <input type='button' value='Cansel' onClick={this.canselNewStr}/>
            </div>

        };
        addDiv=<div className="MobileControl ADD">
        <h3>{headerControl}</h3>
        <h5>ID {this.state.newClient.code}</h5>
        <label className='AddLabel'>Фамилия
            <input type="text" className='AddInput' defaultValue={this.state.newClient.surname} ref={this.setNewSurname}></input>
        </label>
        <br/>
        <label className='AddLabel'>Имя
            <input type="text" className='AddInput' defaultValue={this.state.newClient.name} ref={this.setNewName}></input>
        </label>
        <br/>
        <label className='AddLabel'>Отчество
            <input type="text" className='AddInput' defaultValue={this.state.newClient.patronymic} ref={this.setNewPatronymic}></input>
        </label>
        <br/>
        <label className='AddLabel'>Баланс
            <input type="text" className='AddInput' defaultValue={this.state.newClient.balans} ref={this.setNewBalans}></input>
        </label>
        <br/>
        <label className='AddLabel'>Статус
            <input type="checkbox" className='AddInput' defaultChecked={this.state.newClient.condition} ref={this.setNewCondition} ></input>
        </label>
        <br/>
        {ButtonControl}
        </div>

        return this.state.prnCansel&&addDiv;
    }
  }
 

 export default MobileControl;