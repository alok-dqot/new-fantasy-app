import { Grid, Box, Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";


const SchTabs = ({ selected = 1 }: { selected?: number }) => {


    const route = useRouter();




    const handleUpdateTabs = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
        if (newValue == 0) {
            route.replace('/schedule/today/')
        }
        else if (newValue == 1) {
            route.replace('/schedule/result')
        }
        else {
            route.replace('/schedule/upcoming/all')
        }
    }, [route])

    const [tab, setTabs] = useState(selected)


    return (
        <>
            <div className="col-12 mt-4" style={{ maxWidth: '600px', margin: 'auto' }}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '5px', }}>
                    <Tabs value={tab} onChange={handleUpdateTabs} variant="scrollable" centered={true} >
                        <Tab label="Live" className='schedule-rank-btn' />
                        <Tab label={"Recent"} className='schedule-rank-btn' />
                        <Tab label="Upcoming" className='schedule-rank-btn' />
                    </Tabs>

                </Box>
            </div>
        </>
    )
}

export default SchTabs



export const SchMatchesTabs = ({ selected = 1 }: { selected?: number }) => {


    const route = useRouter();



    const handleUpdateTabs = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
        if (newValue == 0) {
            route.replace('/schedule-matches/international')
        }
        else if (newValue == 1) {
            route.replace('/schedule-matches/domestic')
        }
        else if (newValue == 2) {
            route.replace('/schedule-matches/t20league')
        }
        else if (newValue == 3) {
            route.replace('/schedule-matches/women')
        }
        else {
            route.replace('/schedule-matches/all')
        }
    }, [route])

    const [tab, setTabs] = useState(selected)


    return (
        <>
            <Grid item xs={12} md={12} sx={{ margin: 'auto' }}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '75px' }}>
                    <Tabs value={tab} onChange={handleUpdateTabs} className='home-tabs' variant="scrollable" >
                        <Tab label={"International"} className='schedule-rank-btn' />
                        <Tab label="Domestic & Others" className='schedule-rank-btn' />
                        <Tab label="T20 Leagues" className='schedule-rank-btn' />
                        <Tab label="Women" className='schedule-rank-btn' />
                        <Tab label="All Matches" className='schedule-rank-btn' />
                    </Tabs>

                </Box>
            </Grid>
        </>
    )
}




const CricketMatchesTabs = ({ selected = 0 }: { selected?: number }) => {
    const router = useRouter();
    const [tab, setTabs] = useState(selected);

    const handleUpdateTabs = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
        switch (newValue) {
            case 0:
                router.push('/live-schedule/today?type=all')
                break;
            case 1:
                router.push('/series?type=all');
                break;
            case 2:
                router.push('/schedule-matches/international');
                break;
            case 3:
                router.push('/teams?type=all');
                break;
            default:
                router.push('/series-archives/2033');
                break;
        }
    }, []);

    return (
        <Grid container sx={{ mt: 2 }}>
            <Grid item xs={12} md={12}>
                <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: '75px' }}>
                    <Tabs value={tab} onChange={handleUpdateTabs} className='home-tabs' variant="scrollable">
                        <Tab label="Current Matches" className='schedule-rank-btn' />
                        <Tab label="Current & Future Series" className='schedule-rank-btn' />
                        <Tab label="Matches By Day" className='schedule-rank-btn' />
                        <Tab label="Teams" className='schedule-rank-btn' />
                        <Tab label="Series Archive" className='schedule-rank-btn' />
                    </Tabs>
                </Box>
            </Grid>
        </Grid>
    );
};




export { CricketMatchesTabs }


export const FormatTabs = ({ isLeague = true, t20League = false }: { isLeague?: boolean, t20League?: boolean }) => {
    const router = useRouter();
    const { type } = router.query;

    const [tab, setTabs] = useState(0);

    // Effect to set initial tab based on the query parameter
    useEffect(() => {
        if (!router.isReady) return;

        switch (type) {
            case 'all':
                setTabs(0);
                break;
            case 'international':
                setTabs(1);
                break;
            case 'leagues':
                setTabs(2);
                break;
            case 'domestic':
                setTabs(3);
                break;
            case 'women':
                setTabs(4);
                break;
            default:
                setTabs(0);
                break;
        }
    }, [router.isReady, type]);


    // Memoized function to handle tab updates
    const handleUpdateTabs = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setTabs(newValue);
        switch (newValue) {
            case 0:
                router.replace('?type=all');
                break;
            case 1:
                router.replace('?type=international');
                break;
            case 2:
                router.replace('?type=leagues');
                break;
            case 3:
                router.replace('?type=domestic');
                break;
            default:
                router.replace('?type=women');
                break;
        }
    }, [router]);

    return (
        <Box sx={{ bgcolor: 'background.paper', borderRadius: '75px', my: 3 }}>

            <Tabs value={tab} onChange={handleUpdateTabs} className='home-tabs' variant="scrollable">
                <Tab label="All" className='schedule-rank-btn' />
                <Tab label="International" className='schedule-rank-btn' />
                <Tab label={t20League ? "T20 League" : "Leagues"} className='schedule-rank-btn' style={{ display: isLeague ? 'block' : 'none' }} />
                <Tab label="Domestic" className='schedule-rank-btn' />
                <Tab label="Women" className='schedule-rank-btn' />
            </Tabs>
        </Box>
    );
};
