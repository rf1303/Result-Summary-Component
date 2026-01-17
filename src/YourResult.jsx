import { useDataJson } from './dataJson.jsx';
import { useState } from 'react'

export function YourResult() {
    const { jsonData } = useDataJson();
    const average = jsonData.length === 0
        ? 0
        : Math.round((jsonData.reduce((previous, current) => previous + current.score, 0)) / jsonData.length);
    return (
        <div className="w-full h-clampResult-h grid items-center justify-items-center bg-linear-180 from-gradient-02  to-gradient-22 rounded-b-4xl">
            <div className='w-65 grid items-center justify-items-center gap-6'>
                <h1 className='text-preset-4 text-navy-200 font-bold md:text-preset-3'>Your Result</h1>
                <div className='w-35 h-35 flex flex-col items-center justify-center rounded-full bg-linear-0 from-Persian-blue to-Violet-blue'>
                    <p className='text-preset-2 text-white font-extrabold tracking-normal leading-none md:text-preset-1'>{average}</p>
                    <p className='text-base text-navy-200 leading-none md:text-preset-4'>of 100</p>
                </div>
                <div className='grid items-center justify-items-center'>
                    <p className='text-preset-3 text-white md:text-preset-5'>Great</p>
                    <p className='text-base text-navy-200 md:text-preset-4'>You scored higher than 65% of the people who have taken these tests.</p>
                </div>

            </div>
        </div>
    );
}


