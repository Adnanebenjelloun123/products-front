import * as React from "react";
import { useRecordContext } from 'react-admin';

const MyArrayField = ({ source }) => {
    const record = useRecordContext();
    console.log(record[source]);
    return record ? (
        <ul>
            {record[source].map(i => <li key={i["@id"]}>{i["label"]}: {i["value"]}</li>)}
        </ul>
    ) : null;
}

export default MyArrayField;