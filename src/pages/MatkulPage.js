import React, { useState, useEffect } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
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
    const [isLoadingMaterial, setIsLoadingMaterial] = useState(true);
    const [course, setCourse] = useState({
        'code': '',
        'name': '',
        'aliasName': '',
        'intro': '',
        'description': '',
        'links': '',
    });

    const [material, setMaterial] = useState([]);

    // console.log("welcome to matkul id ")
    // console.log(id_course)
    function openSilabus() {
        window.location.replace("https://" + course.links.silabus);
    }

    useEffect(() => {
        if (course['code'] == '') {
            APIUtility.get('/api/course/' + id_course, {}).then((response) => {
                let courseJSON = JSON.parse(response.data.model)
                // console.log(courseJSON)
                let courseObject = {
                    'code': courseJSON[0]['fields']['code'],
                    'name': courseJSON[0]['fields']['name'],
                    'aliasName': courseJSON[0]['fields']['aliasName'],
                    'intro': courseJSON[0]['fields']['intro'],
                    'description': courseJSON[0]['fields']['description'],
                    'links': JSON.parse(courseJSON[0]['fields']['links']),
                };
                // console.log(courseObject);
                setCourse(courseObject);
            });
            setIsLoading(false);
        }

        if (material.length == 0) {
            console.log("fetching material")
            APIUtility.get('/api/material/get-by-course/' + id_course, {}).then((response) => {
                let materialsJSON = JSON.parse(response.data.materials)

                console.log(materialsJSON);
                setMaterial(materialsJSON);
            });
            setIsLoadingMaterial(false);
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
                    style={{ minHeight: '100vh', marginTop: '60px', padding: '30px 0px' }}
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
                                {course.links == '' ?
                                    <Skeleton width={100} height={100} variant="circle" animation="wave" />
                                    : <CardMedia
                                        className={classes.media}
                                        image={course.links.icon}
                                    />}

                            </Grid>
                            <Grid item>
                                {course.links == '' ?
                                    <div >
                                        <Skeleton width={120} height={40} variant="rect" animation="wave" />
                                    </div>

                                    : <Button variant="contained"
                                        style={{ backgroundColor: "white" }}
                                        onClick={openSilabus}
                                        disableElevation>Lihat Silabus</Button>}

                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <Grid container spacing={1} direction="column">
                            <Grid item>
                                {course.name == '' ?
                                    <Skeleton variant="text" />
                                    : <b style={{ color: 'white', fontSize: '36px' }} >{course.name}</b>
                                }
                            </Grid>
                            <Grid item>
                                {course.intro == '' ?
                                    <Skeleton variant="text" />
                                    : <b style={{ color: 'white', fontSize: '18px' }} >{course.intro}</b>
                                }
                            </Grid>
                            <Grid item style={{ color: 'white' }}>
                                <Typography variant="body" color="white" component="p">
                                    {course.description == '' ?
                                        <Skeleton variant="text" />
                                        : <>{course.description}</>
                                    }

                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {isLoadingMaterial ?
                    <Grid container spacing={1} style={{ minHeight: '30vh', maxWidth: "100%", padding: "16px 160px" }}>
                        <Grid item>
                            <CircularProgress />
                        </Grid>
                    </Grid>

                    :
                    <Grid container spacing={1} style={{ minHeight: '30vh', maxWidth: "100%", padding: "16px 160px" }}>
                        {material.map((materi, i) => {
                            return (
                                <Grid item>
                                    <MateriCard
                                        changePage={props.changePage}
                                        number={i + 1}
                                        courseId={id_course}
                                        materiID={materi.pk}
                                        judul={materi.fields.name}
                                        description={materi.fields.description}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                }
            </div>
        </>
    );
}

export { Matkul };