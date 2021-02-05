import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Grid, IconButton, Paper, Card, CardActionArea, Avatar, } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const { pdf } = props;

    return (
        <>
            <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}

            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
                <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                    Previous
        </button>
                <button
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
        </button>
            </div>
        </>
    );
}

function PDFViewerExample(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [renderedPageNumber, setRenderedPageNumber] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const handleClick = () => {

    }
    const isLoading = renderedPageNumber !== pageNumber;
    const { pdf } = props;

    return (
        <>
            <Grid container direction="row">
                <Grid item xs style={{ padding: '20px 20px' }}>
                    <Grid container
                        spacing={2}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        alignContent="center"
                        style={{ padding: '12px' }}
                    >
                        <Grid item>
                            <h4 style={{ margin: 0 }}>Daftar topik</h4>
                        </Grid>
                        <Grid item>
                            <p style={{ margin: 0, fontSize: '12px', color: '#8F8F8F' }}>Bantuan : Klik pada topik untuk loncat ke topik pada slides</p>
                        </Grid>
                        <Grid item style={{ width: '100%' }}>
                            <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={handleClick}>
                                    <Grid container direction="row" spacing={0} alignItems="center" justify="center" >
                                        <Grid item>
                                            <h4 style={{ color: 'white' }}>1. Apa Itu Sistem Interaksi</h4>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item style={{ width: '100%' }}>
                            <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={handleClick}>
                                    <Grid container direction="row" spacing={0} alignItems="center" justify="center" >
                                        <Grid item>
                                            <h4 style={{ color: 'white' }}>2. Apa Itu Sistem Interaksi</h4>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item style={{ width: '100%' }}>
                            <Card style={{ backgroundColor: '#3D7DCA' }}>
                                <CardActionArea onClick={handleClick}>
                                    <Grid container direction="row" spacing={0} alignItems="center" justify="center" >
                                        <Grid item>
                                            <h4 style={{ color: 'white' }}>3. Apa Itu Sistem Interaksi</h4>
                                        </Grid>
                                    </Grid>
                                </CardActionArea>
                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid item xs={9} style={{ padding: '20px 20px' }}>
                    <Box >
                        <Box elevation={0} style={{ backgroundColor: "#6e6d6a" }}>
                            <Grid container justify="center" alignItems="center" >
                                <Grid item>
                                    <IconButton onClick={previousPage} disabled={pageNumber <= 1}>
                                        <ArrowBackIosIcon style={{ color: "white" }} />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <p style={{ color: "white", margin: 0 }}>
                                        {pageNumber || (numPages ? 1 : "--")} / {numPages || "--"}
                                    </p>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={nextPage} disabled={pageNumber >= numPages}>
                                        <ArrowForwardIosIcon style={{ color: "white" }} />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>

                        <Grid container justify="center" alignItems="center" style={{ backgroundColor: "#C4C4C4" }}>
                            <Grid item>
                                <Box overflow="auto" style={{ maxWidth: '65vw' }}>
                                    <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}
                                    >
                                        {isLoading && renderedPageNumber ? (
                                            <Page
                                                key={renderedPageNumber}
                                                className="prevPage"
                                                pageNumber={renderedPageNumber}
                                                width={600}
                                            />
                                        ) : null}
                                        <Page
                                            key={pageNumber}
                                            pageNumber={pageNumber}
                                            onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
                                            width={600}
                                        />
                                    </Document>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Grid>
            </Grid>

        </>

    );
}

export { PDFViewer, PDFViewerExample };