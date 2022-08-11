import * as React from "react";
import {
    List,
    Show,
    SimpleShowLayout,
    TextField,
    Datagrid, ShowButton, DateInput
} from 'react-admin';
import ConversationMessagesField from "../../components/fields/ConversationMessagesField";

const filters = [
    <DateInput source="from" label="From date" alwaysOn />,
    <DateInput source="to" label="To date" />,
];

export const ConversationList = props => {
    console.log('props', props);
    return (
        <List {...props} filters={filters}>
            <Datagrid>
                <TextField source={"createdAt"} />
                <TextField source={"botName"} />
                <TextField source={"platform"} />
                <TextField source={"userId"} />
                <ShowButton/>
            </Datagrid>
        </List>
    );
}

export const ConversationShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source={"botName"} addLabel={true}/>
            <TextField source={"platform"} addLabel={true}/>
            <TextField source={"userId"} addLabel={true}/>
            <TextField source={"userName"} addLabel={true}/>
            <TextField source={"createdAt"} addLabel={true}/>
            {/*<ArrayField source={"messages"}>
                <Datagrid>
                    <TextField source={"message"}/>
                    <ArrayField source={"options"}>
                        <Datagrid>
                            <TextField source={"key"}/>
                            <TextField source={"value"}/>
                        </Datagrid>
                    </ArrayField>
                </Datagrid>
            </ArrayField>*/}
            <ConversationMessagesField source={"messages"} />

        </SimpleShowLayout>
    </Show>
);