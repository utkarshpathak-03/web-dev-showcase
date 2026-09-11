import { Eye } from 'lucide-react'

export interface WorkoutHistoryEntry {
    id: number;
    date: string;
    workout: string;
    exercises: number;
    totalSets: number;
    duration: string;

}
interface TableCompoProps {
    data: WorkoutHistoryEntry[]
}
export default function TableComponent({ data }: TableCompoProps) {

    return (
        <table className='my-4 border border-[#EFEFEF] rounded w-full text-sm border-collapse' >
            <thead className='bg-[#F7F7F7] text-slate-400 text-xs text-left'>
                <tr >
                    <th className='p-2'>Date</th>
                    <th className='p-2'>Workout</th>
                    <th className='p-2'>Exercises</th>
                    <th className='p-2'>Total Sets</th>
                    <th className='p-2'>Duration</th>
                    <th className='p-2'>Actions</th>
                </tr>
            </thead>
            <tbody className='text-slate-700'>
                {
                    data.map((record, index) => {
                        return (
                            <tr key={record.id ?? index} className='border-b border-[#EFEFEF] hover:bg-[#F3F0FE] hover:scale-101'>
                                <td className='p-3 '>{record.date}</td>
                                <td className='p-3 font-semibold'>{record.workout}</td>
                                <td className='p-3 '>{record.exercises}</td>
                                <td className='p-3 '>{record.totalSets}</td>
                                <td className='p-3 '>{record.duration}</td>
                                <td className='p-3 '><Eye className='h-4' /> </td>

                            </tr>)
                    })
                }
            </tbody>
        </table>
    )
}