import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function MatchDetailPageTab(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function DetailTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', mt: 3 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} variant="scrollable"
                    scrollButtons="auto" aria-label="basic tabs example">
                    <Tab label="Match Info" {...a11yProps(0)} />
                    <Tab label="Scorecard" {...a11yProps(1)} />
                    <Tab label="Fantasy" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <MatchDetailPageTab value={value} index={0}>
                This is for the Match Info
            </MatchDetailPageTab>
            <MatchDetailPageTab value={value} index={1}>
                This is For the Scorecard
            </MatchDetailPageTab>
            <MatchDetailPageTab value={value} index={2}>
                This is For The Fantasy
            </MatchDetailPageTab>
        </Box>
    );
}