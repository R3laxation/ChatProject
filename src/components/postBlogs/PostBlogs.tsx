import React from 'react';
import {PostBlogsTitle} from "./postsBlogsTitle/PostBlogsTitle";
import {Search} from "../search/Search";
import {SelectComponent} from "../select/Select";
import {StyledBox} from "./styled";
import {Box} from "@mui/material";

export const PostBlogs = () => {
    return (
        <Box style={{width: '60%'}}>
            <PostBlogsTitle/>
            <StyledBox >
                <Search/>
                <SelectComponent/>
            </StyledBox>
        </Box>
    );
};

