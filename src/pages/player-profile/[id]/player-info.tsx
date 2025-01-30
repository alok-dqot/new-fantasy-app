import PlayerContainer, { PlayerProfileTabs } from "@/CustomHook/layout";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const PlayerInfo = () => {
    return (
        <>
            {/* <div className="container info-container">
                <div className="playerinfo">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="persnol-details">
                                <div className="persnol-detail-tital">
                                    <h6>Professional Details</h6>
                                </div>


                                <table>
                                    <tbody>
                                        <tr>
                                            <td>role</td>
                                            <td>batter</td>
                                        </tr>
                                        <tr>
                                            <td>bats</td>
                                            <td>right handed . middle order</td>
                                        </tr>
                                        <tr>
                                            <td>Bowls</td>
                                            <td>right-arm medium . Faster</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="team-played-for">
                                <div className="team-played-title">
                                    <h6> Teams played for</h6>
                                </div>
                                <ul >

                                    <li>  South Africa</li>
                                    <li> Lions</li>
                                    <li> South Africa A</li>
                                </ul>
                                <ul >
                                    <li> South African Invitation XI</li>
                                    <li>Joburg Giants</li>
                                    <li> Cape Cobras</li>
                                </ul>
                                <ul >
                                    <li> Durban Heat</li>
                                    <li>Northamptonshire</li>
                                    <li>Jozi Stars</li>

                                </ul>
                            </div>

                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div> */}
            <PlayerContainer>
                <PlayerProfileTabs selectIndex={0} />

                <div className="container info-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Professional Details</h2>
                            <div className="info-grid">
                                <div className="info-row">
                                    <div className="info-label">Role</div>
                                    <div className="info-value">Batter</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Bats</div>
                                    <div className="info-value">Right Handed • Middle Order</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Bowls</div>
                                    <div className="info-value">Right-Arm Medium • Faster</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Teams played for</div>
                                    <div className="info-value">
                                        <div className="teams-list">
                                            <span className="team-item">South Africa</span>
                                            <span className="team-item">Lions</span>
                                            <span className="team-item">South Africa A</span>
                                            <span className="team-item">South African Invitation XI</span>
                                            <span className="team-item">Joburg Giants</span>
                                            <span className="team-item">Cape Cobras</span>
                                            <span className="team-item">Durban Heat</span>
                                            <span className="team-item">Northamptonshire</span>
                                            <span className="team-item">Jozi Stars</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h2 className="section-title">Personal Details</h2>
                            <div className="info-grid">
                                <div className="info-row">
                                    <div className="info-label">Name</div>
                                    <div className="info-value">Temba Bavuma</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Gender</div>
                                    <div className="info-value">Male</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Birth</div>
                                    <div className="info-value">17 May 1990</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Birth Place</div>
                                    <div className="info-value">Cape Town, Cape Province, South Africa</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Height</div>
                                    <div className="info-value">1.62 M (5 Ft 4 In)</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Nationality</div>
                                    <div className="info-value">South African</div>
                                </div>
                            </div>
                            <div className="bio-text">
                                Temba Bavuma has established himself in the South African set-up despite his limitations. He is the first black African cricket captain, however, he's much more than that. Bavuma announced himself through his gritty Test batting, and gradually became the white-ball captain for the Proteas. His technique may look uncanny to eyes, but his defense makes him the best of the current South African lot...

                            </div>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <InstagramIcon />
                                    tbavuma11
                                </a>
                                <a href="#" className="social-link">
                                    <TwitterIcon />
                                    @tbavuma10
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </PlayerContainer>

        </>
    )
};
export default PlayerInfo;