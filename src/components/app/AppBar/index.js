import * as React from 'react';
import {AppBar as BaseAppBar} from 'react-admin';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {useThemeState} from "../../../services/theme";
import {Switch} from '@material-ui/core';
import logo from "../../../assets/logo.png";

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
});

const AppBar = props => {
    const classes = useStyles();
    const {setTheme, theme} = useThemeState();

    return (
        <BaseAppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            >
                <img src={logo} style={{width: 82}} alt={"Ashnoo"}/>&nbsp;
            </Typography>
            <span className={classes.spacer}/>
            {/*<Switch
                source="Theme"
                icon={<Brightness7Icon/>}
                checkedIcon={<Brightness4Icon/>}
                onChange={() => {
                    console.log('theme changed', theme);
                    setTheme(theme === 'light' ? 'dark' : 'light')
                }}
            />*/}
        </BaseAppBar>
    );
};

export default AppBar;
