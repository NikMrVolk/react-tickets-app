interface FilterWrapperElementProps {
    title: React.ReactNode
    children: React.ReactNode
}

export default function FilterWrapperElement({ title, children }: FilterWrapperElementProps) {
    return (
        <div className="flex flex-col gap-4">
            <p>{title}</p>
            <div>{children}</div>
        </div>
    )
}
