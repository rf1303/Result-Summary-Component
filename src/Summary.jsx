import { useDataJson } from './dataJson.jsx';

export function Summary() {
    const { jsonData } = useDataJson();
    console.log('jsonData:', jsonData)
    const bgSummarys = {
        Reaction: { textColor: 'text-red-400', bg: 'bg-red-50' },
        Memory: { textColor: 'text-yellow-400', bg: 'bg-yellow-50' },
        Verbal: { textColor: 'text-green-500', bg: 'bg-green-50' },
        Visual: { textColor: 'text-blue-800', bg: 'bg-blue-50' },
    }

    return (
        <section className='w-full h-full grid items-center justify-items-center bg-white md:rounded-r-4xl md:transform md:-translate-x-5'>
            <div className='w-full max-w-79 grid items-center gap-6 md:max-w-67'>
                <h2 className='text-navy-950 text-preset-4 font-bold md:text-preset-3'>Summary</h2>
                <div className='grid gap-4'>
                    {jsonData.map((data, index) => (
                        <div key={index} className={`text-base flex items-center justify-between px-2 py-4 rounded-xl ${bgSummarys[data.category]?.bg || 'bg-gray-50'} md:text-preset-4`}>
                            <div className='flex items-center gap-3'>
                                <img src={data.icon} alt={`icon ${data.category}`} />
                                <span className={`font-medium ${bgSummarys[data.category]?.textColor || 'text-gray-800'}`}>
                                    {data.category}
                                </span>
                            </div>
                            <p className='font-bold text-navy-950'>{data.score} <span className='text-navy-950/50'>/ 100</span></p>
                        </div>
                    ))}
                </div>
                <button type='button' className='bg-navy-950 rounded-4xl py-4 text-preset-4 font-bold'>Continue</button>
            </div>
        </section>
    );
}
