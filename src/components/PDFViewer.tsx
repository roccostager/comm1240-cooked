import useFetch from '../lib/useFetch';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf'

interface propTypes { question: string }

// This tells Vite to treat the worker as a separate asset
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

function PDFViewer({ question }: propTypes) {
    const { data, loading, error } = useFetch(question);
    const [numPages, setNumPages] = useState<null | number>(null);

    if (loading) return <p>Loading</p>
    if (error) return <p>{error.message}</p>

    return (<div>
        <Document file={data} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
            {Array.from(new Array(numPages), (_, index) => (
                <Page key={index + 1} pageNumber={index + 1} renderTextLayer={false} renderAnnotationLayer={false}></Page>
            ))}
        </Document>
    </div>)
}

export default PDFViewer;