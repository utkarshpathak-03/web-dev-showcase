import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
export default function MainLayout({ children, ...props }) {
    return (
        <div className="bg-[#F7F7F7] flex flex-row h-screen w-screen overflow-hidden">
            <Sidebar />
            <main className="p-6 overflow-y-auto flex-1 bg-[#FFF] my-4 ml-6 mr-4  rounded-lg">
                <Outlet />
            </main>
        </div>
    )
}