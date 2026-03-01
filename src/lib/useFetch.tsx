import { useState, useEffect } from 'react';

const CDN_URL = import.meta.env.VITE_CDN_URL;
if (!CDN_URL) throw new Error('Critical: env var CDN_URL missing.')

function useFetch(question: string) {
    const [data, setData] = useState<null | string>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<null | Error>(null);

    useEffect(() => {
        (async () => {
            try {
                const fetchURL = `${CDN_URL}${question}.pdf`;
                console.log(fetchURL);
                const response = await fetch(fetchURL);
                if (!response.ok) throw new Error();

                const blob = await response.blob();
                const url = URL.createObjectURL(blob);

                setData(url);
            } catch (caughtError) {
                if (caughtError instanceof Error) {
                    setError(caughtError);
                }
            } finally {
                setLoading(false);
            }

            // Add unmount logic
        })()
    }, [])

    return { data, loading, error };
}

export default useFetch;