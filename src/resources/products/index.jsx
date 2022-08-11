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

export const ProductIcon = BookIcon;

const filters = [
    <DateInput source="from" label="From date" alwaysOn />,
    <DateInput source="to" label="To date" />,

];

export const ProductList = (props) => (
    <List {...props} filters={filters}>
        <Datagrid>
            <TextField source={"created_At"} addLabel={true}/>
            <TextField source={"title"} addLabel={true}/>
            <TextField source={"quantity"} addLabel={true}/>
            <ShowButton basePath="/products"/>
        </Datagrid>
    </List>
);

export const ProductTitle = ({record}) => {
    return <span>Product {record ? `"${record.title}"` : ''}</span>;
};

export const ProductShow = props => {
    console.log('props', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source={"@id"} addLabel={true}/>
                <TextField source={"created_At"} addLabel={true}/>
                <TextField source={"title"} addLabel={true}/>
                <TextField source={"quantity"} addLabel={true}/>
            </SimpleShowLayout>
        </Show>
    )
};
export const ProductCreate = props => {
    const [role, setRole] = useState('');
    return (
        <CreateGuesser {...props}>
            <InputGuesser source={"title"} addLabel={true}/>
            <InputGuesser source={"quantity"} addLabel={true}/>
            <InputGuesser source={"content"} addLabel={true}/>
            <ReferenceArrayInput source="categories" reference="categories">
                <SelectArrayInput optionText="title"/>
            </ReferenceArrayInput>
        </CreateGuesser>
    )
};