import { ShieldX, SaveCheck, X } from 'lucide-react';

const Alert = ({ type = 'success', message = "Data saved successfully", onClose }) => {
    const isSuccess = type === 'success';

    return (
        <div
            className={`w-full max-w-lg min-h-10 px-4 py-2 rounded-lg flex items-center justify-between border transition-all duration-200 shadow-sm ${isSuccess
                    ? 'bg-[#E6F4EA] border-[#A8DADC] text-[#137333]'
                    : 'bg-[#FEE2E2] border-[#FCA5A5] text-[#991B1B]'
                }`}
        >
            <div className="flex gap-2.5 items-center">
                {isSuccess ? (
                    <SaveCheck className="h-4 w-4 shrink-0 text-[#137333]" />
                ) : (
                    <ShieldX className="h-4 w-4 shrink-0 text-[#DC2626]" />
                )}
                <span className="text-xs font-semibold">{message}</span>
            </div>

            {onClose && (
                <button
                    type="button"
                    onClick={onClose}
                    className="p-1 rounded hover:bg-black/5 transition-colors cursor-pointer flex items-center justify-center"
                >
                    <X className={`h-4 w-4 ${isSuccess ? 'text-[#137333]' : 'text-[#DC2626]'}`} />
                </button>
            )}
        </div>
    );
};

export default Alert;