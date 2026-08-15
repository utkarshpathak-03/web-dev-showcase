import React from 'react';
import Card from '../components/common/Card';
import PageHeader from '../components/common/PageHeader';
import { Users, BookPlus, Search, MoveRight } from "lucide-react"
import TableComponent from '../components/common/TableComponent';
import Tab from '../components/common/Tab';
import tabData from "../data/TabData.js"

export default function Dashboard() {
    console.log(tabData, "Tab Data Fashboard");
    const EmployeeDataObj = {
        data: '128',
        val: '+12',
        type: 'increase',
    }
    const LeaveDataObj = {
        data: '5',
        val: '28%',
        type: 'decrease',
    }
    const PayrollDataObj = {
        data: '98 <span class="text-sm text-gray-500">/128</span>',
        val: '76%',
        type: 'nochange',
    }
    const clickHandler = () => {
        console.log("Card clicked");
    }

    const cardArr = [
        { title: "Total Employees", svgIconPath: Users, dataInsights: EmployeeDataObj, footerData: "Active: 121 &nbsp; Inactive: 7", clickHandler: clickHandler },
        { title: "Leave requests", svgIconPath: BookPlus, dataInsights: LeaveDataObj, footerData: "2 Fewer Request", clickHandler: clickHandler },
        { title: "Payroll Completion", svgIconPath: Users, dataInsights: PayrollDataObj, footerData: "30 Payment Remaining", clickHandler: clickHandler },
    ]
    return (
        <div >
            <div className='flex flex-row justify-between w-full'>
                <div className='w-[75%]'><PageHeader title="Dashboard" /></div>
                <div className='flex border border-[#EFEFEF] w-[25%] rounded  min-w-[300px] bg-[#EFEFEF] items-center gap-2 p-2'>
                    <Search size={16} color="gray" className='mb-[1px]' />
                    <input id='search-dahsboard' name='search' placeholder={`Search`} className='text-sm w-100% min-w-[250px] outline-none' />

                </div>
            </div>
            <div className='w-full min-h-screen flex gap-4'>
                <div className='w-[75%]'>
                    <div className='flex flex-row items-center my-4 gap-4 flex-wrap flex-1 border-none'>
                        {cardArr.map((card, index) => (
                            <Card key={index} title={card.title} svgIconPath={card.svgIconPath} dataInsights={card.dataInsights} footerData={card.footerData} clickHandler={card.clickHandler} />
                        ))}

                    </div>
                    <TableComponent />
                </div>
                <div className='flex flex-col p-4 w-[25%] border border-[#EFEFEF] rounded min-h-screen my-6 gap-4 '>
                    <div className='flex flex-row justify-between'>
                        <h2 className=''>Employee Status</h2>
                        <button className='border border-[#EFEFEF] rounded flex items-center gap-2 p-1 text-xs hover:bg-gray-200 text-slate-500 cursor-pointer'>
                            See all <MoveRight size={16} />
                        </button>
                    </div>
                    <Tab TabData={tabData} />
                </div>
            </div>

        </div>


        // </MainLayout>

    )
}