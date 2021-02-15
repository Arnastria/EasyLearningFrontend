import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Typography, Link, Button } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import MarkdownView from 'react-showdown';
import AddIcon from '@material-ui/icons/Add';


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
    const { Title, Author, Text, TimeStamp, isThreadStarter } = props;

    const preventDefault = (event) => {
        event.preventDefault()
        console.log("ayy")
    };

    function handleClick() {
        props.changePage("/thread/new")
    }

    return (
        <Paper variant="outlined">
            <Grid container direction="row" spacing={2} style={{ padding: '12px' }} alignItems="flex-start" alignContent="center" >
                <Grid item xs={1}>
                    <Avatar>{Author[0]}</Avatar>
                </Grid>
                <Grid item xs>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                {Title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <b>{Author} - {TimeStamp}</b>
                        </Grid>
                        <Grid item>
                            <Typography style={{ height: '6px' }} gutterBottom />
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
                        {isThreadStarter ? <Grid item xs={3}>
                            <Link style={{ color: '#8F8F8F' }} href="#" onClick={preventDefault}>
                                <Button style={{ width: '100%' }} startIcon={<AddIcon />} variant="contained" color="primary" onClick={handleClick}>Komentar</Button>
                            </Link>
                        </Grid> : <></>}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
