import { Outlet } from 'react-router-dom'
import Sidebar from "./Sidebar";
import Header from './Header'
import Dashboard from '../../pages/Dashboard'
function AppLayout() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className='flex flex-col w-screen overflow-y-auto'>
                <Header />
                <main className='p-6 bg-[#FAFAFC] h-screen flex-1'>
                    <Outlet />
                </main>
            </div>


        </div>
    )
}

export default AppLayout;