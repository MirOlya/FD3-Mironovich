import React from 'react';
import PropTypes from 'prop-types';
import './Ishop3Shop.css';
import Ishop3Goods from './Ishop3Goods.js';
import Ishop3Control from './Ishop3Control.js';

class Ishop3Shop extends React.Component {

    static propTypes = {
        companyName: PropTypes.string.isRequired,
        companyGoods:PropTypes.arrayOf(
            PropTypes.shape({
              code: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              pict: PropTypes.string.isRequired,
              rest: PropTypes.number.isRequired
            }))
          };

    state = {
      selectedStrCode: null,
      editedStrCode: null,
      newStrCode: null,
      listGoods: this.props.companyGoods,
      mode: null, //1 - просмотр, 2 - редактирование, 3 - новый,
      isChange: false
      }

    strSelected = (code) =>{
      console.log('выбрана строка с кодом '+code);
      this.setState( {mode:1,selectedStrCode:code,newStrCode:null,editedStrCode:null});
    }

    strEdited = (code) =>{
      console.log('редактируется строка с кодом '+code);
      this.setState( {mode:2,editedStrCode:code,newStrCode:null,selectedStrCode:null});
    }

    strCanselMode = (code) =>{
      console.log('отмена действий со строкой '+code);
      this.setState( {mode:null,isChange:false,editedStrCode:null,newStrCode:null,selectedStrCode:null});
    }

    strChanged = (code) =>{
      console.log('были сделаны изменения. выбор не возможен '+code);
      this.setState( {isChange:true});
    }
    
    strDelected = (code) =>{
      console.log('удалена строка с кодом '+code);
      const newListGoods = this.state.listGoods.filter(v=>v.code!=code)
      this.setState( {listGoods:newListGoods,mode:null,isChange:false});
    }

    doChangedArr = (elArr)=>{
      console.log('изменена или добавлена строка с кодом '+elArr.code);
      let isFind=false;
      let newListGoods = this.state.listGoods.slice();
      for(let ourGood=0;ourGood<newListGoods.length;ourGood++)
         if(newListGoods[ourGood].code === elArr.code){
            newListGoods[ourGood].name = elArr.name;
            newListGoods[ourGood].pict = elArr.pict;
            newListGoods[ourGood].rest = elArr.rest;
            isFind = true;
            break;
          };
      if(!isFind){
        newListGoods.push(elArr)
      };
      this.setState( {listGoods:newListGoods,mode:null,isChange:false});
    }

    newStr = () =>{
      let newStrC = 0;
      this.state.listGoods.forEach((el)=>{if(el.code>newStrC) newStrC=el.code});
      newStrC++;
      console.log('Новая строка = '+newStrC);
      this.setState({mode:3,newStrCode:newStrC,selectedStrCode:null,editedStrCode:null});
    }

    findElListGoods = (code) =>{
      for(let ourGood=0;ourGood<this.state.listGoods.length;ourGood++)
         if(this.state.listGoods[ourGood].code === code)
          return {
            'name':this.state.listGoods[ourGood].name,
            'pict':this.state.listGoods[ourGood].pict,
            'rest':this.state.listGoods[ourGood].rest,
            'code':this.state.listGoods[ourGood].code
          };
      return {};
    }



    render() {
        var arrGoods = this.state.listGoods.map( v =>
            <Ishop3Goods key={v.code}
                name={v.name}
                pict={v.pict}
                rest={v.rest}
                code={v.code} 
                isSelected={this.state.selectedStrCode===v.code}
                cbSelected={this.strSelected}
                cbDelected={this.strDelected}
                cbEdited={this.strEdited}
                isChanged = {this.state.isChange}
              />
          );
        const findEl = this.findElListGoods(this.state.selectedStrCode||this.state.editedStrCode||this.state.newStrCode);
        if(this.state.mode===1)
          var addDiv = <Ishop3Control key={this.state.mode+"_"+this.state.selectedStrCode}
              mode={this.state.mode}
              name = {findEl.name}
              pict = {findEl.pict}
              rest = {findEl.rest}
              code = {this.state.selectedStrCode}
              cbMode = {this.strCanselMode}
              cbIsChanged = {this.strChanged}
            />;
        else if(this.state.mode===2) 
          var addDiv = <Ishop3Control key={this.state.mode+"_"+this.state.editedStrCode}
              mode={this.state.mode}
              name = {findEl.name}
              pict = {findEl.pict}
              rest = {findEl.rest}
              code = {this.state.editedStrCode}
              cbMode = {this.strCanselMode}
              cbIsChanged = {this.strChanged}
              cbDoChangedOrAdd = {this.doChangedArr}
            />;
        else if(this.state.mode===3) 
            var addDiv = <Ishop3Control key={this.state.mode+"_"+this.state.newStrCode}
                mode={this.state.mode}
                name = {''}
                pict = {''}
                rest = {0}
                code = {this.state.newStrCode}
                cbMode = {this.strCanselMode}
                cbIsChanged = {this.strChanged}
                cbDoChangedOrAdd = {this.doChangedArr}
                />;
        var headGoods = new Array(
          <tr key="0" className='Heading'>
            <th className='Head'>{"Товар"}</th>
            <th className='Head'>{"Изображение"}</th>
            <th className='Head'>{"Остаток"}</th>
            <th className='Head'>{"Управление"}</th>
            {/* <th className='Head'>{"Редактировать"}</th> */}
          </tr>
          );
        return <div className='Ishop'> 
        <div className='Company'>{this.props.companyName}</div>
          <table className='Goods'> 
            <tbody>{headGoods.concat(arrGoods)}</tbody>
          </table>
          <input type='button' value='Новый' onClick={this.newStr} disabled={this.state.isChange}/>
          {addDiv}
        </div>;
    }
  }
 

 export default Ishop3Shop;