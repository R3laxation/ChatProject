import React, {useMemo} from 'react';
import {BlogsTitle} from "./postsBlogsTitle/BlogsTitle";
import {Search} from "../../components/search/Search";
import {SelectComponent} from "../../components/select/Select";
import {
    StyledBlogBox,
    StyledBlogContent,
    StyledBlogContentBox,
    StyledBlogTitle,
    StyledFilterBox, StyledLink,
    StyledPostBlogsContainer,
    StyledShowMoreBlock, StyledShowMoreButton
} from "./styled";
import circle from '../../assets/images/Circle.png';
import {Link} from "react-router-dom";

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


export const Blogs = () => {

    const generatedPosts = useMemo(() => {
        return blogs.map(({id, blogCover, title, description}) => (
            <StyledBlogBox key={id}>
                <img src={blogCover} alt="block-cover"/>
                <StyledBlogContentBox>
                    <StyledBlogTitle>{title}</StyledBlogTitle>
                    <StyledLink to={`/blog/${id}`}>
                        <StyledBlogContent>{description}</StyledBlogContent>
                    </StyledLink>
                </StyledBlogContentBox>
            </StyledBlogBox>
        ))
    }, [blogs]);

    return (
        <StyledPostBlogsContainer>
            <BlogsTitle/>
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

