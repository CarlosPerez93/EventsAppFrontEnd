import React, { useState } from 'react'
import { Document, Page } from "react-pdf"
import CardReporteClientes from "../CardReporteClientes/CardReporteClientes"

export default function ReportPDF() {

    const [numPages, setNumPages] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div>
            <Document
            
                file="somefile.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
                <CardReporteClientes/>
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}
