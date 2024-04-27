import { cn } from '../../utils/libs'

interface DashboardProps {
    Component?: keyof JSX.IntrinsicElements
    className?: string
    children: React.ReactNode
}

export const Dashboard = ({ children, Component = 'section', className = '' }: DashboardProps) => (
    <Component className={cn('rounded-md bg-white p-6 shadow-sm', className)}>{children}</Component>
)
