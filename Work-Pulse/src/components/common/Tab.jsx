import React, { useState } from 'react';

export default function Tab({ data = ['On Leave', 'Active', 'On Boarding'], TabData }) {
    const [activeTab, setActiveTabular] = useState(data[0]);
    console.log(activeTab, 'activeTab');

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col w-full border border-[#EFEFEF] rounded my-3'>
                <ul className='flex p-1 justify-around bg-[#EFEFEf] gap-2 flex-1 items-center'>
                    {data.map((tabData, index) => {
                        return (
                            <li key={index} className={`text-center p-1  rounded min-w-16 h-7 text-xs ${activeTab === tabData ? "bg-[#2561E9] text-white" : "bg-transparent text-slate-500"}   hover:bg-[#2561E9] hover:text-[#fff] cursor-pointer`}
                                onClick={() => setActiveTabular(tabData)}>{tabData}</li>
                        )
                    })}
                </ul>
            </div>
            <div className=''>
                <ul className='p-2 flex flex-col'>
                    {activeTab === 'On Leave' && TabData.onLeave.map((item) => {
                        return (
                            <li key={item.id} className="flex gap-2 items-center p-2 border-b border-[#EFEFEF]">
                                <img src={item.avatar} alt={item.name} className='h-10 w-10 border-radius rounded' />
                                <div className='flex flex-col'>
                                    <span className='text-sm'>{item.name}</span>
                                    <span className='text-slate-500 text-xs '>{item.leaveFrom} - {item.leaveTill}</span>
                                </div>
                            </li>
                        )
                    })}
                    {activeTab === 'Active' && TabData.Active.map((item) => {
                        return (
                            <li key={item.id} className="flex gap-2 items-center p-2 border-b border-[#EFEFEF]">
                                <img src={item.avatar} alt={item.name} className='h-10 w-10 border-radius rounded' />
                                <div className='flex flex-col'>
                                    <span className='text-sm'>{item.name}</span>
                                    {/* <span className='text-slate-500 text-xs '>{item.leaveFrom} - {item.leaveTill}</span> */}
                                </div>
                            </li>
                        )
                    })}
                    {activeTab === 'On Boarding' && TabData.onLeave.map((item) => {
                        return (
                            <li key={item.id} className="flex gap-2 items-center p-2 border-b border-[#EFEFEF]">
                                <img src={item.avatar} alt={item.name} className='h-10 w-10 border-radius rounded' />
                                <div className='flex flex-col'>
                                    <span className='text-sm'>{item.name}</span>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>

    )
}