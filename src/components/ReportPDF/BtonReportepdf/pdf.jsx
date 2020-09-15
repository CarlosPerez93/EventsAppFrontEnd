import React, { useState } from 'react'
import { Document, Page } from "react-pdf"


export default function ReportPDF() {

    const [numPages, setNumPages] = useState(5);
    const [pageNumber] = useState(null);

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
      
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
        </div>
    )
}
