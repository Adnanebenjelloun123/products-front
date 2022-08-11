import {fetchHydra as baseFetchHydra, hydraDataProvider as baseHydraDataProvider, useIntrospection} from "@api-platform/admin";
import {Redirect, Route} from "react-router-dom";
import parseHydraDocumentation from "@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation";
import React from "react";

const entrypoint = process.env.REACT_APP_API_URI;
console.log('entrypoint', entrypoint);

const getHeaders = () => localStorage.getItem("token") ? {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
} : {};

const fetchHydra = (url, options = {}) =>
    baseFetchHydra(url, {
        ...options,
        headers: getHeaders,
    });

const RedirectToLogin = () => {
    const introspect = useIntrospection();
   
    if (localStorage.getItem("token")) {
        introspect();
        return <></>;
    }
    return <Redirect to ="/login" />;
};

const apiDocumentationParser = async (entrypoint) => {
    console.log('getHeaders', getHeaders());
    try {
        const { api } = await parseHydraDocumentation(entrypoint, { headers: getHeaders() });
        return { api };
    } catch (result) {
        if (result.status === 401) {
            // Prevent infinite loop if the token is expired
            localStorage.removeItem("username");
            localStorage.removeItem("token");
            
           
            return {
                api: result.api,
                customRoutes: [
                    <Route path="/" component={RedirectToLogin} />
                ],
            };
        }

        throw result;
    }
};

const dataProvider = baseHydraDataProvider(
    entrypoint,
    fetchHydra,
    apiDocumentationParser,
    true
);

export {dataProvider, apiDocumentationParser, parseHydraDocumentation, entrypoint};
