import decodeJwt from 'jwt-decode';
import {publicRoutes} from './customRoutes';
import history from "./history.js";

const isPublicRoute = (pathname) => Object.values(publicRoutes).some(route => pathname.startsWith(route));

const authProvider = {
    login: ({username, password}) => {
        const request = new Request(`${process.env.REACT_APP_API_URI}/login_check`, {
            method: 'POST',
            body: JSON.stringify({username: username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                localStorage.removeItem('username');
                localStorage.removeItem('token');
                localStorage.removeItem('permissions');
                return response.json();
            })
            .then(({token}) => {
               
                const decodedToken = decodeJwt(token);
               
                localStorage.removeItem('username');
                localStorage.removeItem('token');
                localStorage.removeItem('permissions');
                localStorage.setItem('username', username);
                localStorage.setItem('token', token);
                localStorage.setItem('permissions', decodedToken.roles);
            });
    },
    logout: () => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('permissions');
        return Promise.resolve();
    },
    checkAuth: params => {
        return localStorage.getItem('token')
            ? Promise.resolve()
            : Promise.reject();
    },
    checkError: (error) => {
        const status = error.response ? error.response.status : null;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('permissions');
            return Promise.reject(error);
        }
        return Promise.resolve();
    },
    getPermissions: () => {
        let currentPath = history.location.hash.substring(1);
      
        if (isPublicRoute(currentPath)) {
            return Promise.resolve();
        } else {
            const role = localStorage.getItem('permissions');
            return role ? Promise.resolve(role) : Promise.reject();
        }
    }
};

export default authProvider;