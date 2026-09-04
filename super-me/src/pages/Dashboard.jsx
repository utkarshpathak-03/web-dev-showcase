import { currentWorkoutData, workoutHistoryData } from '../data/workoutData.js'
import { useNavigate } from 'react-router-dom'
import ListContainer from '../components/common/List.jsx'
import superMeLogo from '../assets/superMeLogoCircular.png'

function Dashboard() {

    const navigate = useNavigate()
    const buttonClickHandler = () => {
        navigate('/history')
    }
    return (
        <div className='flex flex-col gap-6'>
            <div>
                <h1 className="font-bold text-3xl mb-2">Good Morning 👋</h1>
                <h2 className="text-lg font-light text-slate-500">Let's get stronger today</h2>
            </div>
            <div className='flex gap-4'>
                <div className="flex flex-col border border-[#EFEFEF] rounded bg-white w-[60%] ">
                    <div className=' flex flex-col p-4 '>
                        <span className='font-semibold text-lg mb-4 ml-2'>Today's Workout</span>
                        <div className='flex items-center bg-[#E7E4FD] gap-4 h-30 w-[100%] p-4 rounded-t-2xl '>
                            <img src={superMeLogo} alt="SuperMe" className='h-18 rounded-full' />
                            <span className='font-semibold text-3xl'>Push Day</span>

                        </div>
                        <ListContainer data={currentWorkoutData} chevron={false} />
                    </div>
                </div>
                <div className="flex flex-col border border-[#EFEFEF] rounded bg-white w-[60%] overflow-y-auto max-h-[450px]">
                    <div className=' flex flex-col p-4 '>
                        <span className='font-semibold text-lg mb-4 ml-2'>Workout History</span>

                        <ListContainer data={workoutHistoryData.slice(0, 3)} workoutHistory />
                        <div onClick={buttonClickHandler} className='flex justify-center items-center bg-[#4C41CC] text-white rounded-md border border-slate-200 text-xs h-10 mt-6 hover:scale-101'>
                            <span>View All History</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;