import Papa from 'papaparse';

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

async function parseCSV() {
    const csv = await loadCSV();
    if (!csv) throw Error()

    const json = Papa.parse(csv, {
        header: true,
    })

    return json;
}

export default parseCSV;