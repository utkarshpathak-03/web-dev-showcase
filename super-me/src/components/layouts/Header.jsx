import { Bell, ChevronDown } from 'lucide-react'
function Header() {
    return (
        <div className="flex justify-end items-center h-15 border-b border-gray-200 ">
            <div className="flex items-center gap-2 pr-6">
                <span className='h-10 w-10 flex justify-center items-center bg-[#F8F8F9] rounded-4xl'><Bell className='h-8 w-6' /></span>
                <span className='h-10 w-10 bg-[#4C41CD] text-white border flex justify-center items-center rounded-4xl'>U</span>
                <span>Utkarsh</span>
                <ChevronDown className='text-slate-600' />
            </div>
        </div>
    )
}

export default Header;