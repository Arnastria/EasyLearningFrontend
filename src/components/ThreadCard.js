import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Typography, Link, Button } from '@material-ui/core';
import MarkdownView from 'react-showdown';
import { red } from '@material-ui/core/colors';
import AddIcon from '@material-ui/icons/Add';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: '100%'
    },
    media: {
        width: 180,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function ThreadCard(props) {
    const { Title, Author, Text, TimeStamp, isOutlined, isPreview, id_course, id_materi, id_post, isThreadStarter, isEditable } = props;

    const handleClick = (event) => {
        event.preventDefault()
        props.changePage("/course/" + id_course + "/materi/" + id_materi + "/thread/details/" + id_post);
    };

    const handleEdit = (event) => {
        event.preventDefault()
        props.changePage("/course/" + id_course + "/materi/" + id_materi + "/thread/edit/" + id_post);
    };

    const handleComment = (event) => {
        event.preventDefault()
        props.changePage("/course/" + id_course + "/materi/" + id_materi + "/thread/" + id_post + "/reply/new");
    }

    return (
        <Paper variant={isOutlined ? "outlined" : ""}>
            <Grid container direction="row" spacing={2} style={{ padding: '12px' }} alignItems="flex-start" alignContent="center" >
                <Grid item xs={1}>
                    <Avatar>{Author[0]}</Avatar>
                </Grid>
                <Grid item xs>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography style={{ margin: '0px' }} variant="h6" gutterBottom>
                                <b>{Title}</b>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <p style={{ margin: '0px', color: '#8F8F8F' }}>{Author} - <Moment format="DD MMM YYYY hh:mm" >{TimeStamp}</Moment></p>
                        </Grid>
                        <Grid item>
                            <MarkdownView
                                markdown={Text}
                                options={{ tables: true, emoji: true }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography style={{ height: '6px' }} gutterBottom />
                        </Grid>
                        {isPreview ?
                            <Grid item>
                                <Grid container direction="row" spacing={2}>
                                    <Grid item>
                                        <Link style={{ color: '#5D97DB' }} href='' onClick={handleClick}>
                                            <b >Lihat selengkapnya</b>
                                        </Link>
                                    </Grid>
                                    {isEditable != undefined ? <Grid item>
                                        <Link style={{ color: '#bdbdbd' }} href='' onClick={handleEdit}>
                                            <b >Edit</b>
                                        </Link>
                                    </Grid> : <></>}

                                </Grid>

                            </Grid> : <> </>}
                        {isThreadStarter ?
                            <Grid item>
                                <Grid container direction="row" spacing={2} alignItems="center">
                                    <Grid item>
                                        <Link style={{ color: '#8F8F8F' }}  >
                                            <Button style={{ width: '100%' }} startIcon={<AddIcon />} variant="contained" color="primary" onClick={handleComment}>Komentar</Button>
                                        </Link>
                                    </Grid>
                                    {isEditable != undefined ? <Grid item>
                                        <Link style={{ color: '#bdbdbd' }} href='' onClick={handleEdit}>
                                            <b >Edit</b>
                                        </Link>
                                    </Grid> : <></>}
                                </Grid>


                            </Grid> : <></>}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
