import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, Grid, Button, FormLabel, FormControl, FormGroup, Card, FormControlLabel, FormHelperText, Checkbox, Radio, RadioGroup } from '@material-ui/core';
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

export default function QuestionItem(props) {

    const { number, value, handleChange, question, choice } = props;


    return (
        <Grid
            container
            direction="row"
            alignContent="center"
            style={{ padding: '16px 0px' }}
        >
            <Grid item>
                <h1>{number}</h1>
            </Grid>
            <Grid item xs>
                <Grid
                    container
                    justify="center"
                    direction="column"
                    style={{ padding: '16px' }}
                >
                    <Grid item>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">{question}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                {choice.map((val, i) => {
                                    return <FormControlLabel value={i} control={<Radio />} label={val} />
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
