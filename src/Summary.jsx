import { useDataJson } from './dataJson.jsx';

export function Sumary() {
    const { jsonData } = useDataJson();
    const bgSumarys = {
        Reaction: { category: 'text-red-400', bg: 'bg-red-50' },
        Memory: { category: 'yellow-400', bg: 'bg-yellow-50' },
        verbal: { category: 'green-500', bg: 'bg-red-50' },
        Visual: { category: 'text-blue-800', bg: 'bg-blue-50' },
    }

    return (
        <main className=''>
            <div className='max-w-79 grid items-center justify-items-center gap-6'>
                <h2 className=''>Summary</h2>
            </div>
        </main>
    );
}
