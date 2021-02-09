import React, { useEffect, useState, useParams } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';

function Home(props) {


    const token = useParams();
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={3} >
                    <h1 style={{ color: 'white' }}>
                        {token}
                    </h1>
                </Grid>
            </Grid>
        </>
    );
}

export { Home };