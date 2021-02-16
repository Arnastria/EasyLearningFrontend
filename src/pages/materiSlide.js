import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, Container, Link, Card, } from '@material-ui/core';
// import { Document, Page, pdfjs } from 'react-pdf';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import { PDFViewerExample } from '../components/PDFViewer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import file from '../pdf/DesainInteraksi';
import ThreadCard from '../components/ThreadCard';

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

function MateriSlide(props) {

    const classes = useStyles();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "primary", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
    ];

    function handleClick() {
        props.changePage("/thread")
    }

    const preventDefault = (event) => {
        event.preventDefault()
    };

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
                    <Grid item xs>
                        <Card>
                            <Grid
                                container
                                justify="space-around"
                                // justify="center"
                                alignItems="center"
                                style={{ padding: '30px' }}
                            >

                                <Grid item xs>
                                    <Grid container justify="center">
                                        <Grid item>
                                            <CardMedia
                                                className={classes.media}
                                                image="https://files.catbox.moe/qfaut0.svg"
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container spacing={1} direction="column">
                                        <Grid item>
                                            <b style={{ fontSize: '24px', marginRight: '12px' }} >1</b>
                                            <b style={{ fontSize: '24px' }} >Pengantar Sistem Interaksi</b>
                                        </Grid>
                                        <Grid item>
                                            <b style={{ fontSize: '14px' }} >Bagaimana raksasa teknologi seperti Google mengembangkan produk yang menarik dan mudah digunakan oleh jutaan penggunanya ?</b>
                                        </Grid>
                                        <Grid item >
                                            <Typography variant="body" color="white" component="p" style={{ fontSize: '12px' }}>
                                                Pada bab ini kamu akan belajar mengenai dasar-dasar desain interaksi, istilah-istilah yang mungkin pernah kamu dengar seperti UI/UX, dan penerapannya dalam pengembangan produk digital, seperti website dan mobile apps
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{ marginTop: '14px' }}>
                                            <Grid container spacing={3} direction="row">
                                                <Grid item xs>
                                                    <Button style={{ width: '100%' }} variant="outlined" color="primary" startIcon={<ArrowBackIcon />} onClick={handleClick}>Pre-Quiz</Button>
                                                </Grid>
                                                <Grid item xs >
                                                    <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<PlayArrowIcon />}>Lihat Video Intro</Button>
                                                </Grid>
                                                <Grid item xs >
                                                    <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<AssignmentIcon />}>Peta Konsep</Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>
                    <Grid item>
                        <Card>
                            <PDFViewerExample pdf={`data:application/pdf;base64,${file}`} />
                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>

                    {/* <Grid item>
                        <Card>
                            <PDFViewerExample pdf={'https://files.catbox.moe/071fl9.pdf'} />
                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container> */}
                    <Grid item >
                        <Card>
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 0px 0px' }}
                            >
                                <Grid item>
                                    <b>Materi Pengayaan / Suplemen</b>
                                </Grid>

                            </Grid>
                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Typography component="div" style={{ width: '16px' }} />
                                <Grid item>
                                    <Link style={{ color: '#3D7DCA', fontSize: '14px' }} href="#" onClick={preventDefault}>
                                        <Grid container alignItems="center" alignContent="center">
                                            <Grid item>
                                                <PlayCircleFilledIcon />
                                            </Grid>
                                            <Grid item>
                                                <b >[VIDEO] Meet the UX Researcher : Gita</b>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </Grid>
                                <Typography component="div" style={{ width: '16px' }} />
                                <Grid item>
                                    <Link style={{ color: '#3D7DCA', fontSize: '14px' }} href="#" onClick={preventDefault}>
                                        <Grid container alignItems="center" alignContent="center">
                                            <Grid item>
                                                <PlayCircleFilledIcon />
                                            </Grid>
                                            <Grid item>
                                                <b >[VIDEO] A Day in the Life : UX Researchers at Google</b>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </Grid>
                                <Typography component="div" style={{ width: '16px' }} />
                                <Grid item>
                                    <Link style={{ color: '#3D7DCA', fontSize: '14px' }} href="#" onClick={preventDefault}>
                                        <Grid container alignItems="center" alignContent="center">
                                            <Grid item>
                                                <LibraryBooksIcon />
                                            </Grid>
                                            <Grid item>
                                                <b >[WEBSITE] Usability.Gov - What is Usability  ?</b>
                                            </Grid>
                                        </Grid>
                                    </Link>
                                </Grid>
                                <Typography component="div" style={{ width: '16px' }} />
                            </Grid>
                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>

                    {/* Kalau gak ada diskusi */}
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
                                    <b>Diskusi Terbaru</b>
                                </Grid>
                                <Grid item>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://files.catbox.moe/5kro61.svg"
                                    />
                                </Grid>
                                <Grid item>
                                    <b>Belum ada diskusi</b>
                                </Grid>
                                <Grid item>
                                    Mulai sekarang untuk memperkaya pemahamanmu
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClick}>Buat Thread</Button>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>


                    {/* Kalau ada diskusi */}
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
                                    <b>Diskusi Terbaru</b>
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={handleClick}>Buka forum</Button>
                                </Grid>
                                <Grid item style={{ margin: '20px' }}>
                                    <ThreadCard
                                        isOutlined={true}
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

export { MateriSlide };