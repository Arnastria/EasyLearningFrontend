import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Snackbar } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import ThreadReplyCard from '../components/ThreadReplyCard';
import ThreadCard from '../components/ThreadCard';
import APIUtility from '../utils/APIUtility';
import { Alert } from "@material-ui/lab";
import Skeleton from '@material-ui/lab/Skeleton';
import CircularProgress from "@material-ui/core/CircularProgress";
import { userService } from '../utils/UserService';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function ThreadPage(props) {

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const classes = useStyles();
    const query = useQuery();
    const { id_course, id_materi, id_thread } = useParams();
    const [post, setPost] = useState(null);
    const [replies, setReplies] = useState(null);
    const [isLoadingReplies, setIsLoadingReplies] = useState(true);
    const [isDialogOpen, setIsDialogOpen] = useState(query.get('state') != undefined);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        if (post === null) {
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
                // console.log(postObject)
            });
            setIsLoading(false);
        }

        if (replies === null) {
            APIUtility.get('/api/reply/get-by-post/' + id_thread, {}).then((response) => {
                console.log(response.data)
                let repliesJSON = JSON.parse(response.data.replies)
                if (repliesJSON.length == 0) {
                    return;
                }
                setReplies(repliesJSON)
                // console.log(repliesJSON)
            });
            setIsLoadingReplies(false);
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
                        Berhasil {query.get('state') == "success-create" ? "menulis" : query.get('state') == "success-edit" ? "Mengubah" : "menghapus"} komentar !
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
                                    <h2 style={{ margin: "0 10px 10px 10px" }}>Forum Diskusi</h2>
                                </Grid>
                                <Grid item>
                                    {post == null ?
                                        <Skeleton variant="text" />
                                        : <h3 style={{ margin: "0 10px 0 10px" }}>{post.title}</h3>
                                    }
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />

                                <Grid item style={{ padding: '5px 10px', width: "100%" }}>
                                    {post == null ?
                                        <CircularProgress />
                                        :
                                        <ThreadCard
                                            isOutlined={true}
                                            Title={post['title']}
                                            TimeStamp={post['last_modified']}
                                            Author={post['author_name']}
                                            changePage={props.changePage}
                                            id_course={id_course}
                                            id_materi={id_materi}
                                            id_post={post['pk']}
                                            isThreadStarter={true}
                                            Text={post['body']}
                                            isEditable={userService.getName().toLowerCase() === post['author_name'].toLowerCase()}
                                        />
                                    }

                                </Grid>
                                {isLoadingReplies || replies == null ?
                                    <></>
                                    :
                                    replies.map((reply) => {
                                        return (
                                            <Grid item style={{ padding: '5px 10px 5px 30px ', width: "100%" }}>
                                                <ThreadReplyCard
                                                    TimeStamp={reply['fields']['last_modified']}
                                                    Author={reply['fields']['author_name']}
                                                    Text={reply['fields'].body}
                                                    changePage={props.changePage}
                                                    id_course={id_course}
                                                    id_materi={id_materi}
                                                    id_post={id_thread}
                                                    id_reply={reply.pk}
                                                    isEditable={userService.getName().toLowerCase() === reply['fields']['author_name'].toLowerCase()}
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

export { ThreadPage };