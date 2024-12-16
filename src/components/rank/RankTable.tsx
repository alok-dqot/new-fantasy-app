
import { Grid, Button, Tabs, Tab, TableContainer, Paper, Table, TableHead, TableRow, TableBody } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { StyledTableCell, StyledTableRow } from '@/pages/series/[seriesId]/[seriesName]/squads';
import useMensRankStore from '@/features/rank/ranking.service';


const HomeRankTable = React.memo((props: any) => {

    const [role, setRole] = useState(0);

    const store = useMensRankStore()

    const [tabValue, setTabValue] = useState({
        format: 'odi',
        gender: 'M',
        role: '/teams/rank',
        type: '',
    });


    const handleUpdateTabs = (name: string, value: string) => {

        setTabValue(prevState => ({
            ...prevState,
            [name]: value
        }));

    };

    const handleRoleValue = (event: React.SyntheticEvent, newValue: number) => {
        setRole(newValue);
        let roleString = 'teams';


        if (newValue === 0) {

            handleUpdateTabs('role', '/teams/rank')


        }
        else if (newValue == 1) {
            handleUpdateTabs('role', '/player/rank')
            handleUpdateTabs('type', 'batting')
        }
        else if (newValue == 2) {
            handleUpdateTabs('role', '/player/rank')
            handleUpdateTabs('type', 'bowling')
        }
        else if (newValue == 3) {
            handleUpdateTabs('role', '/player/rank')
            handleUpdateTabs('type', 'all rounder')
        }
        else {
            return
        }



    };

    useEffect(() => {
        store.get.paginate({ format: tabValue?.format, gender: tabValue?.gender, path: tabValue?.role, type: tabValue?.type })
    }, [tabValue]);




    return (
        <Grid item xs={12} md={3.7}>


            <div className='score-card-bowler-wrapper series-point-table home-ranking'>
                {/* <div className='pts-table-header'>
                    <div className='rank-role-title'>
                        <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 8.43V0H0V8.43C0 8.78 0.18 9.11 0.49 9.29L4.67 11.8L3.68 14.14L0.27 14.43L2.86 16.67L2.07 20L5 18.23L7.93 20L7.15 16.67L9.74 14.43L6.33 14.14L5.34 11.8L9.52 9.29C9.82 9.11 10 8.79 10 8.43ZM4 9.07L2 7.87V2H4V9.07ZM6 9.07L8 7.87V2H6V9.07Z" fill="#FF3131" />
                        </svg>
                        <h3>
                            Ranking </h3>
                    </div>
                    <div className='pts-team-form'>
                        <Link href='/rankings/men?gender=men' className='live-tab-item-outlined'>View All</Link>
                    </div>
                </div> */}



                <div className='score-card-bowler-table'>
                    {/* 
                    <div className='home-table-tab'>
                        <div className='player-btn-container'>
                            <Button
                                className={`ranking-tab ${tabValue.format === 'odi' ? ' selected' : '-'}`}
                                onClick={() => handleUpdateTabs('format', 'odi')}
                            >
                                Odi
                            </Button>
                            <Button
                                className={`ranking-tab  ${tabValue.format === 'test' ? 'selected' : '-'}`}
                                onClick={() => handleUpdateTabs('format', 'test')}
                            >
                                Test
                            </Button>
                            <Button
                                className={`ranking-tab  ${tabValue.format === 't20' ? 'selected' : '-'}`}
                                onClick={() => handleUpdateTabs('format', 't20')}
                            >
                                T20
                            </Button>
                        </div>
                    </div> */}
                    <Tabs
                        value={role}
                        onChange={handleRoleValue}
                        variant="scrollable"
                        scrollButtons={false}
                        className='rank-table'
                        aria-label="scrollable prevent tabs example"
                        TabIndicatorProps={{ children: <span className="rank-team-indicator MuiTabs-indicatorSpan" style={{ backgroundColor: 'black !important' }} /> }}
                    >
                        <Tab label="Teams" className='role-rank-btn' />
                        <Tab label="Batting" className='role-rank-btn' />
                        <Tab label="Bowling" className='role-rank-btn' />
                        <Tab label="ALR" className='role-rank-btn' />
                    </Tabs>
                    <div>
                        <TableContainer
                            component={Paper}
                            className=' score-card-table'>
                            <Table aria-label='customized table'>
                                <TableHead className='innings-table-head score-card-table-head'>
                                    <TableRow className='home-ranking-row scrt-row'>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align='left'>{role == 0 ? "Team" : "Player"}</StyledTableCell>

                                        {/* <StyledTableCell align='right'></StyledTableCell> */}
                                        <StyledTableCell align='right'></StyledTableCell>
                                        {/* <StyledTableCell align='right'></StyledTableCell> */}
                                        {/* <StyledTableCell align="right">NRR</StyledTableCell> */}
                                        <StyledTableCell align='center'>Rating</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody className='innings-table-body scorecard-table-body'>






                                    {store?.player?.list?.length > 0 && store?.player?.list?.slice(0, 5)?.map((row: any, index: number) => (
                                        <React.Fragment key={row.name}>
                                            <StyledTableRow className='score-card-table-row  home-ranking-body'>

                                                <StyledTableCell
                                                    component='th'
                                                    scope='row'
                                                    align='center'
                                                    className=''>
                                                    {index + 1}
                                                </StyledTableCell>
                                                <StyledTableCell
                                                    component='th'
                                                    scope='row'
                                                    className=''>
                                                    {row?.name}
                                                </StyledTableCell>
                                                <StyledTableCell align='right'></StyledTableCell>
                                                {/* <StyledTableCell align='right'></StyledTableCell> */}

                                                <StyledTableCell
                                                    component='th'
                                                    scope='row'
                                                    align='center'
                                                    className=''>
                                                    {row?.points}
                                                </StyledTableCell>
                                            </StyledTableRow>
                                        </React.Fragment>
                                    ))}


                                </TableBody>

                            </Table>
                            {/* <h4>Last Updated On 24 Apr 2024, 21:30 IST</h4> */}
                        </TableContainer>

                    </div>
                    {/* <OverviewTable /> */}
                </div>
            </div>
        </Grid>
    );
});


export default HomeRankTable