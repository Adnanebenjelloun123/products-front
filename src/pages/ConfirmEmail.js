import React, {useEffect, Fragment} from "react";
import {useDataProvider} from "react-admin";
import {useState} from "react";
import {
    useLocation
} from "react-router-dom";
import Button from '@material-ui/core/Button'
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import {entrypoint} from "../services/dataProvider";
import {
    Box,
    Container,
    CssBaseline,
    Link,
    TextField
} from "@material-ui/core";
import {darkTheme, lightTheme, useThemeState} from "../services/theme";
import {ThemeProvider} from "@mui/material";
import * as yup from 'yup';
import {useHistory} from 'react-router-dom';

const Copyright = props => (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
            Ashnoo
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
);

const ConfirmEmail = () => {
    const dataProvider = useDataProvider();

    const {search} = useLocation();
    const history = useHistory();

    const localToken = localStorage.getItem('token');

    if (localToken) {
        history.push("/");
    }

    const [emailConfirmation, setEmailConfirmation] = useState(null);

    const [isFormValid, setFormValid] = useState(null);

    const [data, setData] = useState({
        token: null,
        password: null,
        passwordRepeated: null,
    });

    let schema = yup.object({
        password: yup.string().min(6).required('Password is required'),
        passwordRepeated: yup.string().min(6)
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        token: yup.string().required('Please check the token in your url.')
    });

    useEffect(() => {
        const token = (new URLSearchParams(search)).get('token');
        getEmailConfirmation(token);

    }, [dataProvider, search]);

    const getEmailConfirmation = async (token) => {
        const {data} = await axios.get(`${entrypoint}/email_confirmations/${token}`);
        setEmailConfirmation(data);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = (new URLSearchParams(search)).get('token');
        const sentData = {...data, token: token}

        const isFormValid = await schema.isValid(sentData, {abortEarly: false});

        if (isFormValid) {
            setFormValid(true);
            try {
                const {data: user} = await axios.put(`${entrypoint}/password_resets/${token}`, sentData);
                // if successful redirect to login
                history.push("/login");
            } catch (e) {
            }
        } else {
            setFormValid(false);
        }
    }

    const handleChange = async ({currentTarget: input}) => {
        setData({...data, [input.name]: input.value});
    }

    const handleBlur = () => {

    }

    const {theme} = useThemeState();

    console.log('emailConfirmation', emailConfirmation);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <Container component="main" xs={{display: 'flex', height: '100%'}}>
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 20,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'https://source.unsplash.com/random/1600x900/daily'
                    }}
                >
                    {(emailConfirmation && emailConfirmation["email"]) ? (
                        <Fragment>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={false}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="passwordRepeated"
                                    label="Repeat password"
                                    type="password"
                                    value={data.passwordRepeated}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={false}
                                />

                                {(isFormValid !== null && !isFormValid) && (
                                    <div style={{marginTop: 10, marginBottom: 10}}>
                                        <Typography component="p" color={"error"} align={"center"}>
                                            Passwords must match!
                                        </Typography>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{mt: 3, mb: 2}}
                                    variant="contained"
                                    color={"primary"}
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <Typography component="h1" variant="h5">
                                User not found
                            </Typography>
                            <Typography component="p">
                                Please make sure you clicked the right link on the email you received from Ashnoo.
                            </Typography>
                        </Fragment>
                    )}

                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    )
}

export default ConfirmEmail;