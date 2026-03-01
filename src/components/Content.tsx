import QuestionViewer from './QuestionViewer';

import { type Dispatch, type SetStateAction } from "react";

interface propTypes {
    week: number,
    setWeek: Dispatch<SetStateAction<number>>
}

function Content({ week, setWeek }: propTypes) {
    return (<div className="max-w-5xl m-auto min-h-full">
        <QuestionViewer question="202504Q2_q" />
    </div>)
}

export default Content;