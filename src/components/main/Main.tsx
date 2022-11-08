import React from 'react';
import {Sidebar} from "../sidebar/Sidebar";
import {PostsBlogs} from "../postBlogs/PostBlogs";
import {StyledBox} from "./styled";

export const Main = () => {
    return (
        <StyledBox>
            <Sidebar/>
            <PostsBlogs/>
        </StyledBox>
    );
};

