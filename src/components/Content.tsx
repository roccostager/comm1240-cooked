import PDFViewer from './PDFViewer';
import { useState } from 'react';
import WeekSelector from './WeekSelector';

function Content() {
    const [week, setWeek] = useState<number>(1);

    return (<div className="max-w-5xl m-auto min-h-full">
        <p className="font-serif text-lg">Hello, world</p>

        <WeekSelector week={week} setWeek={setWeek} />

        <div>In here there will be the PDFs</div>

        <PDFViewer question="202504Q2_q" />
    </div>)
}

export default Content;