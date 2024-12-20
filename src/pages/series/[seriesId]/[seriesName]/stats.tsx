import Container from "@mui/material/Container";
import { Autocomplete, Grid, Table, TableBody, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { SeriesCard } from "./overview";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Nodata from "@/components/no-data/NoData";
import { SeriesTabs } from "@/components/series/tabs";
import useSeriesOStore from "@/features/series/series.detail.overview";
import { StyledTableCell, StyledTableRow } from "./squads";
import useSeriesStatsStore from "@/features/series/stats.service";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import { AdsBanner } from "@/components/ads/Ads";



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

                    <div className="row">
                        <SeriesCard />
                        <SeriesTabs
                            selectIndex={7}

                        />


                        <div className="col-12 stat-filter mt-4">
                            {seriesStats.stats.filterList.map((cate: any) => {
                                return (

                                    <FilterBattingList cate={cate} />

                                )
                            })

                            }
                            <br />

                        </div>
                        <div className="col-md-9 mt-5">

                            <InningsTable />
                        </div>

                        <div className="col-3">
                            <AdsBanner />
                        </div>


                    </div>



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

                            className=''
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

    const selectedFilter = cate.types.find((type: any) => type.key === filter) || null;


    return (



        <div className="col-5 mt-2" key={cate?.lable}>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={cate.types}
                getOptionLabel={(option: any) => {
                    return option.lable || '';
                }}
                value={selectedFilter}
                onChange={(e, value: any) => {
                    // console.log(value)

                    const currentPath = router.asPath.split('?')[0];
                    router.push({
                        pathname: currentPath,
                        query: { filter: value?.key },
                    }, undefined, { shallow: true });
                }}
                sx={{ maxWidth: 300, width: '100%', background: 'var(--text-white)', }}
                renderInput={(params) => <TextField {...params} label={cate?.lable} size="small" />}
            />


        </div>


    )
}

