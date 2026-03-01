import Papa from 'papaparse';

interface QuestionData {
    question: string,
    topic: string,
    week: string,
}

async function loadCSV() {
    try {
        const response = await fetch('/problems.csv');
        if (!response.ok) throw new Error();

        const csv = response.text();
        return csv;
    } catch (caughtError) {
        console.error('Failed to load CSV');
    }
}

async function parseCSV(): Promise<QuestionData[]> {
    const csv = await loadCSV();
    if (!csv) throw Error()

    const json = Papa.parse<QuestionData>(csv, {
        header: true,
    })

    return json.data;
}

export default parseCSV;