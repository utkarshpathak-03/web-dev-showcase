
import { ChevronRight } from 'lucide-react'
import DateComponent from './DateConponent.jsx'
function List({ data, chevron = true, workoutHistory }) {
    return (
        <div className="flex flex-col border border-[#EFEFEF] rounded bg-white">

            {
                data.map((item, index) => {
                    // if((!item.icon))
                    let source;
                    if (item.img) {
                        source = item.img

                    }
                    return (
                        <div className="flex justify-between items-center p-4 border border-[#EFEFEF] rounded min-w-56" key={index}>
                            <div className='flex justify-center items-center gap-4'>
                                {workoutHistory ? <DateComponent date={item.date} /> : <img src={source} className='h-20 b-16' alt='Exercise img' />}
                                <div className="flex flex-col">
                                    <span className='text-lg font-semibold'>{workoutHistory ? item.workout : item.exercise}</span>
                                    {workoutHistory ? <span className='text-md text-slate-500'>{item.totalSets + " sets"}</span> : <span className='text-md text-slate-500'>{item.sets + ' '}*{' ' + item.reps}</span>}
                                </div>
                            </div>
                            {chevron ? <ChevronRight className="h-6 w-6" /> : <div className="h-10 w-16 rounded bg-[#F8F7FA] flex justify-center items-center">
                                {item.weight}
                            </div>}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List;