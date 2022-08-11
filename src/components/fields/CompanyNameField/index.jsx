import * as React from "react";
import {useGetOne, useRecordContext} from 'react-admin';

 const CompanyNameField = ({ source }) => {
    const record = useRecordContext();
    const {data : parentAccount, loaded} = useGetOne('users', record.parentAccount);

    if (record && source === 'companyName') {
        if (record.companyName) {
            return <span>{record.companyName}</span>
        } else if (parentAccount && parentAccount.companyName) {
            return <span>{parentAccount.companyName}</span>
        }
    }

    return null;
}

export default CompanyNameField;