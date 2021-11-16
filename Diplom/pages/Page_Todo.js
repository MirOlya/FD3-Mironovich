import React from 'react';

import RecordMitData from '../components/RecordMitData';


export default function Page_Todo(props) {
    const todoId=parseInt(props.match.params.clid);

    return <RecordMitData strNavLink={'Todo'} header={'Задание'} strFetch={'https://jsonplaceholder.typicode.com/todos/'+todoId+'/'}/>

}
