
import { Tab, Tabs } from "@mui/material";
import { useRouter } from "next/router";


export const SeriesTabs = ({ selectIndex }: { selectIndex: any }) => {
    const router = useRouter()
    const { seriesId, seriesName } = router.query;

    function handleUpdateTab(page: string) {

        router.push(`/series/${seriesId}/${seriesName}/${page}`)
    }


    return (
        <>
            <div className="tab-role-outer">
                <Tabs value={selectIndex} onChange={() => { }} className='home-tabs' variant="scrollable"  >
                    <Tab label={"Home"} onClick={() => handleUpdateTab('overview')} />
                    <Tab label={"Schedule & Results"} onClick={() => handleUpdateTab('fixture')} />
                    <Tab label={"squads"} onClick={() => handleUpdateTab('squads')} />
                    <Tab label={"Tables"} onClick={() => handleUpdateTab('standing')} />
                    <Tab label={"News"} onClick={() => handleUpdateTab('news')} />
                    <Tab label={"Videos"} onClick={() => handleUpdateTab('videos')} />
                    <Tab label={"Venues"} onClick={() => handleUpdateTab('venues')} />
                    <Tab label={"Stats"} onClick={() => handleUpdateTab('stats?filter=mostrun')} />

                </Tabs>
            </div>

        </>
    )
}
