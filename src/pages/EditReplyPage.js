import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Redirect } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Snackbar, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import TextFieldOutline from '../components/TextFieldOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Alert, Skeleton } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';
import ThreadCard from '../components/ThreadCard';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function EditReplyPage(props) {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const classes = useStyles();
    const query = useQuery();
    const { id_course, id_materi, id_thread, id_reply } = useParams();
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");
    const [nextState, setNextState] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(query.get('state') != undefined);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [post, setPost] = useState(null);
    const [reply, setReply] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "inherit", link: "/thread", name: "Forum Diskusi" },
        { color: "primary", link: "/thread/new", name: "Buat Thread" },
    ];

    const handleClick = () => {

    }

    const handleSubmit = async () => {
        console.log(value)
        setIsLoading(true);
        if (
            value == ''
        ) {
            setIsDialogOpen(true);
            setIsLoading(false);
            return;
        }
        await APIUtility.post('/api/reply/edit/' + id_reply + '/',
            {
                body: value
            }
        ).then((response) => {
            setIsLoading(false);
            setNextState("success-edit");
            setIsSuccessDialogOpen(true);
        });
        // setIsLoading(false);
        // props.changePage("/thread")
    }

    const openDeleteDialog = () => {
        setIsDeleteDialogOpen(true);
    }

    const handleDelete = async () => {
        setIsLoading(true);
        await APIUtility.post('/api/reply/delete/' + id_reply + '/').then((response) => {
            setIsLoading(false);
            setNextState('delete');
            setIsSuccessDialogOpen(true);
        })
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
    useEffect(() => {
        if (post === null) {
            setIsLoading(true);
            APIUtility.get('/api/post/' + id_thread, {}).then((response) => {
                let postJSON = JSON.parse(response.data.model)
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
            });
            setIsLoading(false);
        }

        if (reply === null) {
            setIsLoading(true);
            APIUtility.get('/api/reply/' + id_reply, {}).then((response) => {
                let replyJSON = JSON.parse(response.data.model)
                console.log(replyJSON)
                let replyObject = {
                    'pk': replyJSON[0]['pk'],
                    'post': replyJSON[0]['fields']['post'],
                    'profile': replyJSON[0]['fields']['profile'],
                    'author_name': replyJSON[0]['fields']['author_name'],
                    'body': replyJSON[0]['fields']['body'],
                    'date': replyJSON[0]['fields']['date'],
                    'last_modified': replyJSON[0]['fields']['last_modified'],
                };
                setReply(replyObject)
                setValue(replyObject.body)
            });
            setIsLoading(false);
        }

    }, [])

    if (isSuccessDialogOpen) {
        return (
            <>
                <Redirect
                    to={{
                        pathname: "/course/" + id_course + "/materi/" + id_materi + "/thread/details/" + id_thread + "/",
                        search: "?state=" + nextState,
                    }}
                />
            </>
        );
    }
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
                    justify="flex-start"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '100vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={list} />
                    <Grid item style={{ margin: '0px 0px 12px 0px' }}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={handleClick}>
                            Kembali
                        </Button>
                    </Grid>
                    <Grid item>
                        {post == null ? <CircularProgress /> :
                            <ThreadCard
                                isOutlined={true}
                                Title={post['title']}
                                TimeStamp={post['last_modified']}
                                Author={post['author_name']}
                                changePage={props.changePage}
                                id_course={id_course}
                                id_materi={id_materi}
                                id_post={id_thread}
                                Text={post['body']}
                            />
                        }
                    </Grid>
                    <Grid item>
                        <Typography style={{ height: '16px' }}></Typography>
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
                                    <h2 style={{ margin: '10px 0px 0px 0px' }}>Tulis Komentar</h2>
                                </Grid>
                                <Grid item style={{ width: '100%', padding: '10px' }}>
                                    {reply == null ? <Skeleton /> :
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
                                    }

                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Button style={{ width: '100%', backgroundColor: "crimson" }} variant="contained" color="primary" onClick={openDeleteDialog}>Hapus komentar</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={handleSubmit}>Tulis komentar</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Snackbar
                open={isSuccessDialogOpen}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccessDialogOpen(false);
                }}
            >
                <Alert
                    severity="success"
                    onClose={() => {
                        setIsSuccessDialogOpen(false);
                    }}
                >
                    Berhasil menulis komentar !
            </Alert>
            </Snackbar>
            <Snackbar
                open={isDialogOpen}
                autoHideDuration={6000}
                onClose={() => {
                    setIsDialogOpen(false);
                }}
            >
                <Alert
                    severity="error"
                    onClose={() => {
                        setIsDialogOpen(false);
                    }}
                >
                    Pastikan kamu mengisi data dengan benar
            </Alert>
            </Snackbar>

            <Dialog
                open={isDeleteDialogOpen}
                onClose={() => { setIsDeleteDialogOpen(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Hapus komentar ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Komentar yang sudah dihapus tidak akan bisa dikembalikan.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setIsDeleteDialogOpen(false) }} style={{ color: 'crimson' }}>
                        Tidak
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Ya
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export { EditReplyPage };