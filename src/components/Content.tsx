import DisplayQuestions from "./DisplayQuestions";

interface propTypes {
    week: number,
}

function Content({ week }: propTypes) {
    return (<div className="max-w-5xl m-auto min-h-full pt-4 px-4 md:px-10">
        <p className="font-serif text-3xl">Week {week} Questions</p>

        <DisplayQuestions week={week} />
    </div>)
}

export default Content;