import * as React from "react";
import { useRecordContext } from 'react-admin';
import { Link } from 'react-router-dom';


const CustomShowButton = () => {
    const record = useRecordContext();

    //console.log('record', record);

    const uri = record.id;
    console.log('uri', uri.replaceAll('/', '%2F'));

    return record ? (
        <a href={`/#/conversations/${uri}/show`}>Show</a>
    ) : null;
}

export default CustomShowButton;