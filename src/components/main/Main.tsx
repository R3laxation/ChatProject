import React from 'react';
import {Sidebar} from "../sidebar/Sidebar";
import {PostBlogs} from "../postBlogs/PostBlogs";
import {StyledBox} from "./styled";

export const Main = () => {
    return (
        <StyledBox>
            <Sidebar/>
            <PostBlogs/>
        </StyledBox>
    );
};

