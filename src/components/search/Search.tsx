import React from 'react';
import {TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    return (
        <TextField InputProps={{
            startAdornment:
                <SearchIcon
                    style={{cursor: 'pointer'}}
                />
        }}>
        </TextField>
    );
};

