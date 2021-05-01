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

function AssessmentPage(props) {

    const classes = useStyles();
    const { id_gaya_belajar, id_course, id_materi } = useParams();

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi, name: "Desain Interaksi" },
        { color: "primary", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/assessment", name: "Uji Pemahaman" },
    ];

    const handleDone = () => {
        props.changePage("/course/" + id_gaya_belajar + "/" + id_course);
    }


    const [value, setValue] = useState('0');
    const [value2, setValue2] = useState('0');
    const [value3, setValue3] = useState('0');
    const [value4, setValue4] = useState('0');
    const [value5, setValue5] = useState('0');
    const [value6, setValue6] = useState('0');
    const [value7, setValue7] = useState('0');
    const [value8, setValue8] = useState('0');
    const [value9, setValue9] = useState('0');
    const [value10, setValue10] = useState('0');
    const [open, setOpen] = useState(false);

    const [score, setScore] = useState(0);
    const answer = [value, value2, value3, value4, value5, value6, value7, value8, value9, value10];
    const correctAnswer = ["2", "1", "3", "1", "3", "1", "1", "2", "1", "1"];

    const getScore = () => {
        var score = 0;
        for (let [index, val] of answer.entries()) {
            if (val == correctAnswer[index]) {
                score += 1;
            }
        }
        console.log(score)
        handleClickOpen();
        setScore(score);
    }
    const handleChange1 = (event) => {
        setValue(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleChange5 = (event) => {
        setValue5(event.target.value);
    };

    const handleChange6 = (event) => {
        setValue6(event.target.value);
    };

    const handleChange7 = (event) => {
        setValue7(event.target.value);
    };

    const handleChange8 = (event) => {
        setValue8(event.target.value);
    };

    const handleChange9 = (event) => {
        setValue9(event.target.value);
    };

    const handleChange10 = (event) => {
        setValue10(event.target.value);
    };



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
                                                <FormLabel component="legend">Bidang desain interaksi berkaitan dengan salah satu pokok bahasan, yakni ....</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange1}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Pemasaran produk" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Perancangan antarmuka" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Manajemen tim pengembang" />
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
                                                <FormLabel component="legend">Apakah sifat dari bidang desain interaksi ?</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value2} onChange={handleChange2}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Multidisiplin" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Monodisiplin" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Statis" />
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
                                                <FormLabel component="legend">Berikut merupakan keuntungan penerapan desain interaksi, kecuali ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value3} onChange={handleChange3}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Produk sesuai kebutuhan pengguna" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Menawarkan banyak solusi" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Produk lama untuk dipelajari" />
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
                                    <h1>4</h1>
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
                                                <FormLabel component="legend">Manakah pernyataan yang benar ?</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value4} onChange={handleChange4}>
                                                    <FormControlLabel value="1" control={<Radio />} label="UI adalah subset dari UX" />
                                                    <FormControlLabel value="2" control={<Radio />} label="UI sama dengan UX" />
                                                    <FormControlLabel value="3" control={<Radio />} label="UI dan UX tidak berkaitan" />
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
                                    <h1>5</h1>
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
                                                <FormLabel component="legend">Berikut adalah karakteristik perancangan desain interaksi , kecuali ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value5} onChange={handleChange5}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Iteratif" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Fokus pada identifikasi usability goals" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Fokus pada ide dan keinginan pengembang" />
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
                                    <h1>6</h1>
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
                                                <FormLabel component="legend">Berikut ini yang merupakan salah satu prinsip desain interaksi menurut Preece et al (1988) adalah</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value6} onChange={handleChange6}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Visibility" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Resilience" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Flexibility" />
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
                                    <h1>7</h1>
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
                                                <FormLabel component="legend">Membatasi aktivitas pengguna sesuai dengan konteks dan situasi tertentu adalah prinsip ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value7} onChange={handleChange7}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Constraints" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Consistency" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Learnability" />
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
                                    <h1>8</h1>
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
                                                <FormLabel component="legend">Internal consistency berkaitan dengan keselarasan desain interaksi pada ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value8} onChange={handleChange8}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Satu sistem secara keseluruhan" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Satu area dalam suatu sistem" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Satu area dalam sistem-sistem berbeda" />
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
                                    <h1>9</h1>
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
                                                <FormLabel component="legend">Affordance merupakan prinsip yang berkaitan dengan penyediaan ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value9} onChange={handleChange9}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Penjelasan penggunaan" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Feedback" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Keterlihatan" />
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
                                    <h1>10</h1>
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
                                                <FormLabel component="legend">Perancangan desain interaksi harus didasarkan pada ...</FormLabel>
                                                <RadioGroup aria-label="gender" name="gender1" value={value10} onChange={handleChange10}>
                                                    <FormControlLabel value="1" control={<Radio />} label="Pemahaman akan pengguna sistem" />
                                                    <FormControlLabel value="2" control={<Radio />} label="Keinginan vendor" />
                                                    <FormControlLabel value="3" control={<Radio />} label="Asumsi dan keahlian tim pengembang" />
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
                        Hasil Uji Pemahaman - Pengantar Sistem Interaksi
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
                                <h1 style={{ margin: 0 }}>{score}/10</h1>
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

export { AssessmentPage };