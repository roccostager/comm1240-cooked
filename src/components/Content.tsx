import PDFViewer from "./PDFViewer";

function Content() {
    return (<div className="max-w-5xl m-auto min-h-full">
        <p className="font-serif text-lg">Hello, world</p>

        <p>&larr; slider &rarr;</p>

        <div>In here there will be the PDFs</div>

        <PDFViewer question="202504Q2_q" />
    </div>)
}

export default Content;