import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function PageFooter(props){
    const [whatShow,setWhatShow] = useState(props.begShow==='ALL'?props.begShow:Number(props.begShow));
    const [counterStr,setCounterStr] = useState(props.beginRecord+'-'+props.show+' из '+props.allStrData);
    const [minCounterShowStr,setminCounterShowStr] = useState(props.beginRecord);
    const [maxCounterShowStr,setMaxCounterShowStr] = useState(Number(props.show));
    
    useEffect(()=>{
        console.log('setMaxCounterShowStr');
        console.log(whatShow);
        setMaxCounterShowStr(whatShow==='ALL'?props.allStrData:Math.min(props.allStrData,minCounterShowStr+Number(whatShow)-1));
    },[whatShow,minCounterShowStr])

    useEffect(()=>{
        setCounterStr(''+minCounterShowStr+'-'+maxCounterShowStr+' из '+props.allStrData)
    },[minCounterShowStr,maxCounterShowStr])

    const arrSelect = [5,10,20,'ALL'];
    for(let i=0;i<=arrSelect.length-1;i++)
        arrSelect[i] = <option key={arrSelect[i]} value={arrSelect[i]}>{arrSelect[i]}</option>
    
    function selectWhatShow(EO){
        EO.persist();
        props.dispatch( { 
            type:"SETNEWSHOW",
            begShow:EO.target.value
        } );
        setWhatShow(()=>EO.target.value);
    }

    function decMinCounter(EO) {
        EO.persist();
        if(props.begShow==='ALL')
            return;
        const nowRecord = Math.max(1,minCounterShowStr-Number(props.begShow));
        console.log('1 nowRecord = '+nowRecord);
        props.dispatch( { 
            type:"SETNEWRECORD",
            beginRecord:nowRecord
        } );
        setminCounterShowStr(nowRecord);
    }
    function incMinCounter(EO) {
        EO.persist();
        if(props.begShow==='ALL')
            return;
        const nowRecord = minCounterShowStr+Number(props.begShow);
        console.log('2 nowRecord = '+nowRecord);
        if(nowRecord<props.allStrData){
            props.dispatch( { 
                type:"SETNEWRECORD",
                beginRecord:nowRecord
            } );
            setminCounterShowStr(nowRecord);
        }
    }

    return(
        <div className='footerPage'>
            <select id = 'selectWhatShow' defaultValue={whatShow} onChange={selectWhatShow}>
                {arrSelect}
            </select>
            <span>{props.begShow}</span>
            <span>{props.beginRecord}</span>
            <button id = {'decMinCounter'} onClick={decMinCounter}>{'<'}</button>
            <span>{counterStr}</span>
            <button id = {'incMinCounter'} onClick={incMinCounter}>{'>'}</button>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        begShow: ''+state.shower.begShow,
        beginRecord:state.beginRecorder.beginRecord
    };
  };
  

PageFooter.propTypes = {
    begShow:PropTypes.string,// получено из Redux
    beginRecord:PropTypes.number,// получено из Redux
};

PageFooter = connect(mapStateToProps)(PageFooter);


export default PageFooter