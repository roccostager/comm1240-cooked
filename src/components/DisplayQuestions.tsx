import parseCSV from '../lib/parseCSV';
import QuestionViewer from './QuestionViewer';

interface QuestionData {
    question: string,
    topic: string,
    week: string,
}
const questionData: QuestionData[] = await parseCSV();

interface propTypes {
    week: number,
}

function DisplayQuestions({ week }: propTypes) {
    return (<>
        {getWeekQuestions(week).map(element => (
            <QuestionViewer question={`${element.question}`} />
        ))}
    </>);
}

function getWeekQuestions(week: number): QuestionData[] {
    const questions = questionData.filter(element => parseInt(element.week) === week);
    return questions;
}

export default DisplayQuestions;