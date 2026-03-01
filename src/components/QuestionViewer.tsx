const CDN_URL = import.meta.env.VITE_CDN_URL;
if (!CDN_URL) throw new Error('Critical: env var CDN_URL missing.')

import { useState } from "react";

interface propTypes { question: string, topic: string };
interface propQuestion { question: string };

function QuestionViewer({ question, topic }: propTypes) {
    return (<div className="w-full h-auto py-6">
        <p className="text-lg font-medium px-16">Topic: {topic}</p>

        <QuestionComponent question={question} />
        <MarkschemeComponent question={question} />
    </div>)
}

function QuestionComponent({ question }: propQuestion) {
    const image_url = `${CDN_URL}${question}_q.png`

    return (<div className="w-full h-auto">
        <img src={image_url} alt="" className="w-full h-auto" />
    </div>)
}

function MarkschemeComponent({ question }: propQuestion) {
    const image_url = `${CDN_URL}${question}_m.png`

    const [shown, setShown] = useState<boolean>(false);

    return (<div className="w-full h-auto">
        <div className="px-20 pb-2">
            <input type="checkbox" checked={shown} onChange={event => setShown(event.target.checked)} />
            <p className="font-serif inline">{shown ? 'Hide answer' : 'Show answer'}</p>
        </div>

        <img src={image_url} alt="" className={`${shown ? 'block' : 'hidden'} w-full h-auto`} />
    </div>)
}

export default QuestionViewer;