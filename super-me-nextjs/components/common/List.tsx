import Image, { StaticImageData } from 'next/image'
import { ChevronRight } from 'lucide-react'
import DateComponent from './DateConponent'
import superMeLogo from '../../assets/superMeLogoCircular.png'

export interface ExerciseItem {
    id?: number | string;
    exercise?: string;
    img?: StaticImageData | string;
    sets?: number;
    reps?: number;
    weight?: number;
    muscleGroup?: string;

}

export interface workoutHistoryItem {
    id?: number | string;
    workout?: string;
    date?: string;
    totalSets?: number;
}

type ListItem = ExerciseItem & workoutHistoryItem

interface ListProps {
    data: ListItem[];
    chevron?: boolean;
    workoutHistory?: boolean;
    exerciseLib?: boolean;
}

function List({ data, chevron = true, workoutHistory = false, exerciseLib = false }: ListProps) {
    // const DEFAULT_IMAGE = '../../assets/superMeLogoCircular.png'
    return (
        <div className="flex flex-col border border-[#EFEFEF] rounded bg-white">

            {
                data.map((item, index) => {
                    let source = item.img ?? superMeLogo

                    return (
                        <div className="flex justify-between items-center p-4 border border-[#EFEFEF] rounded min-w-56 hover:bg-[#F3F0FE] hover:scale-101 shadow-sm max-h-[800px]" key={item.id ?? index}>
                            <div className='flex justify-center items-center gap-4'>
                                {workoutHistory ? <DateComponent date={item.date} /> : <Image src={source} width={56} height={56} className='h-14 w-14' alt='Exercise img' />}
                                <div className="flex flex-col">
                                    <span className='text-lg font-semibold'>{workoutHistory ? item.workout : item.exercise}</span>
                                    {workoutHistory ? <span className='text-md text-slate-500'>{item.totalSets + " sets"}</span> : exerciseLib ? <span className='text-md text-slate-500'>{item.muscleGroup}</span> : <span className='text-md text-slate-500'>{item.sets + ' '}*{' ' + item.reps}</span>}
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