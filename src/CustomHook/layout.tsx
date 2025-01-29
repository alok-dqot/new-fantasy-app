import { PlayerProfileCard } from "@/pages/player-profile/[id]";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";




const Layout = ({ children }: any) => {

    const router = useRouter()


    const [apiData, setApiData] = useState(null)

    const { id } = router.query;
    const API = "https://api.sportswiz.live/score/players/";

    useEffect(() => {
        if (!router?.isReady) return
        fetch(API + id)
            .then((res) => res.json())
            .then((data) => { setApiData(data) })
            .catch((error) => console.log(error))
    }, [id]);
    console.log(apiData)
    return (
        <>
            <PlayerProfileCard playerdata={apiData} />
            {children}
        </>
    )
};
export { Layout }