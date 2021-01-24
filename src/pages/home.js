import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Button } from '@material-ui/core';

function Home(props) {


    function handleClick() {
        console.log("HAHA")
        props.changePage("/panci")
    }
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
                        NANASTRIA WEB
                    </h1>
                </Grid>

                <Grid item xs={3} >
                    <Button onClick={handleClick} variant="contained" color="secondary">PANCI Click Here</Button>
                </Grid>
            </Grid>
        </>
    );
}

export { Home };