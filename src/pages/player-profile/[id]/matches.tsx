import PlayerContainer, { PlayerProfileTabs } from "@/CustomHook/layout";
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import ComboBox from "@/components/mui-Autocomplete/autocomplete";
import { useState } from "react";




const Matches = () => {

    return (
        <>

            <PlayerContainer>
                <PlayerProfileTabs selectIndex={1} />

                <div className="matches-container container">


                    <SectionHeader />



                    <div className="row">

                        <div className="col-md-12 col-lg-4 all-matches-section">


                            <FormatTabs />

                            <InputGroup />

                            <MatchCards />



                        </div>

                        <div className="col-md-12 col-lg-8 match-data-section">
                            <div className="stats-header">

                                <LogoSection />
                            </div>
                            <h3 className="section-title">Test</h3>

                            <SummaryStats />

                            <MatchTable />



                        </div>
                    </div>
                </div>
            </PlayerContainer>


        </>
    )
};
export default Matches;


export const MatchCard = () => {
    return (
        <>
            <div className="match-card ">
                <div className="match-card__img">
                    <img src="/matchs.webp" alt="BGT Logo" className="match-card__logo" />
                </div>
                <div className="match-card__content">
                    <h2 className="match-card__title">BGT 2024-25</h2>
                    <div className="match-card__meta">
                        <span className="match-card__date">Nov 22 - Jan 7</span>
                        <span className="match-card__team">Played for IND</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const SectionHeader = () => {
    const [isClicked, setIsClicked] = useState(0)
    return (
        <>
            <div className="section-header">
                <h2 className="section-title">Maches</h2>
                <div className="tab-group">
                    <button className={`${isClicked == 0 ? 'tab active' : 'tab'}`}
                        onClick={() => {
                            setIsClicked(0)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Batting
                    </button>
                    <button className={`${isClicked == 1 ? 'tab active' : 'tab'}`}
                        onClick={() => {
                            setIsClicked(1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Bowling
                    </button>
                </div>
            </div>
        </>
    )
};

const FormatTabs = () => {
    return (
        <>
            <div className="format-tabs">
                <button className="tab-button active">ALL</button>
                <button className="tab-button">ODI</button>
                <button className="tab-button">T20</button>
                <button className="tab-button">Test</button>
                <button className="tab-button">100B</button>
                <button className="tab-button">T10</button>
            </div>
        </>
    )
};

const InputGroup = () => {
    return (
        <>
            <div className="input-group">
                <SearchIcon />
                <input type="text" placeholder="Search in Series or against Team" />
            </div>
        </>
    )
};

const MatchCards = () => {
    const AutocompleteCard = [

        {
            label: 'BGT 2024-25',
            year: '2024',
            date: 'Nov 22 - Jan 7',
            team: 'IND',
            image: '/matchs.webp',
            altText: 'BGT Logo'
        },
        {
            label: 'BGT 2024-25',
            year: '2024',
            date: 'Nov 22 - Jan 7',
            team: 'IND',
            image: '/matchs.webp',
            altText: 'BGT Logo'
        }, {
            label: 'BGT 2024-25',
            year: '2024',
            date: 'Nov 22 - Jan 7',
            team: 'IND',
            image: '/matchs.webp',
            altText: 'BGT Logo'
        },
        {
            label: 'BGT 2024-25',
            year: '2024',
            date: 'Nov 22 - Jan 7',
            team: 'IND',
            image: '/matchs.webp',
            altText: 'BGT Logo'
        },
    ];

    return (
        <>
            <div className="matches-cards">

                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />
                <MatchCard />





            </div>
            <div className="matche-card-autocomplete">
                <ComboBox AllMatches={AutocompleteCard} />
            </div>

        </>
    )
};

const SummaryStats = () => {
    return (
        <>
            <div className="summary-stats">
                <div className="stat-box">
                    <div className="stat-value">369</div>
                    <div className="stat-label">Runs</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">9</div>
                    <div className="stat-label">Inns</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">46.13</div>
                    <div className="stat-label">Average</div>
                </div>
                <div className="stat-box">
                    <div className="stat-value">52.94</div>
                    <div className="stat-label">Strike rate</div>
                </div>
            </div>
        </>
    )
};

const MatchTable = () => {
    return (
        <table className="match-table">
            <thead>
                <tr>
                    <th>Match</th>
                    <th>Date</th>
                    <th>Score</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>5th Test, 1st Inn</td>
                    <td>3 Jan</td>
                    <td>10 (26)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>4th Test, 1st Inn</td>
                    <td>26 Dec</td>
                    <td>82 (118)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>4th Test, 2nd Inn</td>
                    <td>26 Dec</td>
                    <td>84 (208)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>3rd Test, 1st Inn</td>
                    <td>14 Dec</td>
                    <td>4 (2)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>3rd Test, 2nd Inn</td>
                    <td>14 Dec</td>
                    <td>4 (6)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>2nd Test, 1st Inn</td>
                    <td>6 Dec</td>
                    <td>0 (1)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>2nd Test, 2nd Inn</td>
                    <td>6 Dec</td>
                    <td>24 (31)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>1st Test, 1st Inn</td>
                    <td>22 Nov</td>
                    <td>0 (8)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
                <tr>
                    <td>1st Test, 2nd Inn</td>
                    <td>22 Nov</td>
                    <td>161 (297)</td>
                    <td><a href="#" className="view-link">View </a></td>
                </tr>
            </tbody>
        </table>
    )
};

const LogoSection = () => {
    return (
        <>
            <div className="logo-section">
                <img src="/matchs.webp" alt="BGT Logo" className="logo" />
                <div className="title-section">
                    <h2 className="tournament-title">BGT 2024-25</h2>
                    <p className="date-range">Nov 22 - Jan 7 <span className="played-for">Played for IND</span></p>
                </div>
            </div>
        </>
    )
}



