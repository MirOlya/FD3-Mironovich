import React from 'react';
import PropTypes from 'prop-types';
import './Ishop3Control.css';

class Ishop3Control extends React.Component {

    static propTypes = {
        mode: PropTypes.number.isRequired,
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        pict: PropTypes.string.isRequired,
        rest: PropTypes.number.isRequired,
        cbMode: PropTypes.func.isRequired,
        cbIsChanged: PropTypes.func.isRequired,
        cbDoChangedOrAdd:PropTypes.func,
    };

    state = {
      newStrCode: this.props.code,
      newStrName: this.props.name,
      newStrURL: this.props.pict,
      newStrRest: this.props.rest,
      flNewStrName: (this.props.name===''),
      flNewStrURL: (this.props.pict===''),
      flNewStrRest: (Number(this.props.rest)<10),
      disabled: (this.props.name==='')&&(Number(this.props.rest)<10)&&(this.props.pict===''),
      }

    changeName=(EO) =>{
        const chStr = EO.target.value;
        this.setState( {newStrName:chStr});
        this.props.cbIsChanged(this.props.code);
    }
    changeUrl=(EO) =>{
        const chStr = EO.target.value;
        this.setState( {newStrURL:chStr});
        this.props.cbIsChanged(this.props.code);
    }
    changeRest=(EO) =>{
        const chStr = Number(EO.target.value);
        this.setState( {newStrRest:chStr});
        this.props.cbIsChanged(this.props.code);
    }
    checkName=(EO) => {
        const chStr = EO.target.value;
        if(chStr==='')
            this.setState( {flNewStrName:true,disabled:true});
        else
            this.setState( {flNewStrName:false,disabled:this.state.flNewStrRest||this.state.flNewStrURL});
    }
    
    checkURL=(EO) => {
        const chStr = EO.target.value;
        if(chStr==='')
            this.setState( {flNewStrURL:true,disabled:true});
        else
            this.setState( {flNewStrURL:false,disabled:this.state.flNewStrRest||this.state.flNewStrName});
    }

    checkRest=(EO) => {
        let chStr = EO.target.value;
        if(!Number(chStr)||Number(chStr)<=0)
            this.setState( {flNewStrRest:true,disabled:true});
        else
            this.setState( {flNewStrRest:false,disabled:this.state.flNewStrName||this.state.flNewStrURL});
    }

    canselNewStr = ()=>{
        console.log('Отмена действий со строкой - '+this.props.code); 
        this.props.cbMode(this.props.code);
    }

    addNewStr = ()=>{
        console.log('Вносим изменения или добавляем - '+this.props.code); 
        const el={'code':this.state.newStrCode,
        'name': this.state.newStrName,
        'pict': this.state.newStrURL,
        'rest': this.state.newStrRest};
        this.props.cbDoChangedOrAdd(el)
    }
  

    render() {
        let addDiv=<div></div>;
        let headerControl = '';
        let ButtonControl=<div></div>
        if(this.props.mode===1){
            addDiv=<div className="Ishop3Control ADD">
              <h3>{}</h3>
              <h5>ID {this.state.newStrCode}</h5>
            <label className='AddLabel'>Name: {this.state.newStrName}
              </label>
              <label className='AddLabel'>URL: {this.state.newStrURL}
              </label>
              <label className='AddLabel'>Rest: {this.state.newStrRest}
              </label>
            </div>
        }
        else {
            if(this.props.mode===2){
                headerControl = 'EDIT new product';
                ButtonControl=<div>
                    <input type='button' value='Save' onClick={this.addNewStr} disabled={this.state.disabled}/>
                    <input type='button' value='Cansel' onClick={this.canselNewStr}/>
                </div>
            }
            else if(this.props.mode===3){
                headerControl = 'ADD new product';
                ButtonControl=<div>
                    <input type='button' value='Add' onClick={this.addNewStr} disabled={this.state.disabled}/>
                    <input type='button' value='Cansel' onClick={this.canselNewStr}/>
                </div>
    
            };

            addDiv=<div className="Ishop3Control ADD">
            <h3>{headerControl}</h3>
            <h5>ID {this.state.newStrCode}</h5>
            <label className='AddLabel'>Name
                <input type="text" className='AddInput' value={this.state.newStrName} onBlur={this.checkName} onChange={this.changeName}></input>
                <span className='ErrorInput'>{this.state.flNewStrName?'BAD':''}</span>
            </label>
            <label className='AddLabel'>URL
                <input type="text" className='AddInput'value={this.state.newStrURL} onBlur={this.checkURL} onChange={this.changeUrl}></input>
                <span className='ErrorInput'>{this.state.flNewStrURL?'BAD':''}</span>
            </label>
            <label className='AddLabel'>Rest
                <input type="text" className='AddInput'value={this.state.newStrRest} onBlur={this.checkRest} onChange={this.changeRest}></input>
                <span className='ErrorInput'>{this.state.flNewStrRest?'BAD':''}</span>
            </label>
            {ButtonControl}
            </div>

        };

        return addDiv;
    }
  }
 

 export default Ishop3Control;