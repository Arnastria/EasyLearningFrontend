import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Typography, Link, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MarkdownView from 'react-showdown';
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

export default function ThreadReplyCard(props) {
    const { Title, Author, Text, TimeStamp, isEditable, id_course, id_materi, id_post, id_reply } = props;

    const preventDefault = (event) => {
        event.preventDefault()
        console.log("ayy")
    };

    const handleEdit = (event) => {
        event.preventDefault()
        props.changePage("/course/" + id_course + "/materi/" + id_materi + "/thread/" + id_post + "/reply/" + id_reply + "/edit");
    };


    return (
        <Paper variant="outlined">
            <Grid container direction="row" spacing={2} style={{ padding: '12px' }} alignItems="flex-start" alignContent="center" >
                <Grid item xs={1}>
                    <Avatar>{Author[0]}</Avatar>
                </Grid>
                <Grid item xs>
                    <Grid container direction="column">
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
                        {isEditable ? <Grid item xs={3}>
                            <Link style={{ color: '#bdbdbd' }} href='' onClick={handleEdit}>
                                <b >Edit</b>
                            </Link>
                        </Grid> : <></>}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
