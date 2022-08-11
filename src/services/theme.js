import React, {useContext} from "react";
import merge from 'lodash/merge';
import {defaultTheme} from 'react-admin';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const StateContext = React.createContext({
    theme: 'light',
    setTheme: (value) => {
        console.log('theme', value);
    }
});

export const ThemeStateProvider = (props: { children: React.ReactNode }) => {

    const [theme, setTheme] = React.useState('light');

    return (

        <StateContext.Provider value={{
            theme,
            setTheme
        }}>
            {props.children}
        </StateContext.Provider>
    );
};

export const useThemeState = () => useContext(StateContext);

const colors = {
    primary: '#2196f3',
    secondary: '#616161',
    black: '#0E0E10',
    white: '#FFF',
};

export const darkTheme = {
    palette: {
        type: 'dark'
    },
    overrides: {
        MuiAppBar: {
            colorSecondary: {
                backgroundColor: '#424242', //'#1e4c9a',
                color: colors.white
            },
        },
        MuiButton: {
            textPrimary: {
                color: colors.white,
            }
        },
        MuiTypography: {
            colorPrimary: {
                color: colors.white
            }
        },
        MuiDrawer: {
            paper: {
                //paddingTop: '20px'
            }
        },
        MuiFilledInput: {
            underline: {
                '&:after': {
                    borderBottomColor: '#bf9f00'
                }
            }
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: '#bf9f00'
                }
            }
        },
    }
}

export const lightTheme = merge({}, defaultTheme, {
    palette: {
        primary: blue,
        secondary: green,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ['"Jost*"', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
    overrides: {
        MuiAppBar: {
            colorSecondary: {
                backgroundColor: colors.black, //'#1e4c9a',
                color: colors.white
            },
        },
        MuiDrawer: {
            root: {
                backgroundColor: colors.black, //'#1e4c9a',
            },
            paper: {
                color: colors.white
            }
        },
        RaMenuItemLink: {
            root: {
                color: colors.white,
            },
            active: {
                color: colors.primary
            },
        },
        MuiListItemIcon: {
            root: {
                color: colors.white,
            },
        },
        RaSidebar: {
            root: {
                height: 'auto'
            }
        }
    },
});