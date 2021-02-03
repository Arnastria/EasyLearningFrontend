import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { InputBase, Grid, Button, Box, Paper, Avatar, Card, CardActionArea, CardActions, GridList, GridListTile } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Appbar } from '../components/appbar';
import { blue } from "@material-ui/core/colors";

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
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

function Matkul(props) {

    const classes = useStyles();

    function handleClick() {
        props.changePage("/sister")
    }

    return (
        <>
            <div className={classes.root}>
                <Appbar />
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justify="center"
                    style={{ backgroundColor: '#3D7DCA', minHeight: '30vh', marginTop: '60px', padding: '30px 0px' }}
                >
                    <Grid item xs={2}>
                        <Grid container spacing={3} alignItems="center"
                            justify="center" direction="column">
                            <Grid item>
                                <Avatar>H</Avatar>
                            </Grid>
                            <Grid item>
                                <Button variant="contained"
                                    color="whiteTheme"
                                    disableElevation>Lihat Silabus</Button>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1} direction="column">
                            <Grid item>
                                <b style={{ color: 'white', fontSize: '24px' }} >Sistem Interaksi</b>
                            </Grid>
                            <Grid item>
                                <b style={{ color: 'white' }} >Pernahkah kamu terbayang bagaimana Gojek dapat merancang produk mereka secara unik dan mudah digunakan ?</b>
                            </Grid>
                            <Grid item style={{ color: 'white' }}>
                                Pada kursus ini kamu akan mempelajari bagaimana pelaku industri seperti Google, Facebook, Bukalapak, dan Gojek mendesain produk mereka sehingga mudah digunakan dan sesuai dengan kebutuhan penggunanya. Kamu juga akan mempelajari istilah-istilah seperti UI/UX, interface design, dan lainnya.
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* <GridList cols={5}>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    <GridListTile>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </GridListTile>
                    
                </GridList> */}


                {/* <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ margin: '30px 0px' }}
                >
                    <Grid item xs={3} alignContent="center" alignItems="center">
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card style={{width:'100px'}}>XXXX</Card>
                    </Grid>
                </Grid> */}

                <Grid container spacing={1}>
                    <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                    <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { Matkul };