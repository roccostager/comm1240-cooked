import QuestionViewer from './QuestionViewer';
import { useState } from 'react';
import WeekSelector from './WeekSelector';

function Content() {
    const [week, setWeek] = useState<number>(1);

    return (<div className="max-w-5xl m-auto min-h-full">
        <WeekSelector week={week} setWeek={setWeek} />

        <div>In here there will be the Images</div>

        <QuestionViewer question="202504Q2_q" />
    </div>)
}

export default Content;