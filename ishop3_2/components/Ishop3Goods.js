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
        isChanged: PropTypes.bool.isRequired,
    };
    delStr = ()=>{
        console.log('Удалили новую строку - '+this.props.code); 
        if(!this.props.isChanged)
            this.props.cbDelected(this.props.code);
    }
    editStr = ()=>{
        console.log('Редактируем строку - '+this.props.code); 
        if(!this.props.isChanged)
            this.props.cbEdited(this.props.code);
    }
    selStr = ()=>{
        console.log('Выбрали новую строку - '+this.props.code); 
        if(!this.props.isChanged)
            this.props.cbSelected(this.props.code);
        }
    render() {
        return <tr key={this.props.code} className={this.props.isSelected?'Npp SelGood':'Npp'}>
          <td className='NameGood' onClick={this.selStr}>{this.props.name}</td>
          <td onClick={this.selStr}>
            <img className= 'Pict' src={this.props.pict} alt='Не найден путь к изображению'/> 
            {/* {this.props.pict} */}
          </td>
          <td className='Rest' onClick={this.selStr}>{this.props.rest}</td>
          <td>
              <input type='button' value='удалить' onClick={this.delStr} disabled={this.props.isChanged}/>
              <input type='button' value='редактировать' onClick={this.editStr}  disabled={this.props.isChanged}/>
          </td>
        </tr>
    }
}
export default Ishop3Goods;
