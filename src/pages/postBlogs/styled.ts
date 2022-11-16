import styled from "@emotion/styled";
import {Box, Button, Typography} from "@mui/material";
import { Link } from "react-router-dom";

export const StyledFilterBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`
export const StyledBlogBox = styled(Box)`
  display: flex;
  padding-top: 12px;
  padding-bottom: 11px;
  border-bottom: 1px solid #DEDBDC;
`

export const StyledBlogContentBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 40px;
  margin-left: 12px;
  text-decoration: none;
`

export const StyledBlogTitle = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`
export const StyledBlogContent = styled(Box)`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`
export const StyledPostBlogsContainer = styled(Box)`
  margin-left: 24px;
  padding-top: 29px;
  width: 50%;
`
export const StyledTitleTypography = styled(Typography)`
  padding-bottom: 7px;
  border-bottom: 1px solid #DEDBDC;
  margin-bottom: 23px;
`

export const StyledShowMoreBlock = styled(Box)`
  margin-top: 48px;
  margin-bottom: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledShowMoreButton = styled(Button)`
  gap: 10px;
  width: 153px;
  height: 36px;
  text-transform: capitalize;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #1A1718;
`