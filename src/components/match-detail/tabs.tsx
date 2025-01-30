
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";


const MatchDetailTabs = ({ selectIndex }: { selectIndex: any }) => {

    const tabItem = [
        "Info",
        "Live",
        "Scorecard",
        "Squads",
        "News"
    ]

    const router = useRouter()
    const { title, id } = router.query;

    function handleUpdateTab(page: string) {

        router.push(`/match-detail/${title}/${id}/${page.toLowerCase()}`)
    }


    return (
        <div className="col-md-9 p-2">
            <div className="tab-role-outer">
                <Tabs value={selectIndex} onChange={() => { }} className='home-tabs bg-card' variant="scrollable"  >
                    {
                        tabItem.map((t: string) => (
                            <Tab label={t} onClick={() => handleUpdateTab(t)} />
                        )
                        )
                    }

                </Tabs>
            </div>

        </div>
    )
}
export default MatchDetailTabs;

