import React from 'react';
import HeaderComponent from "../components/HeaderComponent";
import {Outlet} from "react-router-dom";

function MainLayout() {
    return (
        <>
            <HeaderComponent/>
            <Outlet/>
        </>
    );
};

export default MainLayout;