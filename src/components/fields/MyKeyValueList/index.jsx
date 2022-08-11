import * as React from "react";
import { useRecordContext } from 'react-admin';

const MyKeyValueList = ({ key, value }) => {
    console.log("key", key);
    return (
        <div>
            <div style={{textWeight: "bold"}}>{key}</div>
            <div>{value}</div>
        </div>
    );
}

export default MyKeyValueList;