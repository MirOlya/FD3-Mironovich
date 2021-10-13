import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from './events';

import './MobileClients.css';

class MobileClient extends React.PureComponent {
    static propTypes = {
        client: PropTypes.object,
        disDel: PropTypes.bool
    };
    
    state = {
      isEditNow: this.props.disDel,
    };
    
    butEditClicked = () => {
        this.setState(()=>{isEditNow:true});
        voteEvents.emit('EditClient',this.props.client);
    };

    butDeleteClicked = (EO) => {
        voteEvents.emit('DeleteClient',this.props.client);
      }

    render() {
        console.log('Render client '+this.props.client.surname+' code = '+this.props.client.code);
        return <tr key={this.props.client.code} className='Npp'>
          <td className='NameClients'>{this.props.client.surname}</td>
          <td className='NameClients'>{this.props.client.name}</td>
          <td className='NameClients'>{this.props.client.patronymic}</td>
          <td className='Rest'>{this.props.client.balans}</td>
          <td className={this.props.client.condition===true?'conditionactive':'conditionblock'}>{this.props.client.condition===true?'active':'blocked'}</td>
          <td>
              <input type='button' value='редактировать' onClick={this.butEditClicked}/>
          </td>
          <td>
              <input type='button' value='удалить' onClick={this.butDeleteClicked} disabled={this.state.isEditNow}/>
          </td>
        </tr>
    }
}
export default MobileClient;
