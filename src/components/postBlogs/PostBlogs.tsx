import React, {useMemo} from 'react';
import {PostBlogsTitle} from "./postsBlogsTitle/PostBlogsTitle";
import {Search} from "../search/Search";
import {SelectComponent} from "../select/Select";
import {
    StyledBlogBox,
    StyledBlogContent,
    StyledBlogContentBox,
    StyledBlogTitle,
    StyledFilterBox,
    StyledPostBlogsContainer,
    StyledShowMoreBlock, StyledShowMoreButton
} from "./styled";
import circle from '../../assets/images/Circle.png';

const blogs = [
    {
        id: 1,
        title: 'The best blog in our village',
        blogCover: circle,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        id: 2,
        title: 'The best blog in our village',
        blogCover: circle,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        id: 3,
        title: 'Warriors',
        blogCover: circle,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        id: 4,
        title: 'Audience Platform',
        blogCover: circle,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        id: 5,
        blogCover: circle,
        title: 'Audience Platform',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        id: 6,
        blogCover: circle,
        title: 'Audience Platform',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
];


export const PostsBlogs = () => {

    const generatedPosts = useMemo(() => {
        return blogs.map(({id, blogCover, title, description}) => (
            <StyledBlogBox key={id}>
                <img src={blogCover} alt="block-cover"/>
                <StyledBlogContentBox>
                    <StyledBlogTitle>{title}</StyledBlogTitle>
                    <StyledBlogContent>{description}</StyledBlogContent>
                </StyledBlogContentBox>
            </StyledBlogBox>
        ))
    }, [blogs]);

    return (
        <StyledPostBlogsContainer>
            <PostBlogsTitle/>
            <StyledFilterBox>
                <Search/>
                <SelectComponent/>
            </StyledFilterBox>
            {generatedPosts}
            <StyledShowMoreBlock>
                <StyledShowMoreButton variant="outlined" color={"inherit"}>Show more</StyledShowMoreButton>
            </StyledShowMoreBlock>
        </StyledPostBlogsContainer>
    );
};

