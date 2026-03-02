import DisplayQuestions from "./DisplayQuestions";

interface propTypes {
    week: number,
}

function Content({ week }: propTypes) {
    return (<div className="max-w-5xl m-auto min-h-full pt-4 px-4 md:px-10">
        <p className="font-serif text-3xl">Week {week} Questions</p>
        <p className="font-serif">Source: <a className="text-sky-600 hover:underline" href="https://actuaries.org.uk/past-exam-papers-and-examiners-reports/" rel="noreferrer" target="_blank">Institute and Faculty of Actuaries</a>.</p>

        <DisplayQuestions week={week} />
    </div>)
}

export default Content;