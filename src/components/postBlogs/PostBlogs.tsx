import React from 'react';
import {PostBlogsTitle} from "./postsBlogsTitle/PostBlogsTitle";
import {Search} from "../search/Search";
import {SelectComponent} from "../select/Select";

export const PostBlogs = () => {
    return (
        <div style={{width: '60%'}}>
            <PostBlogsTitle/>
            <Search/>
            <SelectComponent/>
        </div>
    );
};

