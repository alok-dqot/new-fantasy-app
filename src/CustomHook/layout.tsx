import { PlayerProfileCard } from "@/pages/player-profile/[id]";

const Layout = ({ children }: any) => {
    return (
        <>
            <PlayerProfileCard />
            {children}
        </>
    )
};
export { Layout }