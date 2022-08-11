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

export const CategoryIcon = BookIcon;

const filters = [
    <DateInput source="from" label="From date" alwaysOn />,
    <DateInput source="to" label="To date" />,

];

export const CategoryList = (props) => (
    <List {...props} filters={filters}>
        <Datagrid>
            <TextField source={"title"} addLabel={true}/>
            <ShowButton basePath="/categories"/>
        </Datagrid>
    </List>
);

export const CategoryTitle = ({record}) => {
    return <span>Category {record ? `"${record.title}"` : ''}</span>;
};

export const CategoryShow = props => {
    console.log('props', props);
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source={"@id"} addLabel={true}/>
                <TextField source={"title"} addLabel={true}/>
            </SimpleShowLayout>
        </Show>
    )
};
export const CategoryCreate = props => {
    const [role, setRole] = useState('');
    return (
        <CreateGuesser {...props}>
            <InputGuesser source={"title"} addLabel={true}/>
            <ReferenceInput label="societies" source="societies" reference="societies">
            <SelectArrayInput optionText="title"/>
            </ReferenceInput>

        </CreateGuesser>
    )
};