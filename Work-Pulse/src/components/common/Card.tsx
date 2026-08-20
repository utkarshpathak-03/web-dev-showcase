import { MoveRight, LucideIcon } from "lucide-react"
import Tooltip from "./Tooltip.tsx";

interface DataInsights {
    data: string;
    val: string;
    type: 'increase' | 'decrease' | 'nochange';
}

interface CardArrProps {
    title: string;
    svgIconPath: LucideIcon;
    dataInsights: DataInsights;
    footerData: string;
    clickHandler: () => void;
}

export default function Card({ title, svgIconPath, dataInsights, footerData, clickHandler }: CardArrProps) {
    const Icon = svgIconPath
    return (
        <div className="flex flex-col my-2 border border-[#EFEFEF] rounded bg-[#FFF] flex-1  min-w-[250px] min-h-[125px] max-w-[300px] max-h-[150px]">
            <div className="p-3 flex flex-col">
                <div className="flex flex-row items-center">
                    <div className="h-6 w-6 border border-[#EFEFEF] rounded p-1 flex items-center">
                        <Icon size={18} className="stroke-[#2264F2]" />
                    </div>
                    <h2 className="text-md m-2 text-slate-900 text-bold">{title}</h2>
                </div>
                <div className="flex flex-row items-center">
                    <h2 className="text-bold text-[28px]" dangerouslySetInnerHTML={{ __html: dataInsights.data }} />
                    <Tooltip val={dataInsights.val} type={dataInsights.type} table={false} />
                </div>
            </div>
            <div className="bg-[#F7F7F7] flex flex-row justify-between p-2 text-[#828284] items-center">
                <span className="text-xs" dangerouslySetInnerHTML={{ __html: footerData }} />
                <button onClick={clickHandler} className="bg-white cursor-pointer hover:bg-gray-200 text-xs p-1 flex items-center gap-2 ml-2" >Details <MoveRight size={16} />  </button>
            </div>
        </div>
    )
}