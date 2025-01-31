import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/navbar";
import { useRouter } from "next/router";

const PlayerContainer = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <PlayerProfileCard />
            {children}
            <Footer />
        </>
    )
};
export default PlayerContainer;






const PlayerProfileCard = () => {
    const router = useRouter()



    return (
        <>
            <div className=" playerProfileCard">
                <div className="row">
                    <div className="col-md-6 p-3">
                        <div className="player-image">
                            <img src="/batter.png" alt="Temba Bavuma" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 p-3">
                        <div className="player-info">
                            <h1 className="player-name"><span className="first-name">Temba</span> <br /> BAVUMA</h1>

                            <div className="player-details">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M5,28H27c2.209,0,4-1.791,4-4v-8H1v8c0,2.209,1.791,4,4,4Z" fill="#030a85"></path><path d="M31,8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4v9H31V8Z" fill="#d04839"></path><path d="M2.271,26.911l12.729-10.911L2.271,5.089c-.778,.73-1.271,1.76-1.271,2.911V24c0,1.151,.493,2.181,1.271,2.911Z"></path><path d="M5.61,4h-.61c-1.058,0-2.014,.419-2.729,1.089l12.729,10.911L2.271,26.911c.715,.671,1.671,1.089,2.729,1.089h.61l10.5-9h14.89v-6h-14.89L5.61,4Z" fill="#fff"></path><path d="M2.271,5.089c-.768,.72-1.254,1.733-1.267,2.866l9.386,8.045L1.005,24.045c.013,1.133,.499,2.146,1.267,2.866l12.729-10.911L2.271,5.089Z" fill="#f5bd45"></path><path d="M4.175,4.087c-1.419,.298-2.544,1.354-2.974,2.72l10.725,9.193L1.201,25.193c.429,1.366,1.555,2.422,2.974,2.72l11.565-9.913h15.26v-4H15.74L4.175,4.087Z" fill="#33764c"></path><path d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                                    SA
                                </span>
                                <span className="player-age">34 yrs</span>
                                <span> Right Handed Batter</span>
                            </div>

                            <div className="stats-badges">
                                <div className="badge">#35 Batter in ODI</div>
                                <div className="badge">#7 Batter in Test</div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
};








const tabItem = [
    "overview",
    "matches",
    "news",
    "player-info"
]


import { Button } from "@mui/material";

export const PlayerProfileTabs = ({ selectIndex }: any) => {


    const route = useRouter()

    const { id, player } = route.query

    function handleRouter(link: any) {
        const formated = link.replace(/ /g, "-");

        route.push('/player-profile/' + id + '/' + formated)
    }
    return (

        <div className="player-tab-wrapper">
            <div className="player-tab-wrapper-container container">
                <div className="tab-role-outer">

                    {
                        tabItem.map((item: any, index: number) => (
                            <Button
                                key={index}
                                className={`player-tab-link ${selectIndex === index ? 'player-tab-active' : ''}`}
                                onClick={() => handleRouter(item)}
                            >
                                {item}
                            </Button>
                        ))
                    }
                </div>
            </div>

        </div>


    )
}

