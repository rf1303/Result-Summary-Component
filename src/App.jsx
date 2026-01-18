import { YourResult } from './YourResult.jsx'
import { Summary } from './Summary.jsx'

function App() {

    return (
        <div className='min-h-screen md:grid md:place-content-center font-hankenGrotest bg-white md:bg-blue-200'>
            <main className='grid gap-6 md:grid-cols-[21.125rem_22.375rem] md:gap-0 md:items-center md:justify-items-center'>
                <YourResult />
                <Summary />
            </main>
        </div>
    )
}

export default App
