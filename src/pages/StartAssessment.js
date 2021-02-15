import React, { useState } from 'react';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid, Button, Card } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    media: {
        width: '246px',
        height: '177px'
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.55),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.75),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function StartAssessment(props) {

    const classes = useStyles();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "primary", link: "/assessment/start", name: "Uji Pemahaman" },
    ];

    const ColorButton = withStyles((theme) => ({
        root: {
            color: theme.palette.getContrastText(red[500]),
            backgroundColor: red[500],
            '&:hover': {
                backgroundColor: red[700],
            },
        },
    }))(Button);

    const [value, setValue] = useState('1');
    const [value2, setValue2] = useState('1');
    const [value3, setValue3] = useState('1');

    const handleChange1 = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const send = () => {
        console.log({
            1: value,
            2: value2,
            3: value3
        })
    }

    return (
        <>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '30vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={list} />
                    <Grid item xs style={{ margin: '0px 0px 12px 0px' }}>
                        <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
                            Kembali x
                        </Button>
                    </Grid>
                    <Grid item>
                        <Card style={{ padding: '0px 150px' }}>
                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 0px 0px' }}
                            >
                                <Grid item>
                                    <b style={{ fontSize: '24px' }}>Uji Pemahaman : Pengantar Sistem Interaksi</b>
                                </Grid>
                                <Grid item>
                                    <p style={{ margin: '4px', fontSize: '12px' }}>Quiz uji pemahaman ini terdiri dari 10 soal pilihan ganda. Soal dipilih secara acak dari bank soal latihan</p>
                                </Grid>

                            </Grid>


                            <Grid
                                container
                                justify="center"
                                direction="row"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 16px 0px' }}
                            >
                                <Grid item>
                                    <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={send}>
                                        Mulai Quiz
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Typography component="div" style={{ width: '16px' }} />
                                </Grid>
                                <Grid item>
                                    <ColorButton variant="contained" startIcon={<ArrowBackIcon />} onClick={send}>
                                        Batal
                                    </ColorButton>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { StartAssessment };