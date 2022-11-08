import styled from "@emotion/styled";
import {Box, Typography} from "@mui/material";

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