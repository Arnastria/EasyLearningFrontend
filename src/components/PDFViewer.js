import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Box, Grid, Button, Container, Paper, Avatar, Card, CardActionArea, CardActions, GridList, GridListTile } from '@material-ui/core';
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

    const isLoading = renderedPageNumber !== pageNumber;
    const { pdf } = props;

    return (
        <>

            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Box overflow="auto" style={{ maxWidth: '65vw' }}>
                        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}
                        >
                            {isLoading && renderedPageNumber ? (
                                <Page
                                    key={renderedPageNumber}
                                    className="prevPage"
                                    pageNumber={renderedPageNumber}
                                // width={400}
                                />
                            ) : null}
                            <Page
                                key={pageNumber}
                                pageNumber={pageNumber}
                                onRenderSuccess={() => setRenderedPageNumber(pageNumber)}
                            // width={400}
                            />
                        </Document>
                    </Box>

                </Grid>
            </Grid>


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

export { PDFViewer, PDFViewerExample };