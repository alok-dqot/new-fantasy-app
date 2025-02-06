
import InfoCard from '@/components/match-detail/infocard';
import MatchDetailTabs from '@/components/match-detail/tabs';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useMatchStore from '@/features/match/match.service';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Info = () => {
    const matchStore = useMatchStore();
    const {
        match: { detail },
    } = matchStore;

    const router = useRouter();

    // const [activeTab, setActiveTab] = useState("inf");

    const { id } = router.query;

    useEffect(() => {
        if (!router.isReady) return;

        matchStore.get.detail(`${id}`);

    }, [router.isReady, id]);
    return (
        <>
            <HomeWrapper>

                <TopMatchSection />
                <div className="m-detail-outer">
                    <MatchDetailTabs selectIndex={0} />
                </div>
                <InfoCard
                    details={detail}
                />
            </HomeWrapper>
        </>
    )
}

export default Info