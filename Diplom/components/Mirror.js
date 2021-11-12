import React, {useEffect, useState} from 'react';
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';
import './css/General.css';

function Mirror(){
    return <div className='mirror'>
                <Icon path={mdiLoading} spin = {1} size={'240px'}/>
            </div>

}
export default Mirror