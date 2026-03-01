const CDN_URL = import.meta.env.VITE_CDN_URL;
if (!CDN_URL) throw new Error('Critical: env var CDN_URL missing.')

interface propTypes { question: string }

function QuestionViewer({ question }: propTypes) {

    const image_url = `${CDN_URL}${question}.png`

    return (<div className="w-full h-auto">
        <img src={image_url} alt="" className="w-full h-auto" />
    </div>)
}

export default QuestionViewer;