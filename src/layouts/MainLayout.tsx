import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from "../components/header/Header";
import {Sidebar} from "../components/sidebar/Sidebar";
import { StyledBox } from './styled';

export const MainLayout = () => {
    return (
        <>
            <Header/>

            <StyledBox>
                <Sidebar/>
                <Outlet/>
            </StyledBox>

        </>
    );
};

