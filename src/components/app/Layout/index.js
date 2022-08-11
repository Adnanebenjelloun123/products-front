import React from "react";
import { Layout as BaseLayout } from 'react-admin';
import AppBar from "../AppBar";

export const Layout = (props) => <BaseLayout {...props} appBar={AppBar} />;