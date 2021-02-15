import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Grid, Button, FormLabel, FormControl, Card, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

function AssessmentPage(props) {

    const classes = useStyles();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "primary", link: "/assessment/start", name: "Uji Pemahaman" },
    ];


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
                            Kembali
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
                                    <p style={{ margin: '4px', fontSize: '12px' }}>Pilihlah salah satu jawaban yang menurut Kamu paling benar. Selamat mengerjakan :) </p>
                                </Grid>

                            </Grid>


                            <Grid
                                container
                                direction="row"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>1</h1>
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
                                                <FormLabel component="legend">Ciri desain yang baik untuk sebuah aplikasi transportasi online adalah yang ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Paling banyak warnanya" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Mudah digunakan" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Penuh dan rapat dengan teks" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>2</h1>
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
                                                <FormLabel component="legend">UI/UX adalah istilah yang sering kita dengar. Apakah UI (User Interface) sama dengan UX (User Experience) ?</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value2} onChange={handleChange2}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Ya, Sama" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Tidak Sama" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                alignContent="center"
                                style={{ padding: '16px 0px' }}
                            >
                                <Grid item>
                                    <h1>3</h1>
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
                                                <FormLabel component="legend">Siapakah yang merupakan pihak yang perlu menjadi fokus utama saat mengembangkan desain produk ?</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value3} onChange={handleChange3}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Pengguna" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Pengembang" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Vendor" />
                                                </RadioGroup>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 16px 0px' }}
                            >
                                <Grid item>
                                    <Button variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={send}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export { AssessmentPage };