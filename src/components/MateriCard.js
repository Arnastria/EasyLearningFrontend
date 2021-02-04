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

export default function MateriCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <div style={{ paddingLeft: '12px' }}><h1 style={{ margin: '0', padding: '0' }}>{props.number ?? 0}</h1></div>
            <Grid container justify="center" alignItems="center" alignContent="center">
                <Grid item>
                    <CardMedia
                        className={classes.media}
                        image="https://files.catbox.moe/qfaut0.svg"
                    />
                </Grid>
            </Grid>

            <CardContent>
                <Typography variant="head" color="textSecondary" component="b">
                    {props.judul ?? "-"}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
                <Grid container justify="center" alignItems="center" alignContent="center">
                    <Grid item style={{ width: '100%', margin: '12px 0px' }}>
                        <Button variant="contained"
                            color="primary"
                            fullWidth
                            disableElevation>Lihat Materi</Button>
                    </Grid>
                    <Grid item style={{ width: '100%' }}>
                        <Button variant="outlined"
                            color="secondary"
                            fullWidth
                        >
                            Uji Pemahamanmu
                        </Button>

                    </Grid>
                </Grid>


            </CardContent>
            <CardActions disableSpacing>

                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton> */}
            </CardActions>
        </Card>
    );
}
