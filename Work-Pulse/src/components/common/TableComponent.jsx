import React from 'react'
import { MoveRight } from 'lucide-react'
import leave from '../../data/leave.json';
import Tooltip from './Tooltip';

export default function TableComponent() {

    return (
        <div className='p-2 flex flex-col border border-[#EFEFEF] rounded bg-[#FFF] flex-1 max-w-[932px]' >
            <div className='flex flex-row justify-between'>
                <h2 className='text-slate-900'>Leave Management </h2>
                <button className='flex items-center p-1 gap-2 text-xs text-slate-500 bg-white cursor-pointer hover:bg-gray-200 border border-[#EFEFEF] rounded'>See All <MoveRight size={16} /></button>
            </div>
            <table className='my-4 border border-[#EFEFEF] rounded w-full text-sm border-collapse' >
                <thead className='bg-[#F7F7F7] text-slate-400 text-xs text-left'>
                    <tr>
                        <th className='p-2'>Employee Name</th>
                        <th className='p-2'>Leave Type</th>
                        <th className='p-2'>Date</th>
                        <th className='p-2'>Status</th>
                        <th className='p-2'>Action</th>
                    </tr>
                </thead>
                <tbody className='text-slate-700'>
                    {
                        leave.map((record, index) => {
                            return (
                                <tr key={index} className='border-b border-[#EFEFEF] hover:bg-slate-50'>
                                    <td className='p-3 font-semibold'>{record.employeeName}</td>
                                    <td className='p-3 text-slate-400 font-light'>{record.leaveType}</td>
                                    <td className='p-3 text-slate-400 font-light'>{record.date}</td>
                                    <td className='p-3 '>{<Tooltip val={record.status} table={true} />}</td>
                                    <td className='p-3 '>{record.status}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}