interface PageHeaderProps {
    title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {
    return (
        <h1 className='p-0 m-0 text-2xl'>{title}</h1>
    )
}