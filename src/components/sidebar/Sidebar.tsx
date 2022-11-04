import React, {useMemo} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import {Icon} from "@mui/material";
import {StyledBox} from "./styled";

const tabs = [
    {id: 1, label: 'Blogs', icon: <ListIcon/>},
    {id: 2, label: 'Posts', icon: <GridViewIcon/>},
]

export const Sidebar = () => {

    const generatedTabs = useMemo(() => {
        return tabs.map(({label, id, icon}) => (
            <Tab key={id} label={label} icon={icon} iconPosition={'start'}></Tab>
        ))
    }, [tabs]);

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <StyledBox>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                indicatorColor={"secondary"}
                textColor={'secondary'}
            >
                {generatedTabs}
            </Tabs>
        </StyledBox>
    );
};

