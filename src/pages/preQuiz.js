import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, Container, Paper, Avatar, Card, CardActionArea, CardActions, GridList, GridListTile } from '@material-ui/core';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Appbar } from '../components/appbar';
import Breadcrumb from '../components/Breadcrumb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Typography from '@material-ui/core/Typography';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    media: {
        width: '246px',
        height: '177px'
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.55),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function PreQuiz(props) {

    const classes = useStyles();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "primary", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },

    ];

    return (
        <>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '30vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={list} />
                    <Grid item xs style={{ margin: '0px 0px 12px 0px' }}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                            Kembali
                        </Button>
                    </Grid>
                    <Grid item>
                        <Card style={{ padding: '0px 150px' }}>
                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 0px 0px' }}
                            >
                                <Grid item>
                                    <b style={{ fontSize: '24px' }}>Pre-Quiz : Pengantar Sistem Interaksi</b>
                                </Grid>
                                <Grid item>
                                    <p style={{ margin: '4px', fontSize: '12px' }}>Sebelum kamu mempelajari lebih lanjut mengenai sistem interaksi, jawablah 3 soal berikut ini </p>
                                </Grid>

                            </Grid>
                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>1</h1>
                                </Grid>
                                <Grid item xs>
                                    <Grid
                                        container
                                        justify="center"
                                        direction="column"
                                        alignItems="center"
                                        alignContent="center"
                                        style={{ padding: '16px 0px' }}
                                    >
                                        <Grid item>
                                            Ciri desain yang baik untuk sebuah aplikasi transportasi online adalah yang ...
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>2</h1>
                                </Grid>
                                <Grid item xs>
                                    <Grid
                                        container
                                        justify="center"
                                        direction="column"
                                        alignItems="center"
                                        alignContent="center"
                                        style={{ padding: '16px 0px' }}
                                    >
                                        <Grid item>
                                            UI/UX adalah istilah yang sering kita dengar. Apakah UI (User Interface) sama dengan UX (User Experience) ?
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid
                                container
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>3</h1>
                                </Grid>
                                <Grid item xs>
                                    <Grid
                                        container
                                        justify="center"
                                        direction="column"
                                        alignItems="center"
                                        alignContent="center"
                                        style={{ padding: '16px 0px' }}
                                    >
                                        <Grid item>
                                            Siapakah yang merupakan pihak yang perlu menjadi fokus utama saat mengembangkan desain produk ?
                                        </Grid>
                                        <Grid item>
                                            <Grid container direction="row">
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                                <Grid item xs style={{ width: '100%' }}>
                                                    <Button variant="outlined">aaa</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>



                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { PreQuiz };