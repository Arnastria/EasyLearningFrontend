import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, Container, Link, Card, } from '@material-ui/core';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ThreadCard from '../components/ThreadCard';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function ThreadListPage(props) {

    const classes = useStyles();
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "primary", link: "/thread", name: "Forum Diskusi" },
    ];

    function handleClick() {
        props.changePage("/thread/new")
    }

    const preventDefault = (event) => {
        event.preventDefault()
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });

    return (
        <>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="flex-start"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '100vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={list} />
                    <Grid item style={{ margin: '0px 0px 12px 0px' }}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                            Kembali
                        </Button>
                    </Grid>
                    <Grid item >
                        <Card>
                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 16px 0px' }}
                            >
                                <Grid item>
                                    <h2>Forum Diskusi</h2>
                                </Grid>
                                <Grid item style={{ width: '100%', padding: '10px' }}>
                                    <Grid
                                        container
                                        direction="row"
                                    >
                                        <Grid item>
                                            <Button style={{ width: '100%' }} startIcon={<AddIcon />} variant="contained" color="primary" onClick={handleClick}>Tulis diskusi</Button>
                                        </Grid>
                                        <Grid item>
                                            <Typography style={{ width: '16px' }}></Typography>
                                        </Grid>
                                        <Grid item>
                                            <Button style={{ width: '100%' }} variant="outlined" color="primary" onClick={handleClick}>Filter</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item style={{ margin: '10px ' }}>
                                    <ThreadCard
                                        Title={'Kuis I Bab 1 Metodologi Penelitian dan Penulisan Ilmiah  sudah dibuka ! '}
                                        Author={'Ariq Naufal Satria'}
                                        Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                                    />
                                </Grid>
                                <Grid item style={{ margin: '10px ' }}>
                                    <ThreadCard
                                        Title={'Kuis I Bab 1 Metodologi Penelitian dan Penulisan Ilmiah  sudah dibuka ! '}
                                        Author={'Ariq Naufal Satria'}
                                        Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                                    />
                                </Grid>
                                <Grid item style={{ margin: '10px ' }}>
                                    <ThreadCard
                                        Title={'Kuis I Bab 1 Metodologi Penelitian dan Penulisan Ilmiah  sudah dibuka ! '}
                                        Author={'Ariq Naufal Satria'}
                                        Text={"Lick the other cats love but rub against owner because nose is wet so adventure always. Sleep try to hold own back foot to clean it but foot reflexively kicks you in face, go into a rage and bite own foot, hard steal mom's crouton while she is in the bathroom flex claws on the human's belly and purr like a lawnmower. Freak human out make funny noise mow mow mow mow mow mow success now attack human purr like an angel."}
                                    />
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { ThreadListPage };