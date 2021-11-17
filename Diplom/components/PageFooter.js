import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './css/PageFooter.css';

function PageFooter(props){
    const [whatShow,setWhatShow] = useState(props.begShow==='ALL'?props.allStrData:Number(props.begShow));
    console.log(props.begShow);
    console.log((props.begShow==='ALL'?props.allStrData:Number(props.begShow)));
    console.log(props.allStrData);

    const [counterStr,setCounterStr] = useState(props.beginRecord+'-'+(props.begShow==='ALL'?props.allStrData:Number(props.begShow))+' из ');
    const [minCounterShowStr,setminCounterShowStr] = useState(props.beginRecord);
    const [maxCounterShowStr,setMaxCounterShowStr] = useState(props.begShow==='ALL'?props.allStrData:Number(props.begShow));
    console.log(counterStr);
    console.log('1 maxCounterShowStr = '+maxCounterShowStr+'  '+props.begShow+'  '+props.allStrData+'  '+Number(props.begShow));
    
    useEffect(()=>{
        console.log('setMaxCounterShowStr');
        console.log(whatShow);
        setMaxCounterShowStr(whatShow==='ALL'?props.allStrData:Math.min(props.allStrData,minCounterShowStr+Number(whatShow)-1));
    },[whatShow,minCounterShowStr])

    useEffect(()=>{
        console.log('2 maxCounterShowStr = '+maxCounterShowStr);
        setCounterStr(''+minCounterShowStr+'-'+maxCounterShowStr+' из ')
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
            <select id = 'selectWhatShow' defaultValue={whatShow} onChange={selectWhatShow} className='selectWhatShow'>
                {arrSelect}
            </select>
            {/* <span>{props.begShow}</span>
            <span>{props.beginRecord}</span> */}
            <button id = {'decMinCounter'} onClick={decMinCounter}>{'<'}</button>
            <span>{counterStr+' '+props.allStrData}</span>
            <button id = {'incMinCounter'} onClick={incMinCounter}>{'>'}</button>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        begShow: ''+state.shower.begShow,
        beginRecord:state.beginRecorder.beginRecord,
       
    };
  };
  

PageFooter.propTypes = {
    begShow:PropTypes.string,// получено из Redux
    beginRecord:PropTypes.number,// получено из Redux
};

PageFooter = connect(mapStateToProps)(PageFooter);


export default PageFooter