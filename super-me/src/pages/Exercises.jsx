
import { Search, Plus } from "lucide-react";
import { useState } from "react";
import List from "../components/common/List.jsx";
import { exercises } from '../data/workoutData.js'
function Exercises() {
    const [searchQuery, setSearchQuery] = useState('Search exercises...')
    const setSearchHandler = (querry) => {
        setSearchQuery(querry)
    }
    const [activeTab, setActiveTab] = useState('All')
    const tabs = [
        { id: 'tab1', label: 'All' },
        { id: 'tab2', label: 'Push' },
        { id: 'tab3', label: 'Pull' },
        { id: 'tab4', label: 'Legs' },
        { id: 'tab5', label: 'core' }
    ]
    const setActiveTabHandler = (value) => {
        setActiveTab(value)
    }

    return (
        <div className="flex flex-col border border-[#EFEFEF] rounded bg-white overflow-y-auto max-h-[600px] p-4">
            <h1 className='font-semibold text-lg mb-2 '>Exercise Library</h1>
            <h2 className='text-sm text-slate-500 mb-2 '>Browse and manage vour exercised</h2>
            <div className="flex gap-2 flex-wrap justify-between">
                <div className="flex relative items-center w-[84%]">
                    <Search className="absolute h-5 w-4 left-1.5" color="gray" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchHandler(e.target.value)}
                        className="w-full border h-9 border-gray-200 rounded-sm pl-8 text-sm text-gray-400"
                    />
                </div>
                <button className="flex bg-[#4C41CC] text-white items-center justify-center rounded-md p-2.5 w-[15%] min-w-30 text-xs">
                    <Plus className="h-4" /> <span>{' '}Add Exercise</span>
                </button>

            </div>
            <div className="flex gap-8 my-4 ">
                {tabs.map((tab) => {
                    return (
                        <div key={tab.id} onClick={() => setActiveTabHandler(tab.label)} className={`flex justify-center items-center py-2 flex-1 border border-gray-200 rounded text-xs text-slate-500 ${activeTab === tab.label ? 'bg-[#F3F0FE] scale-110' : 'bg-transparent hover:bg-[#F3F0FE] hover:scale-110 cursor-pointer shadow-sm'}`}>
                            {tab.label}
                        </div>
                    )
                })}
            </div>
            {/* <div className=" "> */}
            <List data={exercises.slice(0, 6)} exerciseLib />
            {/* </div> */}
        </div>
    )
}

export default Exercises;