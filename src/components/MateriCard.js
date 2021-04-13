import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, CardHeader, CardContent, Card, CardActionArea, CardActions, GridList, GridListTile } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: '100%'
    },
    root2: {
        maxWidth: 445,
        height: '100%'
    },
    media: {
        width: 180,
        paddingTop: '56.25%', // 16:9
    },
    media2: {
        height: 50,
        width: 180,
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

export default function MateriCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function handleClickMateri() {
        props.changePage("/course/" + props.gayaBelajar + "/" + props.courseId + "/materi/" + props.materiID)
    }

    function handleClickAssessment() {
        props.changePage("/course/" + props.gayaBelajar + "/" + props.courseId + "/materi/" + props.materiID + "/assessment/start")
    }
    if (props.isLong) {
        return (
            <div>
                <Grid container direction="row">
                    <Grid item>
                        <Card className={classes.root}>
                            <div style={{ paddingLeft: '12px' }}><h1 style={{ margin: '0', padding: '0' }}>{props.number ?? 0}</h1></div>
                            <Grid container justify="center" alignItems="center" alignContent="center">
                                <Grid item>
                                    <CardMedia
                                        className={classes.media}
                                        image={props.image}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Typography component="div" style={{ width: '8px' }} />
                    </Grid>
                    <Grid item>
                        <Card className={classes.root2}>
                            <CardContent>
                                <Grid container direction="column"
                                    justify="space-between" >
                                    <Grid item>
                                        <Typography variant="head" color="textSecondary" component="b">
                                            {props.judul ?? "-"}
                                        </Typography>
                                    </Grid>

                                    <Grid item >
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {props.description.length > 200 ? props.description.split(' ').slice(0, 25).join(' ') + "..." : props.description}
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Grid container justify="center" alignItems="center" alignContent="center">
                                            <Grid item style={{ width: '100%', margin: '12px 0px' }}>
                                                <Button variant="contained"
                                                    color="primary"
                                                    fullWidth
                                                    onClick={handleClickMateri}
                                                    disableElevation>Lihat Materi</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </div>


        );
    }
    return (
        <Card className={classes.root}>
            <div style={{ paddingLeft: '12px' }}><h1 style={{ margin: '0', padding: '0' }}>{props.number ?? 0}</h1></div>
            <Grid container justify="center" alignItems="center" alignContent="center">
                <Grid item>
                    <CardMedia
                        className={classes.media}
                        image={props.image}
                    />
                </Grid>
            </Grid>

            <CardContent>
                <Grid container direction="column"
                    justify="space-between" >
                    <Grid item>
                        <Typography variant="head" color="textSecondary" component="b">
                            {props.judul ?? "-"}
                        </Typography>
                    </Grid>

                    <Grid item >
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.description.length > 200 ? props.description.split(' ').slice(0, 25).join(' ') + "..." : props.description}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Grid container justify="center" alignItems="center" alignContent="center">
                            <Grid item style={{ width: '100%', margin: '12px 0px' }}>
                                <Button variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleClickMateri}
                                    disableElevation>Lihat Materi</Button>
                            </Grid>
                            {/* <Grid item style={{ width: '100%' }}>
                                <Button variant="outlined"
                                    color="secondary"
                                    fullWidth
                                    onClick={handleClickAssessment}
                                >
                                    Uji Pemahamanmu
                        </Button>

                            </Grid> */}
                        </Grid>
                    </Grid>


                </Grid>
            </CardContent>

        </Card>
    );
}
