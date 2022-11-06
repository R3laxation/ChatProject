import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {StyledTextField} from "./styled";

export const Search = () => {
    return (
        <StyledTextField InputProps={{
            startAdornment:
                <SearchIcon
                    style={{cursor: 'pointer'}}
                />
        }}>
        </StyledTextField>
    );
};

