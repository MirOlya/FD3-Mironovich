import React from 'react';
import PropTypes from 'prop-types';

import './Ishop3Goods.css';

class Ishop3Goods extends React.Component {
    static propTypes = {
        name: PropTypes.string,
        code: PropTypes.number,
        pict: PropTypes.string,
        rest: PropTypes.number,
        cbSelected: PropTypes.func.isRequired,
        isSelected: PropTypes.bool.isRequired,
        cbDelected: PropTypes.func.isRequired,
        cbEdited: PropTypes.func.isRequired,
    };
    delStr = ()=>{
        console.log('Удалили новую строку - '+this.props.code); 
        this.props.cbDelected(this.props.code);
    }
    editStr = ()=>{
        console.log('Редактируем строку - '+this.props.code); 
        this.props.cbEdited(this.props.code);
    }
    selStr = ()=>{
        console.log('Выбрали новую строку - '+this.props.code); 
        this.props.cbSelected(this.props.code);
        }
    render() {
        console.log(this.props.code +' = '+this.props.isSelected);
        return <tr key={this.props.code} className={this.props.isSelected?'Npp SelGood':'Npp'}>
          <td className='NameGood' onClick={this.selStr}>{this.props.name}</td>
          <td onClick={this.selStr}>
            {this.props.pict/* <img className= 'Pict' src={this.props.pict}/> */}
          </td>
          <td className='Rest' onClick={this.selStr}>{this.props.rest}</td>
          <td>
              <input type='button' value='удалить' onClick={this.delStr}/>
              <input type='button' value='редактировать' onClick={this.editStr}/>
          </td>
          {/* <td>
              <input type='button' value='редактировать' onClick={this.editStr}/>
          </td> */}
        </tr>
    }
}
export default Ishop3Goods;
