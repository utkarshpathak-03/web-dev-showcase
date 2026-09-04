import { Bell, ChevronDown } from 'lucide-react'
function Header() {
    return (
        <div className="min-h-12 flex justify-end items-center border-b border-gray-200 ">
            <div className="flex items-center gap-3 pr-6">
                <span className='h-5 w-5 flex justify-center items-center bg-[#F8F8F9] rounded-4xl'><Bell className='h-8 w-6' /></span>
                <span className='h-7 w-7 bg-[#4C41CD] text-white border flex justify-center items-center rounded-4xl'>U</span>
                <span>Utkarsh</span>
                <ChevronDown className='text-slate-600' />
            </div>
        </div>
    )
}

export default Header;