import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, Container, Link, Card, } from '@material-ui/core';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function WriteThreadPage(props) {

    const classes = useStyles();
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "inherit", link: "/thread", name: "Forum Diskusi" },
        { color: "primary", link: "/thread/new", name: "Buat Thread" },
    ];

    function handleClick() {
        props.changePage("/thread")
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
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={handleClick}>
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
                                    <h2>Buat Thread</h2>
                                </Grid>
                                <Grid item style={{ width: '100%', padding: '10px' }}>
                                    <ReactMde
                                        value={value}
                                        onChange={setValue}
                                        selectedTab={selectedTab}
                                        onTabChange={setSelectedTab}
                                        generateMarkdownPreview={markdown =>
                                            Promise.resolve(converter.makeHtml(markdown))
                                        }
                                        childProps={{
                                            writeButton: {
                                                tabIndex: -1
                                            }
                                        }}
                                    />
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={handleClick}>Tulis diskusi</Button>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { WriteThreadPage };