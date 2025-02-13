import Container from "@mui/material/Container";
import { Accordion, AccordionDetails, AccordionSummary, Grid } from "@mui/material";
import { SeriesCard } from "./overview";
import { useRouter } from "next/router";
import { useEffect } from "react";
import React from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from "moment";
import useSeriesOStore from "@/features/series/series.detail.overview";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import Nodata from "@/components/no-data/NoData";
import { SeriesTabs } from "@/components/series/tabs";



const Index = () => {
	const route = useRouter();
	const store = useSeriesOStore();

	useEffect(() => {
		if (!route.isReady) return;
		const { seriesId } = route.query;

		store.get.ptsTable(`${seriesId}`);
	}, [route.isReady]);



	return (
		<div>
			<HomeWrapper>
				<Container sx={{ mb: 10 }}>



					<div className="row">

						<SeriesCard />
						<SeriesTabs
							selectIndex={3}

						/>
					</div>
					<Grid container spacing={3}>
						<Grid item xs={12} md={8} spacing={3}>

							<div className='series-title'>
								<h4>{store.series?.list?.details?.name} Standing</h4>
							</div>

							<InningsTable />
							{
								store?.series?.ptsTable?.length > 0 ? store?.series?.ptsTable?.map((team: any) => {
									return (
										<>
											<MatchScore value={team} />
										</>
									)
								})
									:
									<>
										<Nodata />
									</>
							}
						</Grid>
						<Grid item xs={4} sx={{ mt: 5 }}></Grid>
					</Grid>
				</Container>

			</HomeWrapper>
		</div >
	);
};

export default Index;




const InningsTable = () => {


	return (


		<div className='scr-standing-ho'>
			<Grid container>

				<Grid item xs={3} className="stnd-scr-1">
					<li className="stnd-team-head-li">No</li>
					<li className="stnd-team-head-li name-head">Team</li>

				</Grid>

				<Grid item xs={5.6} className="stnd-scr-2" style={{ paddingLeft: '2px' }}>
					<li className="stnd-team-head-li">M</li>
					<li className="stnd-team-head-li">W</li>
					<li className="stnd-team-head-li">L</li>
					<li className="stnd-team-head-li">T</li>

					<li className="stnd-team-head-li">N/R</li>
					<li className="stnd-team-head-li">PTS</li>
					<li className="stnd-team-head-li nr">Net RR.</li>
				</Grid>

				{/* <Grid item xs={3.1} className="stnd-scr-3">
					<li className="stnd-team-head-li">Form</li>

				</Grid> */}

			</Grid>
		</div>

	);
};








const MatchScore = (props: any) => {
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};



	return (
		<div>

			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='stnd-team-o'>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header"
					className='cd stnd-team-ac'
				>
					<div className='scr-standing-bo'>
						<Grid container>
							<Grid item xs={3} className="stnd-scr-1">
								<li className=" stnd-team-head-li no">{props?.value?.team_rank}</li>
								<li className="stnd-team-head-li name" style={{ marginLeft: '10px' }}>{props?.value?.name}</li>

							</Grid>
							<Grid item xs={5.7} className="stnd-scr-2">
								<li className="stnd-team-head-li" >{props?.value?.matches}</li>
								<li className="stnd-team-head-li ">{props?.value?.win}</li>
								<li className="stnd-team-head-li">{props?.value?.loss}</li>
								<li className="stnd-team-head-li">{props?.value?.tied}</li>

								<li className="stnd-team-head-li">{props?.value?.nr}</li>
								<li className="stnd-team-head-li">{props?.value?.points}</li>
								<li className="stnd-team-head-li">{props?.value?.nrr}</li>
							</Grid>

							{/* <Grid item xs={3.1} className="stnd-scr-3">
								<li className="stnd-team-head-li form">
									{props?.value?.teamForm?.length > 0 && props?.value?.teamForm?.map((t: any) => {
										if (t == 'L') {
											return (
												<RedBallSm
													run="L"
												/>
											)
										}
										else {
											return (

												<GreenBallSm
													run="W"
												/>
											)
										}
									})}


								</li>

							</Grid> */}

						</Grid>
					</div>
				</AccordionSummary>


				<AccordionDetails className='scr-card-cnt-1'>

					<div className="stnd-cnt-mr">
						<div className="cnt-head">
							<Grid container>
								<Grid item xs={6}>
									<h3>Opponent</h3>
								</Grid>
								<Grid item xs={3}>
									<h4>Description</h4>
								</Grid>
								<Grid item xs={3}>
									<h4>Date</h4>
								</Grid>


							</Grid>
							{
								props?.value?.matchs?.length > 0 && props?.value?.matchs?.map((mat: any) => {
									return (
										<Grid container className="detail-cnt">
											<Grid item xs={6}>
												<h3>{mat?.opponentTeam?.name}</h3>
												<h3 className="status_note">{mat?.status_note}</h3>

											</Grid>
											<Grid item xs={3}>
												<h4>Match No. {mat?.number}</h4>
											</Grid>
											<Grid item xs={3}>
												<h4>{moment(mat?.starting_at).format("Do MMM YY")}</h4>
											</Grid>
										</Grid>
									)
								})
							}

						</div>
					</div>

				</AccordionDetails>
			</Accordion>
		</div>
	);
}






interface BallProps {
	run: string;
}

const GreenBallSm = (props: BallProps) => {
	return (
		<div className="fnt-ball-sm f4">
			{props.run}
		</div>
	);
};


const RedBallSm = (props: BallProps) => {
	return (
		<div className="fnt-ball-sm s6">
			{props.run}
		</div>
	);
};
