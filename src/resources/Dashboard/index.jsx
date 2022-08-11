import * as React from "react";
import ReactECharts from "echarts-for-react";
import {Loading, Title, useQuery} from 'react-admin';
import {Card, CardContent, CardHeader, Grid} from "@material-ui/core";
import {TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Loader from "react-loader-spinner";

const Dashboard = () => {
    const [from, setFrom] = React.useState(null);
    const [to, setTo] = React.useState(null);

    const getOptions = (labels, values) => {
        return {
            xAxis: {
                type: 'category',
                data: labels
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: values,
                    type: 'line'
                }
            ]
        };
    }
    const formatDate = (date) => {
        return `${date.getFullYear()}-${(`0${date.getMonth() + 1}`).slice(-2)}-${(`0${date.getDate()}`).slice(-2)}`;
    }

    const filter = {unit: "day"};

    if (from) {
        filter.from = formatDate(from);
    }

    if (to) {
        filter.to = formatDate(to);
    }

    


    return (
        <div>
            <Card>
                <Title title="Dashboard" />
            </Card>
            <div style={{marginTop: 15}}>
                <Grid container spacing={2} justifyContent={"flex-end"}>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="From"
                                maxDate={(new Date())}
                                value={from}
                                onChange={setFrom}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="To"
                                maxDate={(new Date())}
                                value={to}
                                onChange={setTo}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </div>

        </div>
    );
}

export default Dashboard;