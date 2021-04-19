import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Redirect } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Snackbar } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import TextFieldOutline from '../components/TextFieldOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Alert } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function WriteThreadPage(props) {

    const classes = useStyles();
    const { id_gaya_belajar, id_course, id_materi } = useParams();
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");
    const title = useForm("");
    const category = useForm(0);
    const [nextState, setNextState] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [listBreadCrumb, setListBreadCrumb] = useState(
        [
            { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course, name: "Sistem Interaksi" },
            { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi, name: "Materi" },
            { color: "inherit", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread", name: "Forum Diskusi" },
            { color: "primary", link: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread/new", name: "Buat Thread" },
        ]
    );

    function useForm(defaultValue, regex) {
        const [value, setValue] = useState(defaultValue);
        const [isError, setIsError] = useState(false);
        const [errorMessage, setErrorMessage] = useState("");

        const handleChange = (event, value) => {
            if (event.target.value == "") {
                setIsError(true);
                setErrorMessage("Tidak boleh kosong");
            } else {
                setIsError(false);
                setErrorMessage("");
            }
            setValue(event.target.value);
        };

        const handleChangeMultiSelector = (event, value) => {
            event.persist();
            setValue(value);
        };

        const handleChangeSelector = (event, value) => {
            event.persist();
            if (value == null) {
                return;
            }
            setValue(value);
        };

        return {
            value,
            setValue,
            isError,
            setIsError,
            errorMessage,
            setErrorMessage,
            handleChange,
            handleChangeMultiSelector,
            handleChangeSelector,
        };
    }

    const handleClick = () => {

    }

    const handleSubmit = async () => {
        console.log(value)
        setIsLoading(true);
        if (
            !title.value ||
            title.isError
        ) {
            setIsDialogOpen(true);
            setIsLoading(false);
            return;
        }
        await APIUtility.post('/api/material/' + id_materi + '/createpost/',
            {
                title: title.value,
                category: 0,
                body: value
            }
        ).then((response) => {
            setIsLoading(false);
            setNextState("success-create");
            setIsSuccessDialogOpen(true);
        });
        // setIsLoading(false);
        // props.changePage("/thread")
    }

    const preventDefault = (event) => {
        event.preventDefault()
    };

    const converter = new Showdown.Converter({
        tables: true,
        simplifiedAutoLink: true,
        strikethrough: true,
        tasklists: true
    });


    if (isSuccessDialogOpen) {
        return (
            <>
                <Redirect
                    to={{
                        pathname: "/course/" + id_gaya_belajar + "/" + id_course + "/materi/" + id_materi + "/thread/",
                        search: "?state=" + nextState,
                    }}
                />
            </>
        );
    }
    if (isLoading) {
        return (<>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh', marginTop: '60px', padding: '30px 0px' }}
                >
                    <Grid item>
                        <CircularProgress />
                    </Grid>
                </Grid>

            </div>
        </>);

    }
    return (
        <>
            <div className={classes.root}>
                <Appbar changePage={props.changePage} />
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    justify="flex-start"
                    style={{ backgroundColor: '#E5E5E5', minHeight: '100vh', marginTop: '60px', padding: '30px 15%' }}
                >
                    <Breadcrumb list={listBreadCrumb} />
                    <Grid item style={{ margin: '0px 0px 12px 0px' }}>
                        <Button onClick={props.backToPrevious} variant="contained" color="primary" startIcon={<ArrowBackIcon />} onClick={handleClick}>
                            Kembali
                        </Button>
                    </Grid>
                    <Grid item >
                        <Card>
                            <Grid
                                container
                                justify="center"
                                direction="column"
                                alignItems="center"
                                alignContent="center"
                                style={{ padding: '16px 0px 16px 0px' }}
                            >
                                <Grid item>
                                    <h2 style={{ margin: '10px 0px 0px 0px' }}>Buat Thread</h2>
                                </Grid>
                                <Grid item style={{ width: '80%', padding: '10px' }}>
                                    <TextFieldOutline
                                        value={title.value}
                                        error={title.isError}
                                        helperText={title.errorMessage}
                                        fullWidth
                                        id="outlined-basic"
                                        name="title"
                                        labels="Judul Diskusi *"
                                        onChange={title.handleChange}
                                    />
                                </Grid>
                                <Grid item style={{ width: '100%', padding: '10px' }}>
                                    <ReactMde
                                        value={value}
                                        onChange={setValue}
                                        selectedTab={selectedTab}
                                        onTabChange={setSelectedTab}
                                        generateMarkdownPreview={markdown =>
                                            Promise.resolve(converter.makeHtml(markdown))
                                        }
                                        childProps={{
                                            writeButton: {
                                                tabIndex: -1
                                            }
                                        }}
                                    />
                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={handleSubmit}>Tulis diskusi</Button>
                                </Grid>
                            </Grid>

                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Snackbar
                open={isSuccessDialogOpen}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccessDialogOpen(false);
                }}
            >
                <Alert
                    severity="success"
                    onClose={() => {
                        setIsSuccessDialogOpen(false);
                    }}
                >
                    Berhasil menulis thread !
            </Alert>
            </Snackbar>
            <Snackbar
                open={isDialogOpen}
                autoHideDuration={6000}
                onClose={() => {
                    setIsDialogOpen(false);
                }}
            >
                <Alert
                    severity="error"
                    onClose={() => {
                        setIsDialogOpen(false);
                    }}
                >
                    Pastikan kamu mengisi data dengan benar
            </Alert>
            </Snackbar>
        </>
    );
}

export { WriteThreadPage };