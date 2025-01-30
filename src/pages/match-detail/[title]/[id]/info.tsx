import InfoCard from '@/components/infocard';
import TopMatchSection from '@/components/match-detail/TopMatchSection';
import HomeWrapper from '@/components/wrapper/HomeWrapper';
import useMatchStore from '@/services/match/match.service';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

const Info = () => {
    const matchStore = useMatchStore();
    const {
        match: { detail, scorecard },
    } = matchStore;

    const router = useRouter();

    // const [activeTab, setActiveTab] = useState("inf");

    const { id } = router.query;

    useEffect(() => {
        if (!router.isReady) return;

        matchStore.get.detail(`${id}`);

    }, [router.isReady]);
    return (
        <>
            <HomeWrapper>

                <TopMatchSection />

                <InfoCard
                    details={detail}
                />
            </HomeWrapper>
        </>
    )
}

export default Info