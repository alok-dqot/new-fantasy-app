import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import { Table } from "react-bootstrap";
import { useRouter } from "next/router";
import useMatchStore from "@/services/match/match.service";

import { Batter } from "@/components/scorecard";
import { Extra } from "@/components/scorecard";
import { Bowler } from "@/components/scorecard";
import { Wickets } from "@/components/scorecard";
import { Partnerships } from "@/components/scorecard";
import HomeWrapper from "@/components/wrapper/HomeWrapper";
import { InfoCrad } from "@/components/infocard";

function index() {
	const router = useRouter();

	const matchStore = useMatchStore();
	const {
		match: { detail, live, scorecard },
	} = matchStore;

	const [activeTab, setActiveTab] = useState("inf");

	const { id } = router.query;

	useEffect(() => {
		if (!router.isReady) return;

		matchStore.get.detail(`${router.query.id}`);
		matchStore.get.live(`${router.query.id}`);
		matchStore.get.scoreCard(`${router.query.id}`);

		matchStore.get.paginate({ id: router.query.id as any });
	}, [router.isReady]);

	return (
		<>
			<HomeWrapper>
				{/* <Header
				// series_id={matchStore?.match?.detail?.competition?.cid || "10"}
				// match_id={id}
				/> */}

				<section className='score_main_sec'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<div className='match_title'>
									<h3>{detail?.title}</h3>

								</div>
							</div>
						</div>
						<div className='row align-items-center score_row'>
							<div className='col-md-4 col-4 d-flex justify-content-center'>
								<div className='score_content '>
									<div className='team_img'>
										<Image
											src={detail?.teama?.logo_url}
											alt='#'
											width={60}
											height={60}
										/>
									</div>
									<div className='score ms-4'>
										<h3>{detail?.teama?.short_name}</h3>
										<h4>
											{detail?.teama?.scores}{" "}
											<span>{detail?.teama?.overs}</span>
										</h4>
									</div>
								</div>
							</div>
							<div className='col-md-4 col-4'>
								<div className='result_content'>
									<h4>{detail?.status_note}</h4>
								</div>
							</div>
							<div className='col-md-4 col-4 d-flex justify-content-center'>
								<div className='score_content'>
									<div className='score text-end'>
										<h3>{detail?.teamb?.short_name}</h3>
										<h4>
											{detail?.teamb?.scores}{" "}
											<span>{detail?.teamb?.overs}</span>
										</h4>
									</div>
									<div className='team_img ms-4'>
										<Image
											src={detail?.teamb?.logo_url}
											alt='#'
											width={60}
											height={60}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div style={{ height: '260px' }}>

				</div>



				<section className='team_score_tabs_sec'>
					{matchStore.match.list.status && (
						<div className='container'>
							<Tabs
								defaultActiveKey={
									matchStore.match.list?.status === 2
										? "scorecard"
										: matchStore.match.list.status === 1
											? "info"
											: "live"
								}
								id='uncontrolled-tab-example'
								className='mb-3'>
								{matchStore.match.list.status === 3 && (
									<Tab.Pane eventKey='live' title='Live'>

										<div className='live_match_content'>
											<div className='comman_card'>
												<div className='content pt-0'>
													<h5>Run Needed:{live?.live_score?.target} </h5>
													<h5>Balls Rem: {live?.live_score?.overs}</h5>
												</div>
												<div className='content border-0 pb-0'>
													<h5>CRR: {live?.live_score?.runrate}</h5>
													<h5>Target: {live?.live_score?.target}</h5>
												</div>
											</div>

											<div className='comman_card'>
												<div className='content p-0 border-0 align-items-center'>
													<h5>Winning Probability:</h5>
													<div className='buttons'>
														<button className='btn '>
															42
														</button>
														<button className='btn '>
															44
														</button>
													</div>
												</div>
											</div>

											<div className='comman_card'>
												<div className='content p-0 border-0 align-items-center'>
													<h5>Run Rate: {live?.live_score?.runrate} </h5>
													<h5>Balls Rem: {live?.live_score?.overs}</h5>
												</div>
											</div>

											<div className='ads_banner '>

											</div>

											<div className='comman_card'>
												<div className='content pt-0 align-items-center'>
													<div className='d-flex align-items-center'>
														<h5>45 Over Runs:</h5>
														<div className='buttons ms-4'>
															<button className='btn '>
																165
															</button>
															<button className='btn '>
																166
															</button>
														</div>
													</div>
													<div className='d-flex align-items-center'>
														<h5>R X D:</h5>
														<div className='buttons ms-4'>
															<button className='btn '>
																14
															</button>
															<button className='btn '>
																24
															</button>
														</div>
													</div>
												</div>
												<div className='content pb-0 align-items-center border-0'>
													<div>
														<h5>1st Inning’s Total Runs:</h5>
													</div>
													<div className='buttons'>
														<button className='btn '>
															342
														</button>
														<button className='btn'>
															345
														</button>
													</div>
												</div>
											</div>

											<div className='comman_card'>
												<div className='batter_heading'>
													<div className='batter_div'>
														<h5>Batter</h5>


													</div>
													<div className='batter_div r_boll'>
														<h5>R</h5>
														<h5>B</h5>
														<h5>4s</h5>
														<h5>6s</h5>
														<h5>RS</h5>
													</div>
												</div>
												{live?.batsmen?.length ? (
													live?.batsmen?.map((item) => {
														return (
															<div className='batter_heading batsman_runs pt-3'>
																<div className='batter_div'>
																	<h5>
																		{item?.name}
																		{/* 🏏 */}
																	</h5>
																</div>
																<div className='batter_div r_boll'>
																	<h5>{item?.runs}</h5>
																	<h5>{item?.balls_faced}</h5>
																	<h5>{item?.fours}</h5>
																	<h5>{item?.sixes}</h5>
																	<h5>{item?.strike_rate}</h5>
																</div>
															</div>
														);
													})
												) : (
													<></>
												)}

												<div className='batter_heading batsman_runs result_border pt-3'>
													<div className='batter_div'>
														<h5>
															P’ship{" "}
															{live?.live_inning?.current_partnership?.runs}(
															{live?.live_inning?.current_partnership?.balls})
														</h5>
													</div>
													<div className='batter_div r_boll'>
														<h5>
															L ‘ Wkt:{live?.live_inning?.last_wicket?.name}{" "}
															{live?.live_inning?.last_wicket?.runs}(
															{live?.live_inning?.last_wicket?.balls})
														</h5>
													</div>
												</div>
											</div>

											<div className='comman_card'>
												<div className='batter_heading'>
													<div className='batter_div'>
														<h5>Bowler</h5>
													</div>
													<div className='batter_div r_boll'>
														<h5>O</h5>
														<h5>R</h5>
														<h5>Wkt</h5>
														<h5>Eco</h5>
													</div>
												</div>
												{live?.bowlers?.map((item) => {
													return (
														<div className='batter_heading batsman_runs pt-3'>
															<div className='batter_div'>
																<h5>
																	{item?.name}
																	{/* 🔴 */}
																</h5>
															</div>
															<div className='batter_div r_boll'>
																<h5>{item?.overs}</h5>
																<h5>{item?.runs_conceded}</h5>
																<h5>{item?.wickets}</h5>
																<h5>{item?.econ}</h5>
															</div>
														</div>
													);
												})}
											</div>

											<div className='ads_banner '>

											</div>

											<div className='comman_card'>
												<div className='batter_heading'>
													<div className='batter_div'>
														<h5>Did not bat</h5>
													</div>
												</div>
												<div className='batter_heading batsman_runs pt-3'>
													<div className='batter_div'>
														<h5>
															{live?.live_inning?.did_not_bat?.length ? (
																live?.live_inning?.did_not_bat?.map(
																	(item) => item?.name,
																)
															) : (
																<></>
															)}
														</h5>
													</div>
												</div>
											</div>
											<div className='comman_card score_main_sli'>
												<div className='batter_heading'>
													<div className='batter_div'>
														<h5>Last 24 Balls</h5>
													</div>
												</div>
												<div
													className='batter_heading score_balls border-0 pt-3'
													style={{ overflowX: "scroll" }}>
													{/* {live?.live_inning?.recent_scores} */}
													<div className='batter_div'>
														<div className='over_list'>


															{live?.commentaries?.length > 0 &&
																live?.commentaries?.map((recent: any) => {
																	return (
																		<>
																			{recent?.event == "ball" ? (
																				recent?.six ? (
																					<h5 className='comman_run six_run'>
																						6
																					</h5>
																				) : recent?.four ? (
																					<h5 className='comman_run six_four'>
																						4
																					</h5>
																				) : (
																					<h5 className='comman_run single_run'>
																						{recent?.run}
																					</h5>
																				)
																			) : (
																				recent?.event == "overend" && (
																					<h5
																						className='run_count'
																						style={{
																							display: "flex",
																							gap: "10px",
																						}}>
																						{" "}
																						<span>=</span> {recent?.runs}
																					</h5>
																				)
																			)}
																		</>
																	);
																})}
														</div>
													</div>
												</div>
											</div>
											<div className='comman_card'>
												<div className='batter_heading'>
													<div className='batter_div'>
														<h5>Run Rate</h5>
													</div>
													<div className='batter_div r_boll'>
														<h5>8.45*</h5>
														<h5>9</h5>
														<h5>10</h5>
														<h5>11</h5>
													</div>
												</div>
												<div className='batter_heading batsman_runs pt-3'>
													<div className='batter_div'>
														<h5>Projected Score</h5>
													</div>
													<div className='batter_div r_boll'>
														<h5>164</h5>
														<h5>171</h5>
														<h5>179</h5>
														<h5>15.34</h5>
													</div>
												</div>
											</div>
										</div>










									</Tab.Pane>
								)}

								<Tab.Pane eventKey='info' title='Info'>
									<div className='info_tab_content'>
										<div className='comman_card'>
											<div className='team_run_ned'>
												<div className='image'>
													<img
														src='/comp.png'
														alt='#'
														className='img-fluid'
													/>
												</div>
												<div className='content'>
													{/* <p>Run Needed: </p> */}
													<h5>{detail?.title} </h5>
													<h6>{detail?.competition?.title}</h6>
												</div>
											</div>
										</div>
										{/* 

										<div className='common_card'></div>
										<h5 className='comman_run six_wicket'>w</h5> */}


									</div>

									<InfoCrad
										details={detail}
									/>

								</Tab.Pane>




								{(matchStore.match.list.status === 2 ||
									matchStore.match.list.status === 3) && (
										<Tab.Pane eventKey='scorecard' title='Scorecard'>
											<div className='scorecars_tabs_main'>
												<Accordion defaultActiveKey='0'>
													{scorecard?.innings?.length ? (
														scorecard?.innings?.map((inning: any, index) => {
															return (

																<Accordion.Item eventKey={`${index}`}>
																	<Accordion.Header>
																		<div className='team_main'>
																			<div className='team_img'>
																				<img
																					src={
																						inning?.batting_team_id ===
																							detail?.teama?.team_id
																							? detail?.teama?.logo_url
																							: detail?.teamb?.logo_url
																					}
																					alt='#'
																					className='img-fluid'
																				/>
																				<h5>{inning?.name}</h5>
																			</div>
																			<h6>{inning?.scores_full}</h6>
																		</div>
																	</Accordion.Header>

																	<Accordion.Body>
																		<div className="score-body">
																			<div className="scorecard">

																				{/* <CricketScorbord /> */}

																				<div className="cricket-better-score">

																					<div className="score-table">

																						<Batter batter={inning.batsmen} />
																						<Extra
																							extra={inning.extra_runs}
																							equations={inning.equations}


																						/>
																						<Bowler bowler={inning.bowlers} />
																						<Wickets wicket={inning.fows} />
																						<Partnerships partnership={inning.current_partnership} />

																					</div>


																				</div>

																			</div>


																		</div>


																	</Accordion.Body>
																</Accordion.Item>
															);
														})
													) : (
														<></>
													)}
												</Accordion>
											</div>
										</Tab.Pane>
									)}
							</Tabs>
						</div>
					)}
				</section>

				{/* < ScoreCard /> */}


			</HomeWrapper>
		</>
	);
}

export default index;

{
	/* <div className='recent_matchs_main'>
	<div className='heading'><div className='comman_card'>
		<h5>
			Recent Performance <span>(Last 5 Matches)</span>
		</h5>
	</div>
	<Accordion defaultActiveKey='0'>
		<Accordion.Item eventKey='0'>
			<Accordion.Header>
				<div className='d-flex justify-content-between align-items-center w-100'>
					<div className='team_name'>
						<h4>Karachi Kings </h4>
					</div>
					<div className='runs_balls'>
						<h5 className='star_run'>*</h5>
						<h5 className='star_run'>*</h5>
						<h5 className='star_l'>L</h5>
						<h5 className='star_l'>L</h5>
						<h5 className='star_w'>w</h5>
						<h5 className='star_w'>w</h5>
					</div>
				</div>
			</Accordion.Header>
			<Accordion.Body>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
		<Accordion.Item eventKey='1'>
			<Accordion.Header>
				<div className='d-flex justify-content-between align-items-center w-100'>
					<div className='team_name'>
						<h4>Karachi Kings </h4>
					</div>
					<div className='runs_balls'>
						<h5 className='star_run'>*</h5>
						<h5 className='star_run'>*</h5>
						<h5 className='star_l'>L</h5>
						<h5 className='star_l'>L</h5>
						<h5 className='star_w'>w</h5>
						<h5 className='star_w'>w</h5>
					</div>
				</div>
			</Accordion.Header>
			<Accordion.Body>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
				<div className='recent_match_card'>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
							<div className='content'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
						</div>
						<h4>Karachi</h4>
					</div>
					<div className='won_text text-center'>
						<svg
							width='24'
							height='40'
							viewBox='0 0 24 40'
							fill='none'>
							<path
								d='M15 18L12.9 15.825L18.225 10.5H0V7.5H18.225L12.9 2.175L15 0L24 9L15 18Z'
								fill='black'
							/>
							<path
								d='M9 40L11.1 37.825L5.775 32.5H24V29.5H5.775L11.1 24.175L9 22L0 31L9 40Z'
								fill='black'
							/>
						</svg>
						<p>Multan Sultans won by 20 runs</p>
					</div>
					<div className='team_match_'>
						<div className='img_con'>
							<div className='content me-3 text-end'>
								<h5>169-7</h5>
								<p>20.0 Over</p>
							</div>
							<div className='image'>
								<img
									src='/teaam_mini_dp.png'
									alt='#'
									className='img-fluid'
								/>
							</div>
						</div>
						<h4 className='text-end'>Multan</h4>
					</div>
				</div>
			</Accordion.Body>
		</Accordion.Item>
	</Accordion>
</div> */
}

{
	/* </div>										<h5 className='comman_run single_run'>2</h5>
																	<h5 className='comman_run six_run'>6</h5>
																	<h5 className='comman_run six_run'>6</h5>
																	<h5 className='comman_run six_four'>4</h5>
																	<h5 className='comman_run six_wicket'>w</h5> 
																	*/
}


// const Live = () => {
// 	return (
// 		<>
//        <div className='live_match_content'>
//   <div className='comman_card'>
//     <div className='content pt-0'>
//       <h5>Run Needed: {live?.live_score?.target}</h5>
//       <h5>Balls Rem: {live?.live_score?.overs}</h5>
//     </div>
//     <div className='content border-0 pb-0'>
//       <h5>CRR: {live?.live_score?.runrate}</h5>
//       <h5>Target: {live?.live_score?.target}</h5>
//     </div>
//   </div>

//   <div className='comman_card'>
//     <div className='content p-0 border-0 align-items-center'>
//       <h5>Winning Probability:</h5>
//       <div className='buttons'>
//         <button className='btn btn-danger btn_red'>42</button>
//         <button className='btn btn-success btn_green'>44</button>
//       </div>
//     </div>
//   </div>

//   <div className='comman_card'>
//     <div className='content p-0 border-0 align-items-center'>
//       <h5>Run Rate: {live?.live_score?.runrate}</h5>
//       <h5>Balls Rem: {live?.live_score?.overs}</h5>
//     </div>
//   </div>

//   <div className='ads_banner mb-4'></div>

//   <div className='comman_card'>
//     <div className='content pt-0 align-items-center'>
//       <div className='d-flex align-items-center'>
//         <h5>45 Over Runs:</h5>
//         <div className='buttons ms-4'>
//           <button className='btn btn-danger btn_red'>165</button>
//           <button className='btn btn-success btn_green'>166</button>
//         </div>
//       </div>
//       <div className='d-flex align-items-center'>
//         <h5>R X D:</h5>
//         <div className='buttons ms-4'>
//           <button className='btn btn-danger btn_red'>14</button>
//           <button className='btn btn-success btn_green'>24</button>
//         </div>
//       </div>
//     </div>
//     <div className='content pb-0 align-items-center border-0'>
//       <div>
//         <h5>1st Inning’s Total Runs:</h5>
//       </div>
//       <div className='buttons'>
//         <button className='btn btn-danger btn_red'>342</button>
//         <button className='btn btn-success btn_green'>345</button>
//       </div>
//     </div>
//   </div>

//   {/* Batters & Partnership section */}
//   <div className='comman_card'>
//     <div className='batter_heading'>
//       <div className='batter_div'>
//         <h5>Batter</h5>
//       </div>
//       <div className='batter_div r_boll'>
//         <h5>R</h5>
//         <h5>B</h5>
//         <h5>4s</h5>
//         <h5>6s</h5>
//         <h5>RS</h5>
//       </div>
//     </div>
//     {live?.batsmen?.map((item) => (
//       <div className='batter_heading batsman_runs pt-3'>
//         <div className='batter_div'>
//           <h5>{item?.name}</h5>
//         </div>
//         <div className='batter_div r_boll'>
//           <h5>{item?.runs}</h5>
//           <h5>{item?.balls_faced}</h5>
//           <h5>{item?.fours}</h5>
//           <h5>{item?.sixes}</h5>
//           <h5>{item?.strike_rate}</h5>
//         </div>
//       </div>
//     ))}
//     <div className='batter_heading batsman_runs result_border pt-3'>
//       <div className='batter_div'>
//         <h5>
//           P’ship {live?.live_inning?.current_partnership?.runs}(
//           {live?.live_inning?.current_partnership?.balls})
//         </h5>
//       </div>
//       <div className='batter_div r_boll'>
//         <h5>
//           L ‘ Wkt:{live?.live_inning?.last_wicket?.name}{" "}
//           {live?.live_inning?.last_wicket?.runs}(
//           {live?.live_inning?.last_wicket?.balls})
//         </h5>
//       </div>
//     </div>
//   </div>

//   {/* Similar code for Bowler section and others */}
// </div>

// 		</>
// 	);
// }
