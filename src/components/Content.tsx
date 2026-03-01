import DisplayQuestions from "./DisplayQuestions";

interface propTypes {
    week: number,
}

function Content({ week }: propTypes) {
    return (<div className="max-w-5xl m-auto min-h-full pt-4">
        <p className="font-serif text-3xl pl-10">Week {week} Questions</p>

        <DisplayQuestions week={week} />
    </div>)
}

export default Content;