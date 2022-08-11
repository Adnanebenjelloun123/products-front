import * as React from "react";
import {ListGuesser, ShowGuesser, FieldGuesser, CreateGuesser, InputGuesser, EditGuesser} from "@api-platform/admin";
import {
    ReferenceInput,
    SelectInput,
    AutocompleteInput,
    TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from "react-admin";
import {useState} from "react";
import CompanyNameField from "../../components/fields/CompanyNameField";

const roles = [
    {id: 'ROLE_ADMIN', name: 'Admin'},
    {id: 'ROLE_CLIENT', name: 'Client'},
    {id: 'ROLE_AGENT', name: 'Agent'},
    {id: 'ROLE_AGENT_LEAD', name: 'Agent Lead'},
    {id: 'ROLE_AGENT_LEAD_CITY', name: 'Agent Lead City'},
    {id: 'ROLE_AGENT_LIVE_CHAT', name: 'Agent Live Chat'},
];

const filters = [
    <TextInput source="email" label="Email" alwaysOn />,
    <TextInput source="givenName" label="First name" />,
    <TextInput source="familyName" label="Last name" />,
    <TextInput source="companyName" label="Company" />,
];

export const UserList = props => (
    <ListGuesser {...props} filters={filters}>
        <FieldGuesser source={"email"}/>
        <FieldGuesser source={"givenName"}/>
        <FieldGuesser source={"familyName"}/>
        <CompanyNameField source={"companyName"}/>
    </ListGuesser>
);

export const UserShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"email"} addLabel={true}/>
        <FieldGuesser source={"givenName"} addLabel={true}/>
        <FieldGuesser source={"familyName"} addLabel={true}/>
        <CompanyNameField source={"companyName"} addLabel={true}/>
        <FieldGuesser source={"teamMembers"} addLabel={true}/>
    </ShowGuesser>
);

export const UserCreate = props => {
    const [role, setRole] = useState('');
    return (
        <CreateGuesser {...props}>
            <InputGuesser source={"email"} addLabel={true}/>
            <InputGuesser source={"givenName"} addLabel={true}/>
            <InputGuesser source={"familyName"} addLabel={true}/>

            <AutocompleteInput source="role" choices={roles} onChange={setRole}/>

            {role === 'ROLE_CLIENT' && <TextInput source={"companyName"} addLabel={true}/>}

            {['ROLE_AGENT', 'ROLE_AGENT_LEAD', 'ROLE_AGENT_LEAD_CITY', 'ROLE_AGENT_LIVE_CHAT'].includes(role) &&
            <ReferenceInput label="Parent account" source="parentAccount" reference="users">
                <SelectInput optionText="companyName"/>
            </ReferenceInput>}

            {role === 'ROLE_AGENT_LEAD_CITY' && <ReferenceArrayInput source="cities" reference="cities">
                <SelectArrayInput optionText="name"/>
            </ReferenceArrayInput>}
        </CreateGuesser>
    )
};

export const UserEdit = props => {
    return (
        <EditGuesser {...props}>
            <InputGuesser source={"email"} addLabel={true}/>
            <InputGuesser source={"givenName"} addLabel={true}/>
            <InputGuesser source={"familyName"} addLabel={true}/>
        </EditGuesser>
    )
};
