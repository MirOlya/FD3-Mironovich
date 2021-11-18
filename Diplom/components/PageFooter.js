import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './css/PageFooter.css';
import {Tooltip} from '@mui/material';

function PageFooter(props){
    const [whatShow,setWhatShow] = useState(props.begShow);//==='ALL'?props.allStrData:Number(props.begShow));
    const [minCounterShowStr,setminCounterShowStr] = useState(props.beginRecord);
    const [maxCounterShowStr,setMaxCounterShowStr] = useState(props.begShow==='ALL'?props.allStrData:Number(props.begShow));
    useEffect(()=>{
        setMaxCounterShowStr(whatShow==='ALL'?props.allStrData:Math.min(props.allStrData,minCounterShowStr+Number(whatShow)-1));
    },[whatShow,minCounterShowStr])

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
        if(EO.target.value==='ALL')
            props.dispatch( { 
                type:"SETNEWRECORD",
                beginRecord:1
            } );
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
            <Tooltip title={props.beginRecord===1?"You are at the top of the list. It is not possible to view the previous lines.":"Click to view previous "+props.begShow+" lines."} enterDelay={500} leaveDelay={200} placement="bottom-start">
                <button id = {'decMinCounter'} onClick={decMinCounter}>{'<'}</button>
            </Tooltip>
            <span>{Math.min(props.beginRecord,props.allStrData)}</span><span>{' - '}</span><span>{props.begShow==='ALL'?props.allStrData:Math.min(props.allStrData,maxCounterShowStr)}</span><span>{' из '}</span><span>{+props.allStrData}</span>
            <Tooltip title={props.allStrData===maxCounterShowStr?"You are at the end of the list. It is not possible to view the following lines.":"Click to view following "+props.begShow+" lines."} enterDelay={500} leaveDelay={200} placement="bottom-start">
                <button id = {'incMinCounter'} onClick={incMinCounter}>{'>'}</button>
            </Tooltip>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        begShow: ''+state.shower.begShow,
        beginRecord:state.beginRecorder.beginRecord,
        allStrData: state.lengthData.lengthData,
       
    };
  };
  

PageFooter.propTypes = {
    begShow:PropTypes.string,// получено из Redux
    beginRecord:PropTypes.number,// получено из Redux
    // allStrData: PropTypes.number,// получено из Redux
};

PageFooter = connect(mapStateToProps)(PageFooter);


export default PageFooter