import * as React from "react";
import { useHistory } from 'react-router-dom';

const Support = () => {
    const history = useHistory();
    history.push("/support_tickets/create");
    return <></>;
}

export default Support;