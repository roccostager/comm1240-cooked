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
            <QuestionViewer question={element.question} topic={element.topic} />
        ))}
    </>);
}

function getWeekQuestions(week: number): QuestionData[] {
    const questions = questionData.filter(element => parseInt(element.week) === week);
    questions.sort((a, b) => {
        return a.topic.localeCompare(b.topic, undefined, {
            numeric: true,
            sensitivity: 'base',
        });
    });
    return questions;
}

export default DisplayQuestions;