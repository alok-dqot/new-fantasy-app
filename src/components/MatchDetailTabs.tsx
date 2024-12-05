import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from 'next/link';

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
            {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
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
            <MatchDetailPageTab value={value} index={0} >
                <MatchInfo />
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















const MatchInfo = () => {
    return (
        <>
            <div className="match-info">
                <div className="section-1">
                    <div className="mtch-info-txt-outer ">
                        <h3>Tournament
                            <div className="hr-txt"></div>
                        </h3>

                        <Link href={'#'}>
                            <div className="link-outer bgp">
                                <LaunchIcon />
                            </div>
                        </Link>

                    </div>
                    <p>India tour of Australia, 2024/25</p>
                </div>








                <div className="section-2 row mt-4">
                    <div className="mtch-info-txt-outer ">
                        <h3>Match Details
                            <div className="hr-txt"></div>
                        </h3>

                    </div>

                    <div className="txt-cont_ col-md-6">
                        <div className="in-line">
                            <span>Date & Time :</span>
                            <span>
                                6th Dec 2024, 9:30 AM</span>
                        </div>
                        <div className="in-line">
                            <span>Match Number</span>
                            <span>2nd Test</span>
                        </div>
                        <div className="in-line">
                            <span>Toss result :</span>
                            <span>-</span>
                        </div>
                    </div>
                </div>



                <div className="section-2">
                    <div className="mtch-info-txt-outer ">
                        <h3>Venue Details
                            <div className="hr-txt"></div>
                        </h3>

                        <Link href={'#'}>
                            <div className="link-outer bgp">
                                <LaunchIcon />
                            </div>
                        </Link>

                    </div>
                    <p>India tour of Australia, 2024/25</p>
                </div>


            </div>

        </>
    )
}









const Scorecard = () => {
    return (
        <>

        </>
    )
}


