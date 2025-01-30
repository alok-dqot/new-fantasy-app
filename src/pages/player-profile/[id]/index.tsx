import Navbar from "@/components/Header";
import Footer from "@/components/footer/Footer";

import { CustomCarousel } from "@/components/HomeMatches";
import { PlayerProfileTabs } from "@/CustomHook/layout";
const Index = () => {

    return (
        <>
            <Navbar />
            <PlayerProfileTabs selectIndex={0} />

            <Footer />

        </>
    )
}
export default Index;



