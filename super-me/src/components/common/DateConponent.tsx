
interface DateComponentProps {
    date?: string
}
function DateComponent({ date = '' }: DateComponentProps) {
    return (
        <div className="h-16 w-12 flex flex-col ">
            <span className="bg-[#6A52D6] text-white font-medium text-md text-center rounded-t-md">{date.substring(5, 8)}</span>
            <span className="bg-[#F3F3FD] text-xl font-semibold text-center rounded-b-md">{date.substring(9, 12)}</span>
        </div>
    )
}
export default DateComponent