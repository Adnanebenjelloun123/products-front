import * as React from "react";
import {ListGuesser, ShowGuesser, FieldGuesser, CreateGuesser, InputGuesser, EditGuesser} from "@api-platform/admin";
import {
    ReferenceInput,
    List,
    TextField,
    ShowButton,
    SelectInput,
    Datagrid,
    EmailField,
    Show,
    SimpleShowLayout,
    ReferenceArrayField, ReferenceField, DateInput, TextInput,
    ReferenceArrayInput,
    SelectArrayInput
} from 'react-admin';
import {useState} from "react";
import BookIcon from '@material-ui/icons/Book';

export const SocietyIcon = BookIcon;

const filters = [
    <DateInput source="from" label="From date" alwaysOn />,
    <DateInput source="to" label="To date" />,

];

export const SocietyList = (props) => (
    <List {...props} filters={filters}>
        <Datagrid>
            <TextField source={"created_At"} addLabel={true}/>
            <TextField source={"title"} addLabel={true}/>
            <ShowButton basePath="/categories"/>
        </Datagrid>
    </List>
);

export const SocietyTitle = ({record}) => {
    return <span>Society {record ? `"${record.title}"` : ''}</span>;
};

export const SocietyShow = props => {
    console.log('props', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source={"@id"} addLabel={true}/>
                <TextField source={"created_At"} addLabel={true}/>
                <TextField source={"title"} addLabel={true}/>
            </SimpleShowLayout>
        </Show>
    )
};
export const SocietyCreate = props => {
    const [role, setRole] = useState('');
    return (
        <CreateGuesser {...props}>
            <InputGuesser source={"title"} addLabel={true}/>
            <ReferenceInput label="categories" source="categories" reference="categories">
            <SelectArrayInput optionText="title"/>
            </ReferenceInput>
        </CreateGuesser>
    )
};