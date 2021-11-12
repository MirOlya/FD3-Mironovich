import React, {useEffect, useState} from 'react';

function PageFooter(props){
    const whatShow = props.show;
    const arrSelect = [5,10,20,'ALL'];
    for(let i=0;i<=arrSelect.length-1;i++)
        arrSelect[i] = <option key={arrSelect[i]} value={arrSelect[i]}>{arrSelect[i]}</option>
    
    function selectWhatShow(EO){
        console.log(EO.target.value)
    }
    
    return(
        <select id = 'selectWhatShow' defaultValue={whatShow} onChange={selectWhatShow}>
            {arrSelect}
        </select>
    )
}

export default PageFooter