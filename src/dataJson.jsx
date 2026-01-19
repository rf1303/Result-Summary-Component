import { useState,  useEffect } from 'react';

export function useDataJson() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('./data.json');
                if (!response.ok) {
                    throw new Error('Error http: ${response.status}');
                }
                const data = await response.json();

                setJsonData(data);

            } catch (error) {
                console.error('Error Load Data.json: ', error);
            }
        }
        loadData();
    }, [])
    return { jsonData };
}

