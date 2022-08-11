import React from "react";
import {HydraAdmin, ResourceGuesser} from "@api-platform/admin";
import {Resource} from "react-admin";
import {ProductList, ProductShow, ProductCreate} from "./resources/products";
import {SupportTicketList, SupportTicketShow, SupportTicketCreate} from "./resources/supportTickets";
import {CategoryCreate, CategoryList, CategoryShow} from "./resources/categories";
import {SocietyCreate, SocietyList, SocietyShow} from "./resources/societies";
import Dashboard from "./resources/Dashboard";
import authProvider from "./services/authProvider";
import isGranted from "./services/security";
import {apiDocumentationParser, dataProvider, entrypoint} from "./services/dataProvider";
import {UserCreate, UserEdit, UserList, UserShow} from "./resources/users";
import {CityCreate, CityEdit, CityList, CityShow} from "./resources/cities";
import {darkTheme, lightTheme, useThemeState} from "./services/theme";
import {Layout} from "./components/app/Layout";
import customRoutes from "./services/customRoutes";
import TreeMenu from '@bb-tech/ra-treemenu';
import SettingsIcon from '@material-ui/icons/Settings';
import BarChartIcon from "@material-ui/icons/BarChart";
import GroupIcon from "@material-ui/icons/Group";
import RoomIcon from "@material-ui/icons/Room";
import HeadsetIcon from "@material-ui/icons/Headset";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";
import ForumIcon from "@material-ui/icons/Forum";
import AssessmentIcon from '@material-ui/icons/Assessment';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import decodeJwt from 'jwt-decode';


const App = () => {
    const {theme} = useThemeState();
    console.log('current theme', theme);
    const useremail = localStorage.getItem("username"); 
    var dashboard;
    dashboard = Dashboard;
    return (
            <HydraAdmin
                theme={theme === 'light' ? lightTheme : darkTheme}
                layout={Layout}
                apiDocumentationParser={apiDocumentationParser}
                dataProvider={dataProvider}
                authProvider={authProvider}
                entrypoint={entrypoint}
                dashboard={dashboard}
                customRoutes={customRoutes}
                menu={TreeMenu}
                title={"E-com Api"}
            >
    
    
            {permissions => [
                <ResourceGuesser
                    name={"products"}
                    icon={BarChartIcon}
                    list={ProductList}
                    show={ProductShow}
                    create={ProductCreate}
                    options={{"label": "Products"}}
                />,
                
                <ResourceGuesser
                    name={"societies"}
                    icon={BarChartIcon}
                    list={SocietyList}
                    show={SocietyShow}
                    create={SocietyCreate}
                    options={{"label": "Societies"}}
                />,
                <ResourceGuesser
                    name={"categories"}
                    icon={BarChartIcon}
                    list={CategoryList}
                    show={CategoryShow}
                    create={CategoryCreate}
                    options={{"label": "Categories"}}
                />,
                <ResourceGuesser
                    icon={PriorityHighIcon}
                    name={!isGranted('ROLE_ADMIN', permissions) ? "support" : null}
                    options={!isGranted('ROLE_ADMIN', permissions) ? {"label": "Support"} : null}
                />,
                
                // <ResourceGuesser
                //     name={"support_tickets"}
                //     icon={PriorityHighIcon}
                //     list={isGranted('ROLE_ADMIN', permissions) ? SupportTicketList : false}
                //     show={isGranted('ROLE_ADMIN', permissions) ? SupportTicketShow : false}
                //     create={isGranted('ROLE_USER', permissions) ? SupportTicketCreate : false}
                //     options={{"label": "Support"}}
                // />,
                <ResourceGuesser
                    name={"cities"}
                    icon={RoomIcon}
                    list={isGranted('ROLE_ADMIN', permissions) ? CityList : false}
                    show={isGranted('ROLE_ADMIN', permissions) ? CityShow : false}
                    edit={isGranted('ROLE_ADMIN', permissions) ? CityEdit : false}
                    create={isGranted('ROLE_ADMIN', permissions) ? CityCreate : false}
                    options={{"label": "Cities", "menuParent": "settings"}}
                />,
                <ResourceGuesser
                    name={"users"}
                    icon={GroupIcon}
                    list={isGranted('ROLE_ADMIN', permissions) ? UserList : false}
                    show={isGranted('ROLE_ADMIN', permissions) ? UserShow : false}
                    edit={isGranted('ROLE_ADMIN', permissions) ? UserEdit : false}
                    create={isGranted('ROLE_ADMIN', permissions) ? UserCreate : false}
                    options={{"label": "Users", "menuParent": "settings"}}
                />,
                <Resource name={"email_confirmations"}/>,
                <Resource name={"password_resets"}/>,
                <ResourceGuesser
                    name={isGranted('ROLE_ADMIN', permissions) ? "settings" : null}
                    icon={SettingsIcon}
                    options={isGranted('ROLE_ADMIN', permissions) ? {"label": "Settings", "isMenuParent": true}: null}
                />,
            ]}
        </HydraAdmin>
    )
        }
   
export default App
