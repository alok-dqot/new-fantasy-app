
import useMatchStore from "@/features/match/match.service";
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";


const MatchDetailTabs = ({ selectIndex }: { selectIndex: any }) => {

    const matchStore = useMatchStore();
    const {
        match: { detail },
    } = matchStore;

    const tabItem = [
        "Info",
        "Live",
        "Scorecard",
        "Squads",
        "News"
    ]

    const router = useRouter()
    const { title, id } = router.query as any;

    function handleUpdateTab(page: string) {

        router.push(`/match-detail/${title}/${id}/${page.toLowerCase()}`)
    }



    return (
        <div className="col-md-9 p-2">
            <div className="">
                <Tabs value={selectIndex} onChange={() => { }} className='home-tabs bg-card' variant="scrollable"  >

                    {
                        detail.status && tabItem.map((t: string, index: number) => {
                            if ((t == 'Live' || t == 'Scorecard') && detail.status.toLowerCase() == 'upcoming') {
                                return (
                                    <></>
                                )
                            }

                            return (

                                <Tab label={t} onClick={() => handleUpdateTab(t)} className={selectIndex == index ? "selected" : ''} />
                            )
                        })
                    }

                </Tabs>
            </div>

        </div>
    )
}
export default MatchDetailTabs;

