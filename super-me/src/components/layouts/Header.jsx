import { Bell, ChevronDown, User, LogOut, RotateCcw } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside of it
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Helper to handle client-side routing & auto-close menu
    const handleMenuClick = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    return (
        <div className="min-h-12 flex justify-end items-center border-b border-gray-200 bg-white">
            <div className="flex items-center gap-3 pr-6">
                {/* Bell Icon */}
                <span className="h-8 w-8 flex justify-center items-center bg-[#F8F8F9] rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                    <Bell className="h-4 w-4 text-slate-600" />
                </span>

                {/* Profile Trigger & Dropdown Container */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="flex items-center gap-3 cursor-pointer p-1 rounded-lg hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                        <span className="h-7 w-7 bg-[#4C41CD] text-white flex justify-center items-center rounded-full font-medium text-xs">
                            U
                        </span>
                        <span className="text-sm font-medium text-slate-800">Utkarsh</span>
                        <ChevronDown className={`h-4 w-4 text-slate-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 py-2 z-50 text-slate-700 text-sm">
                            <div className="px-4 py-2 border-b border-slate-100">
                                <p className="font-semibold text-slate-900">Utkarsh Pathak</p>
                                <p className="text-xs text-slate-400">FatToFit@gmail.com</p>
                            </div>

                            <button
                                onClick={() => handleMenuClick('/settings')}
                                className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors"
                            >
                                <User className="h-4 w-4 text-slate-500" />
                                <span>Profile</span>
                            </button>

                            <button
                                onClick={() => handleMenuClick('/history')}
                                className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors"
                            >
                                <RotateCcw className="h-4 w-4 text-slate-500" />
                                <span>History</span>
                            </button>

                            <div className="border-t border-slate-100 mt-1 pt-1">
                                <button
                                    onClick={() => handleMenuClick('/history')}
                                    className="w-full text-left flex items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-600 transition-colors"
                                >
                                    <LogOut className="h-4 w-4 text-red-500" />
                                    <span>Logout</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;