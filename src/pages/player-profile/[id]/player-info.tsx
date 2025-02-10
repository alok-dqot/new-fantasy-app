import PlayerContainer, { PlayerProfileTabs } from "@/CustomHook/layout";
import usePlayerInfoStore from "@/features/players/player.service";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useRouter } from "next/router";
import { useEffect } from "react";


const PlayerInfo = () => {
    const router = useRouter()
    const { id } = router.query;
    const playerinfo = usePlayerInfoStore()

    useEffect(() => {
        if (!router.isReady) return
        playerinfo.get.info(id as any)
    }, [id])

    const info = playerinfo.player.detail;
    console.log("info", info)

    return (
        <>

            <PlayerContainer>
                <PlayerProfileTabs selectIndex={3} />

                <div className="container info-container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Professional Details</h2>
                            <div className="info-grid">
                                <div className="info-row">
                                    <div className="info-label">Role</div>
                                    <div className="info-value">{info?.playing_role}</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Bats</div>
                                    <div className="info-value"> {info?.batting_style}</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Bowls</div>
                                    <div className="info-value">{info?.bowling_style}</div>
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
                                    <div className="info-value"> {info?.name}</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Gender</div>
                                    <div className="info-value">{info?.gender}</div>
                                </div>
                                <div className="info-row">
                                    <div className="info-label">Birth</div>
                                    <div className="info-value">{info?.date_of_birth}</div>
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
                                    <div className="info-label">Nationality{info?.nationality}</div>
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