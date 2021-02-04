import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, Box, Paper, Avatar, Card, CardActionArea, CardActions, GridList, GridListTile } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Appbar } from '../components/appbar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import MateriCard from '../components/MateriCard';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    media: {
        width: 130,
        paddingTop: '56.25%', // 16:9
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

    function handleClick() {
        props.changePage("/sister")
    }

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
                    <Grid item xs style={{ margin: '12px 0px' }}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                            Kembali
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Card>
                            <Grid
                                container
                                justify="space-evenly"
                                alignItems="center"
                                style={{ padding: '30px' }}
                            >

                                <Grid item xs={2}>
                                    <CardMedia
                                        className={classes.media}
                                        image="https://files.catbox.moe/mnfc1y.svg"
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={1} direction="column">
                                        <Grid item>
                                            <b style={{ fontSize: '48px', marginRight: '12px' }} >1</b>
                                            <b style={{ fontSize: '36px' }} >Pengantar Sistem Interaksi</b>
                                        </Grid>
                                        <Grid item>
                                            <b style={{ fontSize: '18px' }} >Pernahkah kamu terbayang bagaimana Gojek dapat merancang produk mereka secara unik dan mudah digunakan ?</b>
                                        </Grid>
                                        <Grid item >
                                            <Typography variant="body" color="white" component="p">
                                                Pada kursus ini kamu akan mempelajari bagaimana pelaku industri seperti Google, Facebook, Bukalapak, dan Gojek mendesain produk mereka sehingga mudah digunakan dan sesuai dengan kebutuhan penggunanya.
                                                Kamu juga akan mempelajari istilah-istilah seperti UI/UX, interface design, dan lainnya.
                                </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Card>

                    </Grid>
                    <Grid item xs={2}>
                        <Grid container spacing={3} alignItems="center"
                            justify="center" direction="column">
                            <Grid item>
                                <CardMedia
                                    className={classes.media}
                                    image="https://files.catbox.moe/mnfc1y.svg"
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained"
                                    style={{ backgroundColor: "white" }}
                                    disableElevation>Lihat Silabus</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1} direction="column">
                            <Grid item>
                                <b style={{ color: 'white', fontSize: '36px' }} >Sistem Interaksi</b>
                            </Grid>
                            <Grid item>
                                <b style={{ color: 'white', fontSize: '18px' }} >Pernahkah kamu terbayang bagaimana Gojek dapat merancang produk mereka secara unik dan mudah digunakan ?</b>
                            </Grid>
                            <Grid item style={{ color: 'white' }}>
                                <Typography variant="body" color="white" component="p">
                                    Pada kursus ini kamu akan mempelajari bagaimana pelaku industri seperti Google, Facebook, Bukalapak, dan Gojek mendesain produk mereka sehingga mudah digunakan dan sesuai dengan kebutuhan penggunanya.
                                    Kamu juga akan mempelajari istilah-istilah seperti UI/UX, interface design, dan lainnya.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { MateriSlide };