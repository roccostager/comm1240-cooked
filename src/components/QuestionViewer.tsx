const CDN_URL = import.meta.env.VITE_CDN_URL;
if (!CDN_URL) throw new Error('Critical: env var CDN_URL missing.')

import { useState } from "react";

interface propTypes { question: string, topic: string };
interface propQuestion { question: string };

function QuestionViewer({ question, topic }: propTypes) {
    return (<div className="w-full h-auto py-6">
        <p className="text-lg font-medium md:px-16">Topic: {topic}</p>

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
        <label className="px-10 md:px-20 pb-2 flex items-center">
            <input className="peer hidden" type="checkbox" checked={shown} onChange={event => setShown(event.target.checked)} />

            <svg className="peer-checked:hidden size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#D9D9D9"><path d="m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z" /></svg>
            <svg className="hidden peer-checked:block size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#D9D9D9"><path d="M607.5-372.5Q660-425 660-500t-52.5-127.5Q555-680 480-680t-127.5 52.5Q300-575 300-500t52.5 127.5Q405-320 480-320t127.5-52.5Zm-204-51Q372-455 372-500t31.5-76.5Q435-608 480-608t76.5 31.5Q588-545 588-500t-31.5 76.5Q525-392 480-392t-76.5-31.5ZM214-281.5Q94-363 40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200q-146 0-266-81.5ZM480-500Zm207.5 160.5Q782-399 832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q113 0 207.5-59.5Z" /></svg>

            <p className="px-2 font-serif italic text-neutral-400">{shown ? 'Answer Shown' : 'Answer Hidden'}</p>
        </label>

        <img src={image_url} alt="" className={`${shown ? 'block' : 'hidden'} w-full h-auto`} />
    </div>)
}

export default QuestionViewer;