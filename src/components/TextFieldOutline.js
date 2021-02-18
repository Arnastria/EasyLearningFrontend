import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        width: "100%"
    }
}));

export default function TextFieldOutline(props) {
    const classes = useStyles();
    const { labels, type, onChange, value } = props;

    return (
        <TextField
            {...props}
            className={classes.root}
            id="standard-required"
            type={type}
            label={labels}
            onChange={onChange}
            value={value}
            InputLabelProps={{
                shrink: true
            }}
        >
        </TextField>
    );
}
