import superMelogo from '../../assets/superMeLogo.png'
import { LayoutDashboard, Dumbbell, SportShoe, RotateCcwClock, ChartNoAxesCombined, Settings, Zap } from 'lucide-react'

function Sidebar() {

    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Workouts", icon: Dumbbell },
        { name: "Exercises", icon: SportShoe },
        { name: "History", icon: RotateCcwClock },
        { name: "Progress", icon: ChartNoAxesCombined },
        { name: "Settings", icon: Settings }
    ]

    return (
        <div className='w-60 h-screen flex flex-col justify-between py-5 px-6 items-center bg-sidebar-bg text-white'>
            <div className=" flex flex-col">
                <div className='flex items-center gap-4 mb-8 cursor-pointer'>
                    <img src={superMelogo} alt="SuperMe" className='h-10 rounded-lg rounded-r-md' />
                    <span className="text-2xl font-bold">SuperMe</span>
                </div>
                <div className="">
                    {menuItems.map((item, index) => {
                        const ItemIcon = item.icon
                        return (
                            <div key={index} className="flex h-15 w-50 p-4 items-center gap-4 cursor-pointer text-slate-300 hover:bg-accent-purple hover:text-slate-50 hover:rounded-lg" >
                                <ItemIcon className='' />
                                <span >{item.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div >
            <div className='h-30 w-35 bg-[#1E2730] flex flex-col justify-center items-center'>
                <div className='text-slate-400 text-sm flex gap-0.5 items-center'><Zap className='h-6 w-4' /><span >Consistency</span></div>
                <div className='text-slate-300 text-xs'>is Progress</div>
                <div></div>
            </div>
        </div>
    )
}

export default Sidebar;