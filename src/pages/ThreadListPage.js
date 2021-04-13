import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useParams, useLocation } from 'react-router-dom';
import { Grid, Button, Card, Snackbar } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ThreadCard from '../components/ThreadCard';
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';
import { userService } from '../utils/UserService';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function ThreadListPage(props) {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const classes = useStyles();
    const query = useQuery();
    const { id_gaya_belajar, id_course, id_materi } = useParams();
    const [listPost, setListPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(query.get('state') != undefined);


    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "primary", link: "/thread", name: "Forum Diskusi" },
    ];

    function handleClick() {
        props.changePage("/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread/new")
    }

    const preventDefault = (event) => {
        event.preventDefault()
    };
    useEffect(() => {
        if (listPost == null) {
            console.log("fetching material")
            APIUtility.get('/api/post/get-by-material/' + id_materi, {}).then((response) => {
                let listPostJSON = JSON.parse(response.data.post)
                setListPost(listPostJSON);
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
            {isDialogOpen && (
                <Snackbar
                    open={isDialogOpen}
                    autoHideDuration={6000}
                    onClose={() => setIsDialogOpen(false)}
                >
                    <Alert severity="success" onClose={() => setIsDialogOpen(false)}>
                        Berhasil {query.get('state') == "success-create" ? "menulis" : query.get('state') == "success-edit" ? "Mengubah" : "menghapus"} thread !
                </Alert>
                </Snackbar>
            )}
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
                        <Button onClick={props.backToPrevious} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
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
                                {isLoading || listPost == null ?
                                    <CircularProgress />
                                    :
                                    listPost.map((post) => {
                                        let pk = post.pk
                                        post = post.fields
                                        return (
                                            <Grid item style={{ padding: '10px ', width: '100%' }}>
                                                <ThreadCard
                                                    isOutlined={true}
                                                    Title={post['title']}
                                                    TimeStamp={post['last_modified']}
                                                    Author={post['author_name']}
                                                    changePage={props.changePage}
                                                    id_gaya_belajar={id_gaya_belajar}
                                                    id_course={id_course}
                                                    id_materi={id_materi}
                                                    id_post={pk}
                                                    isPreview={true}
                                                    isEditable={userService.getName().toLowerCase() === post['author_name'].toLowerCase()}
                                                    Text={post['body'].length > 200 ? post['body'].split(' ').slice(0, 75).join(' ') + "..." : post['body']}
                                                />
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { ThreadListPage };