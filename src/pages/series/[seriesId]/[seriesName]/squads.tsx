import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { SeriesCard } from "./overview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import { SeriesTabs } from "@/components/series/tabs";
import useSquadStore from "@/features/series/squad.service";
import { Paper, styled, tableCellClasses } from "@mui/material";
import { AdsBanner } from "@/components/ads/Ads";


const Squad = () => {


    const route = useRouter()
    const store = useSquadStore()

    const { seriesId } = route.query

    useEffect(() => {
        if (!route.isReady) return
        store.get.paginate({ series_id: seriesId + '' })
        setSelectedTeam(store.squad.list[0]?.id)
        handleSelectedTeam(store.squad.list[0]?.id)
    }, [route.isReady, seriesId])


    const [selecteTeam, setSelectedTeam] = useState(null)

    function handleSelectedTeam(teamId: number) {
        if (!teamId) return
        store.get_player(seriesId as any, selecteTeam as any)
        setSelectedTeam(teamId as any)


    }


    return (
        <div>

            <HomeWrapper>
                <Container sx={{ mb: 10 }}>

                    <div className="row">

                        <SeriesCard />

                        <SeriesTabs
                            selectIndex={2} />

                        <div className="col-md-8 mt-4">

                            {
                                store.squad.list?.length > 0 && store.squad.list?.map((sq: any) => {
                                    return (
                                        <>


                                            <div className='match-score-wrapper mt-3'>
                                                <Teams
                                                    squad={sq}
                                                />
                                            </div>


                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className="col-md-4 mt-5">
                            <AdsBanner />
                        </div>

                    </div>


                </Container>




            </HomeWrapper>

        </div>
    )
}

export default Squad





const Teams = (props: any) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='scr-accr-outer'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className='scr-panel-header cd'
                >
                    <Typography >
                        {props?.squad?.name}
                    </Typography>
                    <Typography ></Typography>
                </AccordionSummary>
                <AccordionDetails className='scr-card-cnt'>


                    <div className='batting-score-card-wrapper'>


                        <InningsTable

                            value={props?.squad?.players}
                        />

                    </div>

                </AccordionDetails>
            </Accordion>


        </div>
    );
}







const InningsTable = (data: any) => {

    return (

        <TableContainer className='innings-table '>
            <Table aria-label="customized table">
                <TableHead className='innings-table-head'>
                    <TableRow className='innings-table-row'>
                        <StyledTableCell>Player</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                        <StyledTableCell align='left'></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right"></StyledTableCell>
                        <StyledTableCell align="right">Role</StyledTableCell>
                        <StyledTableCell align="right">Credit</StyledTableCell>
                        {/* <StyledTableCell align="right">SR</StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody className='innings-table-body scorecard-table-body'>
                    {/* {data?.value.lenght > 0 ? */}
                    {data?.value?.map((row: any) => (
                        <React.Fragment key={row.name}>
                            <ScoreCardRow
                                id={row.player_id}
                                name={row.name}
                                role={row.role}
                                credit={row.credit}

                            />

                        </React.Fragment>

                    ))}




                </TableBody>
            </Table>
        </TableContainer >

    );
};



const ScoreCardRow = (data: any) => {

    const route = useRouter()


    const [isCommentry, setCommentry] = useState(false);
    return (
        <>
            <StyledTableRow
                key={data.name}


                className='score-card-table-row'
            >
                <StyledTableCell component="th" scope="row"
                >
                    {data.name}

                </StyledTableCell>

                <StyledTableCell align="left"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">{data.role}</StyledTableCell>
                <StyledTableCell align="right">{data.credit}</StyledTableCell>
            </StyledTableRow>


        </>
    )
}

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        fontFamily: 'Montserrat',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '13px',
        lineHeight: '16px',


    },
    [`&.${tableCellClasses.body}`]: {

        fontWeight: 600,

    },
}));


export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
