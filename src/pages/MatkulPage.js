import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Typography from '@material-ui/core/Typography';
import MateriCard from '../components/MateriCard';
import { useParams } from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#E5E5E5',
        minHeight: '100vh'
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

function Matkul(props) {
    const { id_course } = useParams();
    const classes = useStyles();

    const [isLoading, setIsLoading] = useState(true);
    const [course, setCourse] = useState({
        'code': '',
        'name': '',
        'aliasName': '',
        'intro': '',
        'description': '',
        'links': '',
    });

    console.log("welcome to matkul id ")
    console.log(id_course)
    function handleClick() {
        props.changePage("/sister")
    }

    useEffect(() => {
        if (course['code'] == '') {
            APIUtility.get('/api/course/' + id_course, {}).then((response) => {
                let courseJSON = JSON.parse(response.data.model)
                console.log(courseJSON)
                setCourse(courseJSON[0]['fields']);
            });
            setIsLoading(false);
        }

    }, [])

    if (isLoading) {
        return (<>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '30vh', marginTop: '60px', padding: '30px 0px' }}
                >
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>

            </div>
        </>);

    }
    return (
        <>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
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
                                <CardMedia
                                    className={classes.media}
                                    image={"https://files.catbox.moe/mnfc1y.svg"}
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
                                <b style={{ color: 'white', fontSize: '36px' }} >{course.name}</b>
                            </Grid>
                            <Grid item>
                                <b style={{ color: 'white', fontSize: '18px' }} >{course.intro}</b>
                            </Grid>
                            <Grid item style={{ color: 'white' }}>
                                <Typography variant="body" color="white" component="p">
                                    {course.description}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={{ minHeight: '30vh', maxWidth: "100%", padding: "16px 160px" }}>
                    <Grid item xs>
                        <MateriCard changePage={props.changePage} number={1} judul={"Pengantar Sistem Informasi"}></MateriCard>
                    </Grid>
                    <Grid item xs>
                        <MateriCard number={2} judul={"Prinsip Dasar Kognisi"}></MateriCard>
                    </Grid>
                    <Grid item xs>
                        <MateriCard number={3} judul={"Prinsip Dasar Kognisi"} ></MateriCard>
                    </Grid>
                    <Grid item xs>
                        <MateriCard number={4} judul={"Prinsip Dasar Kognisi"} ></MateriCard>
                    </Grid>
                    <Grid item xs>
                        <MateriCard number={5} judul={"Prinsip Dasar Kognisi"} ></MateriCard>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { Matkul };