import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, Typography, Link } from '@material-ui/core';
import { red } from '@material-ui/core/colors';


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
    const { Title, Author, Text, TimeStamp } = props;

    const preventDefault = (event) => event.preventDefault();

    return (
        <Paper>
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
                            {Text}
                        </Grid>
                        <Grid item>
                            <Typography style={{ height: '6px' }} gutterBottom />
                        </Grid>
                        <Grid item>

                            <Link style={{ color: '#8F8F8F' }} href="#" onClick={preventDefault}>
                                <b >Lihat selengkapnya</b>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
