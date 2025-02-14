import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from "react";
import Link from 'next/link';


import { CustomCarousel } from "@/components/home/HomeMatches";
import { PlayerProfileTabs } from "@/CustomHook/layout";
import { useRouter } from "next/router";
const Index = () => {

    const router = useRouter()
    const [apiData, setApiData] = useState(null);

    const API = "https://api.sportswiz.live/score/players/143859";

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setApiData(data)


            })
            .catch((error) => console.log(error))
    }, [router?.isReady]);

    console.log("apidata", apiData)

    return (
        <>
            <Navbar />
            <PlayerProfileTabs selectIndex={0} />

            <Footer />

        </>
    )
}

export default Index;

