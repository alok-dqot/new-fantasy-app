import Container from "@mui/material/Container";
import { Grid, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { SeriesCard } from "./overview";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Nodata from "@/components/no-data/NoData";
import { SeriesTabs } from "@/components/series/tabs";
import useSeriesOStore from "@/features/series/series.detail.overview";
import { StyledTableCell, StyledTableRow } from "./squads";
import useSeriesStatsStore from "@/features/series/stats.service";
import HomeWrapper from "@/components/wrapper/HomeWrapper";



const Index = () => {
    const router = useRouter();
    const store = useSeriesOStore();
    const seriesStats = useSeriesStatsStore()

    useEffect(() => {
        if (!router.isReady) return;
        const { seriesId } = router.query;
        store.get.ptsTable(`${seriesId}`);

        seriesStats.get.filterList()

    }, [router.isReady]);


    const { filter, seriesId } = router.query;

    useEffect(() => {
        seriesStats.get.filteredData({ id: seriesId, type: filter } as any)
    }, [filter, seriesId])


    return (
        <div>
            <HomeWrapper>
                <Container sx={{ mb: 10 }}>
                    <Grid container>
                        <Grid item xs={12} md={8} sx={{ my: 6 }}>
                            <SeriesCard />
                        </Grid>
                    </Grid>



                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8.3} spacing={3}>
                            <SeriesTabs
                                selectIndex={7}

                            />

                            <br />

                            <InningsTable />

                        </Grid>
                        <Grid item xs={3.2} sx={{ mt: 5 }}>
                            {seriesStats.stats.filterList.map((cate: any) => {
                                return (
                                    <>
                                        <FilterBattingList cate={cate} />
                                        <br />

                                    </>
                                )
                            })

                            }
                        </Grid>
                    </Grid>
                </Container>

            </HomeWrapper>
        </div>
    );
};

export default Index;




const InningsTable = () => {

    const store = useSeriesStatsStore()

    const th = store.stats.tableHeader;

    return (
        <>
            {th?.length > 0 ?
                <TableContainer className='innings-table '>
                    <Table aria-label="customized table">
                        <TableHead className='stat-table-head'>

                            <TableRow className='stat-table-row'>
                                <StyledTableCell>Id</StyledTableCell>
                                <StyledTableCell align="left">{th[0]}</StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="left">{th[1]}</StyledTableCell>
                                <StyledTableCell align="right">{th[2]}</StyledTableCell>
                                <StyledTableCell align="right">{th[3]}</StyledTableCell>
                                <StyledTableCell align="right">{th[4]}</StyledTableCell>
                            </TableRow>


                        </TableHead>
                        <TableBody className='innings-table-body scorecard-table-body'>
                            <MatchScore />
                        </TableBody>
                    </Table>
                </TableContainer >
                :
                <Nodata />

            }

        </>



    );
};






const MatchScore = () => {

    const store = useSeriesStatsStore()


    return (
        <>

            {
                store.stats.tableData.length > 0 && store.stats.tableData.map((td: any, index: number) => {

                    return (

                        <StyledTableRow
                            key={td[0]}

                            className='score-card-table-row'
                        >
                            <StyledTableCell align="left">{index + 1}</StyledTableCell>
                            <StyledTableCell component="th" scope="row">

                                {td[1]}
                            </StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left"></StyledTableCell>
                            <StyledTableCell align="left">{td[2]}</StyledTableCell>
                            <StyledTableCell align="right">{td[3]}</StyledTableCell>
                            <StyledTableCell align="right">{td[4]}</StyledTableCell>
                            <StyledTableCell align="right">{td[5]}</StyledTableCell>

                        </StyledTableRow>
                    )
                })
            }



        </>
    );
}



const FilterBattingList = ({ cate }: { cate: any }) => {

    const router = useRouter()

    const { filter } = router?.query;
    return (
        <>
            <Grid item xs={12} md={12} >

                <div className="stat-filter">
                    <h3> {cate?.lable}</h3>
                    <ul>


                        {cate.types.length > 0 && cate.types.map((fil: any) => {
                            return (
                                <li
                                    key={fil?.key}
                                    className={filter === fil.key ? "stat-selected" : ''}
                                    onClick={() => {
                                        const currentPath = router.asPath.split('?')[0];
                                        router.push({
                                            pathname: currentPath,
                                            query: { filter: fil.key },
                                        }, undefined, { shallow: true });
                                    }}
                                >
                                    {fil.lable}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Grid>
        </>
    )
}

