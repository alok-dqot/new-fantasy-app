import { Autocomplete, Button, Container, Grid, TextField } from "@mui/material"

import { useState } from "react"
import HomeWrapper from "@/components/wrapper/HomeWrapper"
import useFantasyStore from "@/features/fantasy/fantasy.service"
import { MetaTags } from "@/helpers/meta.helper"
import FantasyComp from "@/components/card/fantasy-card"

const Index = () => {

    const [team, setTeam] = useState({ id: '', name: '' });
    const [venue, setVenue] = useState({ id: '', name: '' });
    const [page, setPage] = useState(10);



    const store = useFantasyStore();

    const handleMore = () => {
        setPage(page + 10)
    }


    return (
        <>
            <MetaTags pageName={"FANTASY_TIPS"} />

            <HomeWrapper>
                <Container sx={{ mt: 3 }}>
                    <div className="fnt-tip-list-o">

                        <Grid container spacing={2}>
                            <Grid item xs={12} md={7.8} className="fnt-tip-list-c">
                                <h1>Fantasy Cricket Tips</h1>

                                <hr />
                            </Grid>
                            {/* <SeriesInfo /> */}


                            <FantasyComp />


                        </Grid>
                    </div>

                </Container>

            </HomeWrapper>

        </>
    )
}

export default Index
