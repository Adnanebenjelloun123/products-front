import * as React from "react";
import {ListGuesser, ShowGuesser, FieldGuesser, InputGuesser, CreateGuesser, EditGuesser} from "@api-platform/admin";
import {TextInput} from "react-admin";

const filters = [
    <TextInput source="name" label="Name" alwaysOn />,
];

export const CityList = props => (
    <ListGuesser {...props} filters={filters}>
        <FieldGuesser source={"name"} />
    </ListGuesser>
);

export const CityShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source={"name"} addLabel={true} />
    </ShowGuesser>
);

export const CityCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source={"name"} addLabel={true} />
    </CreateGuesser>
);

export const CityEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source={"name"} addLabel={true} />
    </EditGuesser>
);