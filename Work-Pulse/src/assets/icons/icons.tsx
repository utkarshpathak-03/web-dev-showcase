import { SVGProps } from "react";
interface WorkPulseLogoProps extends SVGProps<SVGSVGElement> {
    className: string,
    color: string
}

export default function WorkPulseLogo({ className = "w-7 h-8", color = "#3F6DF0", ...props }: WorkPulseLogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            {...props}
        >
            {/* The Work / Briefcase Frame */}
            <path d="M14 2H10a2 2 0 0 0-2 2v2h8V4a2 2 0 0 0-2-2z" fill="none" />
            <path d="M6 6h12a2 2 0 0 1 2 2v3" />
            <path d="M20 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />

            {/* The Dynamic Pulse Line */}
            <path
                d="M3 14h3l2-4 3 8 2.5-11 2.5 7 2-3h3"
                strokeWidth="2.5"
            />
        </svg>
    );
}