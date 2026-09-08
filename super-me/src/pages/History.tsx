import { workoutHistoryData } from "../data/workoutData"
import TableComp from '../components/common/TableComp'

function History() {
    return (
        <div className="flex flex-col border border-[#EFEFEF] rounded bg-white overflow-y-auto max-h-[600px] p-4">
            <h1 className='font-semibold text-lg mb-2 '>Workout History</h1>
            <span className='text-sm text-slate-500 mb-2 '>Track and analyze your progress</span>
            <TableComp data={workoutHistoryData.slice(0, 6)} />
            <div className='flex items-center justify-center bg-[#4C41CC] text-white rounded-md border border-slate-200 text-xs h-10 mt-6'>
                <span>Load more</span>
            </div>
        </div>
    )
}
export default History;