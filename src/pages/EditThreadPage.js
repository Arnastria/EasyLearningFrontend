import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Redirect } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, Card, Snackbar, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, } from '@material-ui/core';
import { Appbar } from '../components/Appbar';
import Breadcrumb from '../components/Breadcrumb';
import TextFieldOutline from '../components/TextFieldOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import Typography from '@material-ui/core/Typography';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { Alert, Skeleton } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";
import APIUtility from '../utils/APIUtility';

//AcSenVisGIo
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E5E5E5'
    },
}));

function EditThreadPage(props) {

    const classes = useStyles();
    const { id_gaya_belajar, id_course, id_materi, id_thread } = useParams();
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");
    const [nextState, setNextState] = useState("");
    const title = useForm("");
    const category = useForm(0);
    const [post, setPost] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const list = [
        { color: "inherit", link: "/sister", name: "Sistem Interaksi" },
        { color: "inherit", link: "/materi", name: "Bab 1. Pengantar Sistem Informasi" },
        { color: "inherit", link: "/thread", name: "Forum Diskusi" },
        { color: "primary", link: "/thread/new", name: "Buat Thread" },
    ];

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
    useEffect(() => {
        if (post === null) {
            APIUtility.get('/api/post/' + id_thread, {}).then((response) => {
                let postJSON = JSON.parse(response.data.model)
                let postObject = {
                    'pk': postJSON[0]['pk'],
                    'material': postJSON[0]['fields']['material'],
                    'profile': postJSON[0]['fields']['profile'],
                    'author_name': postJSON[0]['fields']['author_name'],
                    'title': postJSON[0]['fields']['title'],
                    'body': postJSON[0]['fields']['body'],
                    'category': postJSON[0]['fields']['category'],
                    'date': postJSON[0]['fields']['date'],
                    'last_modified': postJSON[0]['fields']['last_modified'],
                };
                setPost(postObject)
                title.setValue(postObject.title)
                setValue(postObject.body)
            });
            setIsLoading(false);
        }

    }, [])


    const openDeleteDialog = () => {
        setIsDeleteDialogOpen(true);
    }

    const handleDelete = async () => {
        setIsLoading(true);
        await APIUtility.post('/api/post/delete/' + id_thread + '/').then((response) => {
            setIsLoading(false);
            setNextState('delete');
            setIsSuccessDialogOpen(true);
        })
    }


    const handleSubmit = async () => {
        console.log(title.value)
        setIsLoading(true);
        if (
            !title.value ||
            title.isError
        ) {
            setIsDialogOpen(true);
            setIsLoading(false);
            return;
        }
        await APIUtility.post('/api/post/edit/' + id_thread + '/',
            {
                title: title.value,
                category: 0,
                body: value
            }
        ).then((response) => {
            setIsLoading(false);
            setNextState('success-edit');
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
                    <Breadcrumb list={list} />
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
                                    {post == null ? <Skeleton /> :
                                        <TextFieldOutline
                                            value={title.value}
                                            error={title.isError}
                                            helperText={title.errorMessage}
                                            fullWidth
                                            id="outlined-basic"
                                            name="title"
                                            labels="Judul Diskusi *"
                                            onChange={title.handleChange}
                                        />}
                                </Grid>
                                <Grid item style={{ width: '100%', padding: '10px' }}>
                                    {post == null ? <Skeleton /> :
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
                                    }

                                </Grid>
                                <Typography component="div" style={{ height: '16px' }} />
                                <Grid item>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Button style={{ width: '100%', backgroundColor: "crimson" }} variant="contained" color="primary" onClick={openDeleteDialog}>Hapus diskusi</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button style={{ width: '100%' }} variant="contained" color="primary" onClick={handleSubmit}>Simpan diskusi</Button>
                                        </Grid>
                                    </Grid>

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
                    Berhasil mengubah thread !
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

            <Dialog
                open={isDeleteDialogOpen}
                onClose={() => { setIsDeleteDialogOpen(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Hapus diskusi ?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Diskusi yang sudah dihapus tidak akan bisa dikembalikan. Seluruh Komentar dari diskusi juga akan dihapus bersamaan dengan diskusi.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setIsDeleteDialogOpen(false) }} style={{ color: 'crimson' }}>
                        Tidak
                    </Button>
                    <Button onClick={handleDelete} color="primary" autoFocus>
                        Ya
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export { EditThreadPage };