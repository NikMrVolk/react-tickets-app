import React from 'react'

import { cn } from '../../../utils/libs'

const styles = {
    button: 'w-full h-16 rounded-md cursor-pointer font-semibold shadow-md flex items-center justify-center transition-all duration-200 enabled:active:translate-y-0.5',
    standard: 'bg-btn-standard text-btn-standard-text enabled:hover:bg-btn-standard-hover',
    disabled: 'opacity-50 cursor-default',
}

type ButtonVariant = 'standard'
interface ButtonProps extends React.ComponentProps<'button'> {
    loading?: boolean
    disabled?: boolean
    variant?: ButtonVariant
    className?: string
    children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = 'standard', className = '', loading = false, disabled = false, ...props }, ref) => (
        <button
            className={cn(styles.button, styles[variant], { [styles.disabled]: disabled }, className, '')}
            type="button"
            disabled={disabled}
            {...props}
            ref={ref}
        >
            <span>{children}</span>
            {loading && <span />}
        </button>
    ),
)

Button.displayName = 'Button'
