import React from 'react';
import PropTypes from 'prop-types';
import './Ishop3Shop.css';
import Ishop3Goods from './Ishop3Goods.js';

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
      listGoods: this.props.companyGoods,
      mode: null, //1 - просмотр, 2 - редактирование, 3 - новый,
      newStrCode: null,
      newStrName: null,
      newStrURL: null,
      newStrRest: null,
      flNewStrName: false,
      flNewStrURL: false,
      flNewStrRest: false
      }

    strSelected = (code) =>{
      console.log('выбрана строка с кодом '+code);
      this.setState( {mode:1,selectedStrCode:code,newStrCode:null,editedStrCode:null});
    }

    strEdited = (code) =>{
      console.log('редактируется строка с кодом '+code);
      this.setState( {mode:2,editedStrCode:code,newStrCode:null,selectedStrCode:null});
    }
    
    strDelected = (code) =>{
      console.log('удалена строка с кодом '+code);
      const newListGoods = this.state.listGoods.filter(v=>v.code!=code)
      this.setState( {listGoods:newListGoods});
    }

    newStr = () =>{
      console.log('Новая строка ');
      let newStrC = 0;
      this.state.listGoods.forEach((el)=>{if(el.code>newStrC) newStrC=el.code});
      newStrC++;
      this.setState({mode:3,newStrCode:newStrC,selectedStrCode:null,editedStrCode:null});
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
              />
          );
        var headGoods = new Array(
        <tr key="0" className='Heading'>
          <th className='Head'>{"Товар"}</th>
          <th className='Head'>{"Изображение"}</th>
          <th className='Head'>{"Остаток"}</th>
          <th className='Head'>{"Управление"}</th>
          {/* <th className='Head'>{"Редактировать"}</th> */}
        </tr>
          );
        let addDiv;
        if(this.state.mode===1){
          let ourGood;
          for(ourGood=0;ourGood<this.state.listGoods.length;ourGood++)
             if(this.state.listGoods[ourGood].code === this.state.selectedStrCode)
              break;
          console.log('find '+ourGood);
          addDiv=<div className="Ishop ADD">
            <h3>{}</h3>
            <h5>ID {this.state.listGoods[ourGood].code}</h5>
           <label className='AddLabel'>Name: {this.state.listGoods[ourGood].name}
            </label>
            <label className='AddLabel'>URL: {this.state.listGoods[ourGood].pict}
            </label>
            <label className='AddLabel'>Rest: {this.state.listGoods[ourGood].rest}
            </label>
          </div>
        }
        else if(this.state.mode===2){
        }
        else if(this.state.mode===3){
          addDiv=<div className="Ishop ADD">
            <h3>ADD new product</h3>
            <h5>ID {this.state.newStrCode}</h5>
           <label className='AddLabel'>Name
              <input type="text" className='AddInput' value={this.state.newStrName} onBlur={this.checkName}></input>
            </label>
            <label className='AddLabel'>URL
              <input type="text" className='AddInput'value={this.state.newStrURL} onBlur={this.checkURL}></input>
            </label>
            <label className='AddLabel'>Rest
              <input type="text" className='AddInput'value={this.state.newStrRest} onBlur={this.checkName}></input>
            </label>
            <div>
              <input type='button' value='ADD' onClick={this.addNewStr}/>
              <input type='button' value='Cansel' onClick={this.canselNewStr}/>
            </div>
          </div>
        }
        else addDiv=<div></div>;

        return <div className='Ishop'> 
        <div className='Company'>{this.props.companyName}</div>
          <table className='Goods'> 
            <tbody>{headGoods.concat(arrGoods)}</tbody>
          </table>
          <input type='button' value='Новый' onClick={this.newStr}/>
          {addDiv}
        </div>;
    }
  }
 

 export default Ishop3Shop;