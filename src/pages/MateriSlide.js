import React, { useState, useEffect } from 'react';
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { CardMedia, Grid, Button, Container, Link, Card } from '@material-ui/core';
import { Lightbox } from "react-modal-image";
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import { PDFViewerExample, PDFViewerExampleSequential } from '../components/PDFViewer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { getSlide } from '../pdf/PdfHandler';
import ThreadCard from '../components/ThreadCard';
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';
import Skeleton from '@material-ui/lab/Skeleton';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
    bigMedia: {
        width: '100vw',
        height: '100vh'
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
    const { id_gaya_belajar, id_course, id_materi } = useParams();
    const [listBreadCrumb, setListBreadCrumb] = useState(
        [
            { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course, name: "..." },
            { color: "primary", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi, name: "..." },
        ]
    );

    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [noPostOnForum, setNoPostOnForum] = useState(true);
    const [materi, setMateri] = useState(null);
    const [post, setPost] = useState(null);
    const [openMap, setOpenMap] = useState(false);

    useEffect(() => {
        if (materi === null) {
            APIUtility.get('/api/material/' + id_materi, {}).then((response) => {
                let materiJSON = JSON.parse(response.data.model)
                // console.log(materiJSON)
                let materiObject = {
                    'course': materiJSON[0]['fields']['course'],
                    'name': materiJSON[0]['fields']['name'],
                    'intro': materiJSON[0]['fields']['intro'],
                    'pdf': materiJSON[0]['fields']['pdf'],
                    'description': materiJSON[0]['fields']['description'],
                    'links': JSON.parse(materiJSON[0]['fields']['links']),
                    'pdf_chapter': JSON.parse(materiJSON[0]['fields']['pdf_chapter']),
                };
                setListBreadCrumb([
                    { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course, name: "Sistem Interaksi" },
                    { color: "primary", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi, name: materiObject.name },
                ])
                setMateri(materiObject)

            });
            setIsLoading(false);
        }
        if (post === null) {
            APIUtility.get('/api/get-latest-post-by-material/' + id_materi, {}).then((response) => {
                let postJSON = JSON.parse(response.data.post)
                setNoPostOnForum(false);
                let postObject = {
                    'pk': postJSON[0]['pk'],
                    'material': postJSON[0]['fields']['material'],
                    'profile': postJSON[0]['fields']['profile'],
                    'author_name': postJSON[0]['fields']['author_name'],
                    'title': postJSON[0]['fields']['title'],
                    'body': postJSON[0]['fields']['body'],
                    'category': postJSON[0]['fields']['category'],
                    'date': postJSON[0]['fields']['date'],
                    'last_modified': postJSON[0]['fields']['last_modified'],
                };
                setPost(postObject)
                console.log(postObject)
            }).catch((error) => {
                if (error.response.status == "404") {
                    return;
                }
            });

        }

    }, [])

    const createChapterChecklist = (chapterList) => {
        const chapterCheckList = {};
        chapterList.map((chapter, i) => {
            let chapterData = chapter.split("-");
            chapterCheckList[parseInt(chapterData[0])] = false;
        })
        return chapterCheckList;
    }

    const handleOpenMap = () => {
        setOpenMap(true);
    }

    const handleCloseMap = () => {
        setOpenMap(false);
    }

    function handleClick() {
        props.changePage("/thread")
    }

    function openThread() {
        props.changePage("/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread/")
    }

    function createThread() {
        props.changePage("/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread/new")
    }


    const preventDefault = (event) => {
        event.preventDefault()
    };
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
                    direction="column"
                    justify="center"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '30vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={listBreadCrumb} />
                    <Grid item xs style={{ margin: '0px 0px 12px 0px' }}>
                        <Button onClick={props.backToPrevious} onClick={props.backToPrevious} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
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
                                            {materi === null ?
                                                <CircularProgress />
                                                :
                                                <CardMedia
                                                    className={classes.media}
                                                    image={materi.links['link-list'][0].split('-')[1]}
                                                />
                                            }

                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={8}>
                                    <Grid container spacing={1} direction="column">
                                        <Grid item>
                                            {materi === null ?
                                                <Skeleton variant="text" />
                                                : <b style={{ fontSize: '28px', marginRight: '12px' }} >{id_materi}</b>
                                            }
                                            {materi === null ?
                                                <Skeleton variant="text" /> :
                                                <b style={{ fontSize: '28px' }} >{materi.name}</b>
                                            }
                                        </Grid>
                                        <Grid item>
                                            {materi === null ?
                                                <Skeleton variant="text" /> :
                                                <b style={{ fontSize: '12px' }} >{materi.intro}</b>
                                            }
                                        </Grid>
                                        <Grid item >
                                            {materi === null ?
                                                <Skeleton variant="text" /> :
                                                <Typography variant="body" component="p" style={{ fontSize: '14px' }}>
                                                    {materi.description}
                                                </Typography>
                                            }

                                        </Grid>
                                        <Grid item style={{ marginTop: '14px' }}>
                                            <Grid container spacing={3} direction="row">
                                                <Grid item xs>
                                                    <Button style={{ width: '100%' }} variant="outlined" color="primary" startIcon={<ArrowBackIcon />}
                                                        onClick={() => { props.changePage('/course/' + id_gaya_belajar + "/" + id_course + "/prequiz") }}>
                                                        Pre-Test
                                                    </Button>
                                                </Grid>
                                                <Grid item xs >
                                                    <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<PlayArrowIcon />}
                                                        onClick={() => { window.location.replace(materi.links['link-list'][1].split('-')[1]); }}>
                                                        Lihat Video Intro
                                                        </Button>
                                                </Grid>
                                                <Grid item xs >
                                                    <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<AssignmentIcon />}
                                                        onClick={handleOpenMap}>
                                                        Peta Konsep
                                                    </Button>
                                                    {
                                                        openMap && (<>
                                                            <Lightbox
                                                                large={
                                                                    id_gaya_belajar == "A" ? materi.links['link-list'][3].split('-')[1] :
                                                                        materi.links['link-list'][2].split('-')[1]
                                                                }
                                                                onClose={handleCloseMap}
                                                            />
                                                        </>)
                                                    }
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
                            {materi === null ? <Skeleton variant="text" />
                                :
                                id_gaya_belajar == "C" ?
                                    <>
                                        <PDFViewerExampleSequential
                                            chapterList={materi.pdf_chapter['chapter-list']}
                                            chapterCheckList={createChapterChecklist(materi.pdf_chapter['chapter-list'])}
                                            pdf={`data:application/pdf;base64,${getSlide(materi.pdf)}`}
                                        />
                                    </>
                                    :
                                    <>
                                        <PDFViewerExample
                                            chapterList={materi.pdf_chapter['chapter-list']}
                                            pdf={`data:application/pdf;base64,${getSlide(materi.pdf)}`}
                                        />
                                    </>
                            }

                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>
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
                                {materi === null ? <Skeleton variant="text" />
                                    :
                                    materi.links['link-list'].map((link) => {
                                        let linkData = link.split('-');
                                        if (linkData[0] === 'logo' || linkData[0] === 'konsep' || linkData[0] === 'video intro' || linkData[0] === 'mm') {
                                            return (<></>);
                                        } else {
                                            return (
                                                <>
                                                    <Grid item>
                                                        <Link style={{ color: '#3D7DCA', fontSize: '14px' }} href={linkData.slice(1, linkData.length).join("-")}>
                                                            <Grid container alignItems="center" alignContent="center">
                                                                <Grid item>
                                                                    <PlayCircleFilledIcon />
                                                                </Grid>
                                                                <Grid item>
                                                                    <b >{linkData[0]}</b>
                                                                </Grid>
                                                            </Grid>
                                                        </Link>
                                                    </Grid>
                                                    <Typography component="div" style={{ width: '16px' }} />
                                                </>
                                            );
                                        }
                                    })
                                }
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
                                {noPostOnForum
                                    ?
                                    <>
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
                                            <Button style={{ width: '100%' }} variant="contained" color="primary" startIcon={<AddIcon />} onClick={createThread}>Buat Thread</Button>
                                        </Grid>
                                    </>
                                    :
                                    <>
                                        <Typography component="div" style={{ height: '16px' }} />
                                        <Grid item>
                                            <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={openThread}>Buka forum</Button>
                                        </Grid>
                                        <Grid item style={{ padding: '20px', width: '100%' }}>
                                            {post == null ?
                                                <CircularProgress />
                                                :
                                                <ThreadCard
                                                    isOutlined={true}
                                                    Title={post['title']}
                                                    TimeStamp={post['last_modified']}
                                                    Author={post['author_name']}
                                                    changePage={props.changePage}
                                                    id_gaya_belajar={id_gaya_belajar}
                                                    id_course={id_course}
                                                    id_materi={id_materi}
                                                    id_post={post['pk']}
                                                    isPreview={true}
                                                    Text={post['body'].length > 200 ? post['body'].split(' ').slice(0, 25).join(' ') + "..." : post['body']}
                                                />
                                            }

                                        </Grid>
                                    </>
                                }

                            </Grid>

                        </Card>
                    </Grid>
                    <Container maxWidth="sm">
                        <Typography component="div" style={{ height: '16px' }} />
                    </Container>
                </Grid>
            </div>
        </>
    );
}

export { MateriSlide };
