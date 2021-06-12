import React from "react";
import { Grid } from "semantic-ui-react";
import SideBar from "../layouts/SideBar";
import Fragment from "../layouts/Fragment";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <SideBar />
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Fragment />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}