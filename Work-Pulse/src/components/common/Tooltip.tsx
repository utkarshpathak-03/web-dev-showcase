import { Info, Dot } from 'lucide-react';


export type TooltipType = 'increase' | 'decrease' | 'nochange' | '';

interface TooltipProps {
    val: string;
    type: TooltipType;
    table: boolean;
}

export default function Tooltip({ val, type = '', table = false }: TooltipProps) {

    const finalizeText = (): string => {
        if (type === 'increase') {
            return `${val} this month`
        } else if (type === 'decrease') {
            return `${val} from last month`
        } else {
            return `${val} completed`
        }
    }
    const finalizeColor = (): string => {
        if (type === 'increase') {
            return 'text-green-700 bg-[#EFFDF4]'
        } else if (type === 'decrease') {
            return 'text-red-700 bg-[#FFF4F4]'
        } else {
            return 'text-yellow-700 bg-[#FEFBE9]'
        }
    }

    const finalizeColorForTable = (): string => {
        if (val === 'Pending') {
            return 'text-yellow-700 bg-[#FEFBE9]'
        } else if (val === 'Approved') {
            return 'text-green-700 bg-[#EFFDF4]'
        } else {
            return 'text-red-700 bg-[#FFF4F4]'

        }
    }
    return (
        table ?
            <div className={`flex flex-row items-center h-6 p-1 rounded-lg max-w-24 ${finalizeColorForTable()} m-1`}>
                <Dot size={24} />
                <span className='text-[12px] m-1' >{val}</span>
            </div>
            :
            <div className={`flex flex-row items-center h-6 p-2 rounded-lg ${finalizeColor()} m-3`}>
                {type === 'decrease' && <Info size={16} className="text-red-500" />}
                <span className='text-[12px] m-1' >{finalizeText()}</span>
            </div>
    )
}