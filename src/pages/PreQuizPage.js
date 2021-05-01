import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Grid, Button, FormLabel, FormControl, Card, FormControlLabel, Radio, RadioGroup, Dialog, DialogTitle, DialogContent, DialogActions, CardMedia } from '@material-ui/core';
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

function PreQuiz(props) {

    const classes = useStyles();
    const { id_gaya_belajar, id_course, id_materi } = useParams();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi, name: "Desain Interaksi" },
        { color: "primary", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/prequiz", name: "Pre-Test" },
    ];
    const handleDone = () => {
        props.changePage("/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi);
    }


    const [value, setValue] = useState('0');
    const [value2, setValue2] = useState('0');
    const [value3, setValue3] = useState('0');
    const [open, setOpen] = useState(false);
    const [score, setScore] = useState(0);
    const answer = [value, value2, value3];
    const correctAnswer = ["2", "2", "1"];

    const handleChange1 = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const getScore = () => {
        var score = 0;
        for (let [index, val] of answer.entries()) {
            if (val == correctAnswer[index]) {
                score += 1;
            }
        }
        console.log(score)
        handleClickOpen();
        setScore(score == 3 ? 100 : score * 33);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        handleDone();
    };

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
                        <Button onClick={props.backToPrevious} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
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
                                    <b style={{ fontSize: '24px' }}>Pre-Test : Pengantar Sistem Interaksi</b>
                                </Grid>
                                <Grid item>
                                    <p style={{ margin: '4px', fontSize: '12px' }}>Sebelum kamu mempelajari lebih lanjut mengenai sistem interaksi, jawablah 3 soal berikut ini </p>
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
                                    <Button variant="contained" color="primary" onClick={getScore}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>


                <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Hasil Pre-Test - Pengantar Sistem Interaksi
                    </DialogTitle>
                    <DialogContent dividers>
                        <Grid container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            alignContent="center">
                            <Grid item>
                                <CardMedia
                                    className={classes.media}
                                    image="https://files.catbox.moe/ot8xmt.svg"
                                />
                            </Grid>
                            <Grid item>
                                Selamat! Kamu mendapatkan nilai
                            </Grid>
                            <Grid item>
                                <h1 style={{ margin: 0 }}>{score}/100</h1>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose} color="secondary">
                            Tutup
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export { PreQuiz };