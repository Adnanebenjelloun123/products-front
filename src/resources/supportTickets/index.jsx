import React from "react";
import {
    List,
    Show,
    SimpleShowLayout,
    EmailField,
    Datagrid,
    TextField,
    ShowButton,
    RichTextField,
    TextInput
} from "react-admin";
import {CreateGuesser, InputGuesser} from "@api-platform/admin";
import RichTextInput from 'ra-input-rich-text';

const filters = [
    <TextInput source="email" label="Email" alwaysOn />,
    <TextInput source="subject" label="Subject" />,
];

export const SupportTicketList = props => (
    <List {...props} filters={filters}>
        <Datagrid>
            <EmailField source={"email"}/>
            <TextField source={"subject"}/>
            <ShowButton/>
        </Datagrid>
    </List>
);

export const SupportTicketShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <EmailField source={"email"} addLabel={true}/>
            <TextField source={"subject"} addLabel={true}/>
            <RichTextField source={"message"} addLabel={true}/>
        </SimpleShowLayout>
    </Show>
);

export const SupportTicketCreate = props => (
    <CreateGuesser {...props} redirect={"/"}>
        <InputGuesser source={"subject"} />
        <RichTextInput source={"message"} toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} />
    </CreateGuesser>
);
