import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import superMelogo from '../../assets/superMeLogo.png'
import { LayoutDashboard, Dumbbell, SportShoe, RotateCcwClock, ChartNoAxesCombined, Settings, Zap } from 'lucide-react'

function Sidebar() {
    const navigate = useNavigate()

    const [activeItem, setActiveItem] = useState('Dashboard')
    const menuItems = [
        { name: "Dashboard", icon: LayoutDashboard, path: "/" },
        { name: "Workouts", icon: Dumbbell, path: "/workouts" },
        { name: "Exercises", icon: SportShoe, path: "/exercises" },
        { name: "History", icon: RotateCcwClock, path: "/history" },
        { name: "Progress", icon: ChartNoAxesCombined, path: "/history" },
        { name: "Settings", icon: Settings, path: "/settings" }
    ]
    const sidebarHandler = (active) => {
        setActiveItem(active);
    }
    return (
        <div className='w-60 h-screen flex flex-col justify-between py-5 px-6 items-center bg-sidebar-bg text-white'>
            <div className=" flex flex-col">
                <div className='flex items-center gap-4 mb-8 cursor-pointer' onClick={() => navigate('/')}>
                    <img src={superMelogo} alt="SuperMe" className='h-10 rounded-lg rounded-r-md' />
                    <span className="text-2xl font-bold">SuperMe</span>
                </div>
                <nav className="">
                    {menuItems.map((item, index) => {
                        const ItemIcon = item.icon
                        return (
                            <NavLink key={index} to={item.path} onClick={() => sidebarHandler(item.name)} className={`flex h-15 w-50 p-4 items-center gap-4 cursor-pointer rounded-lg ${activeItem === item.name ? 'bg-[#4C41CC]' : 'bg-transparent text-slate-300 hover:bg-accent-purple hover:text-slate-50 hover:rounded-lg'}  `} >
                                <ItemIcon className='' />
                                <span >{item.name}</span>
                            </NavLink>
                        )
                    })}
                </nav>
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