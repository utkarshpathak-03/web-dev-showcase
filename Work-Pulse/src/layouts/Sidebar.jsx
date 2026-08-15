import { useState } from "react";
import { Users, LayoutDashboard, BookPlus, HandCoins, Bell, Settings, CircleChevronLeft, CircleChevronRight, CircleQuestionMark } from "lucide-react";
import WorkPulseLogo from '../assets/icons/icons.jsx';

export default function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const [activeItem, setActiveItem] = useState("Dashboard");

    const sideBarClickHandler = (name) => {
        setActiveItem(name);
    }

    const menuItems = [
        { name: "MAIN MENU" },
        { name: "Dashboard", icon: LayoutDashboard },
        { name: "Employees", icon: Users },
        { name: "Leave Mangement", icon: BookPlus },
        { name: "Payroll", icon: HandCoins },
        { name: "OTHER" },
        { name: "Notifications", icon: Bell, pillIcon: true, pillData: "99" },
        { name: "Help & Support", icon: CircleQuestionMark },
        { name: "Settings", icon: Settings },


    ]

    return (
        <aside className={`${isCollapsed ? "w-15" : "w-64"} relative bg-[#F7F7F7] text-slate-900 h-screen flex flex-col transition-all duration-900 ease-in-out `}>
            <div className="flex flex-row justify-between items-center m-4">
                <div className={` flex flex-row items-center gap-2`}>
                    <WorkPulseLogo />
                    {isCollapsed ? null : <span className="text-lg font-bold transition-all duration-300 ease-in-out">WorkPulse</span>}
                </div>
                <div onClick={() => setIsCollapsed(!isCollapsed)} className="cursor-pointer rounded-full transition-all duration-300 ease-in-out relative">
                    {isCollapsed ? <CircleChevronLeft className="h-5 w-6 absolute left-1 top-[-10px]" /> : <CircleChevronRight className="h-5 w-6 absolute left-1 top-[-10px]" />}
                </div>
            </div>
            <hr className={`border-gray-300 mx-4 fade-out ${isCollapsed ? "mb-8" : "mb-0"}`} />
            <div className="m-4">
                {menuItems.map((item, index) => {
                    const ItemIcon = item.icon;
                    if (!item?.icon) {
                        return isCollapsed ? null : <div key={index} className={`text-gray-500 text-[10px] ml-2 mt-4 font-bold`}  >{item.name}</div>
                    } else {
                        return isCollapsed ?
                            <div className={`my-4 ${activeItem === item.name ? "bg-[#FFF]" : "bg-transparent"}  rounded-lg cursor-pointer hover:bg-[#FFF]`} onClick={() => sideBarClickHandler(item.name)}><ItemIcon key={`icon-${index}`} className="text-slate-500 shrink-0 h-7 w-7" /></div>
                            : <div key={index} className={`flex flex-row items-center p-2 text-slate-500 text-sm  ${activeItem === item.name ? "bg-[#FFF]" : "bg-transparent"}  rounded-lg cursor-pointer hover:bg-[#FFF]`}
                                onClick={() => sideBarClickHandler(item.name)} >
                                <ItemIcon className=" h-7 w-7 " />
                                <div className="ml-2" >
                                    {item.name}
                                </div>
                                {item && item.pillData && <span className="bg-[#DF2922] text-white text-xs rounded-full w-8 ml-10 text-center">{item.pillData}</span>}
                            </div>

                    }
                })}
            </div>
        </aside >
    )
}






